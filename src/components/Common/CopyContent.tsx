import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface Props {
  data: string;
  size?: number;
}

const CopyContent = ({ data, size = 25 }: Props) => {
  return (
    <IconButton
      color="primary"
      aria-label="upload file"
      component="span"
      onClick={() => {
        navigator.clipboard.writeText(data!);
      }}
    >
      <ContentCopyIcon sx={{ fontSize: { size } }} />
    </IconButton>
  );
};

export default CopyContent;
