import { useEffect, useState } from "react";
import { Alert, Box, IconButton, Tooltip, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

interface Props {
  data: string;
  size?: number;
}

export const CopyContent = ({ data, size = 30 }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }, [isCopied]);

  return (
    <Tooltip
      key="copy-icon"
      title="Copy Content"
      placement="bottom"
      id="copy-tooltip"
    >
      <Box style={{ display: "flex" }}>
        <Typography component="span">
          {isCopied && (
            <Alert
              severity="success"
              icon={<TaskAltIcon sx={{ fontSize: 15 }} />}
              sx={{ fontSize: 10, py: 0.3 }}
              id="copy-alert"
            >
              Copied
            </Alert>
          )}
        </Typography>
        <IconButton
          aria-label="Copy Content"
          aria-labelledby="copy-button"
          sx={{
            color: "primary.main",
          }}
          onClick={() => {
            navigator.clipboard.writeText(data!);
            setIsCopied(true);
          }}
        >
          <ContentCopyIcon sx={{ fontSize: size }} aria-hidden="true" />
        </IconButton>
      </Box>
    </Tooltip>
  );
};
