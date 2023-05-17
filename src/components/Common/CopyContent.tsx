import { useEffect, useState } from "react";
import { Alert, Box, IconButton, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

interface Props {
  data: string;
  size?: number;
}

export const CopyContent = ({ data, size = 25 }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 4000);
  }, [isCopied]);

  return (
    <>
      <Box style={{ display: "flex" }}>
        <Typography component="span">
          {isCopied && (
            <Alert
              severity="success"
              icon={<TaskAltIcon sx={{ fontSize: 15 }} />}
              sx={{ fontSize: 10 }}
            >
              Copied
            </Alert>
          )}
        </Typography>
        <IconButton
          aria-label="upload file"
          component="span"
          sx={{
            color: "primary.main",
          }}
          onClick={() => {
            navigator.clipboard.writeText(data!);
            setIsCopied(true);
          }}
        >
          <ContentCopyIcon sx={{ fontSize: { size } }} />
        </IconButton>
      </Box>
    </>
  );
};
