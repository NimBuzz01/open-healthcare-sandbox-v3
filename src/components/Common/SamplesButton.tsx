import { Button } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

interface ButtonProps {
  onClick?: () => void;
}

export const SamplesButton = ({ onClick }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      id="samples-button"
      endIcon={<ArticleOutlinedIcon />}
      sx={{ fontSize: 14, color: "background.default", textTransform: "none" }}
      onClick={onClick}
    >
      Load Samples
    </Button>
  );
};
