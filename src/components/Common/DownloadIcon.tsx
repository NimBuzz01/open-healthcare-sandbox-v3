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
        aria-label="upload file"
        component="span"
        sx={{
          color: "primary.main",
        }}
        onClick={handleDownload}
      >
        <CloudDownloadRounded sx={{ fontSize: size }} />
      </IconButton>
    </>
  );
};
