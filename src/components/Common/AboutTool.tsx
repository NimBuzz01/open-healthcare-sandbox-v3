import { IconButton, Link, Tooltip, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface Props {
  url: string;
  iconType?: boolean;
}

export const AboutTool = ({ url, iconType }: Props) => {
  return (
    <Link href={url} target="_blank" underline="none">
      {iconType ? (
        <Tooltip key={"about-tool"} title={"About Tool"} placement="right">
          <IconButton color="primary" sx={{ p: 0 }}>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            transition: "0.3s",
            ":hover": { color: "primary.dark" },
          }}
        >
          Learn more
        </Typography>
      )}
    </Link>
  );
};
