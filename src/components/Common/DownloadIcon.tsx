import { CloudDownloadRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface Props {
  size?: number;
  handleDownload(): any;
}

export const DownloadIcon = ({ size = 30, handleDownload }: Props) => {
  return (
    <>
      <IconButton
        color="primary"
        aria-label="upload file"
        component="span"
        onClick={handleDownload}
      >
        <CloudDownloadRounded sx={{ fontSize: size }} />
      </IconButton>
    </>
  );
};
