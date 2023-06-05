import { IconButton, Link, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface Props {
  url: string;
}

export const AboutTool = ({ url }: Props) => {
  return (
    <Link href={url} target="_blank" underline="none">
      <Tooltip key={"about-tool"} title={"About Tool"} placement="right">
        <IconButton color="primary" sx={{ p: 0 }}>
          <InfoOutlinedIcon />
        </IconButton>
      </Tooltip>
    </Link>
  );
};
