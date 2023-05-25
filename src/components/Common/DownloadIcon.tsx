import { IconButton, Tooltip } from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

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
          <FileDownloadOutlinedIcon sx={{ fontSize: size }} />
        </IconButton>
      </Tooltip>
    </>
  );
};
