import { Alert, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useEffect, useState } from "react";

interface Props {
  data: string;
  size?: number;
}

const CopyContent = ({ data, size = 25 }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 4000);
  }, [isCopied]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <span>
          {isCopied && (
            <Alert
              severity="success"
              icon={<TaskAltIcon sx={{ fontSize: 15 }} />}
              sx={{ fontSize: 10 }}
            >
              Copied
            </Alert>
          )}
        </span>
        <IconButton
          color="primary"
          aria-label="upload file"
          component="span"
          onClick={() => {
            navigator.clipboard.writeText(data!);
            setIsCopied(true);
          }}
        >
          <ContentCopyIcon sx={{ fontSize: { size } }} />
        </IconButton>
      </div>
    </>
  );
};

export default CopyContent;
