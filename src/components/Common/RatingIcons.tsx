import { useEffect, useState } from "react";
import { Alert, Box, IconButton, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";

interface ToolRatingProps {
  toolName: string;
}

interface ToolState {
  toolName: string;
  isThumbsUpSelected: boolean;
  isThumbsDownSelected: boolean;
}

export const RatingIcons = ({ toolName }: ToolRatingProps) => {
  const [toolStates, setToolStates] = useState<ToolState[]>([]);
  const [isRated, setIsRated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsRated(false);
    }, 2000);
  }, [isRated]);

  const handleThumbsUpClick = (clickedToolName: string) => {
    setToolStates((prevStates) =>
      prevStates.map((state) =>
        state.toolName === clickedToolName
          ? { ...state, isThumbsUpSelected: true, isThumbsDownSelected: false }
          : state
      )
    );
    setIsRated(true);
  };

  const handleThumbsDownClick = (clickedToolName: string) => {
    setToolStates((prevStates) =>
      prevStates.map((state) =>
        state.toolName === clickedToolName
          ? { ...state, isThumbsUpSelected: false, isThumbsDownSelected: true }
          : state
      )
    );
    setIsRated(true);
  };

  const addTool = (toolName: string) => {
    setToolStates((prevStates) => [
      ...prevStates,
      {
        toolName,
        isThumbsUpSelected: false,
        isThumbsDownSelected: false,
      },
    ]);
  };

  const findToolState = (toolName: string) => {
    return toolStates.find((state) => state.toolName === toolName);
  };

  const toolState = findToolState(toolName);

  if (!toolState) {
    addTool(toolName);
    return null;
  }

  const { isThumbsUpSelected, isThumbsDownSelected } = toolState;

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h6" color="primary.dark" sx={{ mr: 1 }}>
        Rate This Tool:
      </Typography>
      <IconButton
        id={`${toolName}.positive`}
        key={`${toolName}.positive`}
        sx={{
          color: isThumbsUpSelected ? "success.main" : "default",
          "&:hover": {
            transform: "scale(1.15)",
            transition: "transform 0.2s ease",
          },
        }}
        onClick={() => handleThumbsUpClick(toolName)}
      >
        <ThumbUpIcon />
      </IconButton>
      <IconButton
        id={`${toolName}.negative`}
        key={`${toolName}.negative`}
        sx={{
          color: isThumbsDownSelected ? "error.main" : "default",
          "&:hover": {
            transform: "scale(1.15)",
            transition: "transform 0.2s ease",
          },
        }}
        onClick={() => handleThumbsDownClick(toolName)}
      >
        <ThumbDownIcon />
      </IconButton>
      {isRated && (
        <Alert
          severity="success"
          icon={<SentimentSatisfiedOutlinedIcon sx={{ fontSize: 20 }} />}
          sx={{
            fontSize: 12,
            py: 0.3,
            position: "absolute",
            top: 50,
            right: 20,
          }}
        >
          Thank you for your rating!
        </Alert>
      )}
    </Box>
  );
};
