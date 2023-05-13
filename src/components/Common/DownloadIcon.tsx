import { IconButton } from "@mui/material";
import { CloudDownloadRounded } from "@mui/icons-material";

interface Props {
  size?: number;
  handleDownload(): any;
}

const DownloadIcon = ({ size = 30, handleDownload }: Props) => {
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

export default DownloadIcon;
