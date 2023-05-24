import { IconButton, Tooltip } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

interface Props {
  size?: number;
  handleDownload(): any;
}

export const DownloadIcon = ({ size = 30, handleDownload }: Props) => {
  return (
    <>
      <Tooltip key="download-icon" title="Download Content" placement="bottom">
        <IconButton
          aria-label="download file"
          sx={{
            color: "primary.main",
          }}
          onClick={handleDownload}
        >
          <FileDownloadIcon sx={{ fontSize: size }} />
        </IconButton>
      </Tooltip>
    </>
  );
};
