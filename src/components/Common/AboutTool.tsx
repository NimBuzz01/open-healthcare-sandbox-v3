import { IconButton, Link, Tooltip, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface Props {
  url: string;
  iconType?: boolean;
}

export const AboutTool = ({ url, iconType }: Props) => {
  return (
    <Link
      href={url}
      target="_blank"
      underline="none"
      id="about-tool-link"
      aria-label="About Tool Link"
    >
      {iconType ? (
        <Tooltip
          key="about-tool"
          title="About Tool"
          placement="right"
          id="about-tool-tooltip"
          aria-label="About Tool Tooltip"
        >
          <IconButton
            color="primary"
            sx={{ p: 0 }}
            id="about-tool-icon-button"
            aria-label="About Tool Icon Button"
          >
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
          id="about-tool-typography"
          aria-label="About Tool Typography"
        >
          Learn more
        </Typography>
      )}
    </Link>
  );
};
