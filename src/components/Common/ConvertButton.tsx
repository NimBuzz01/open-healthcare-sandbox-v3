import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  handleSubmit?(): any;
}

const ConvertButton = ({ handleSubmit }: Props) => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: 1,
        color: "success.main",
        border: 1,
        borderColor: "primary.light",
        ":hover": {
          border: 1,
          borderColor: "secondary.light",
        },
      }}
      onClick={handleSubmit}
    >
      <ArrowForwardIosIcon
        sx={{ width: 50, height: 50 }}
      ></ArrowForwardIosIcon>
    </Button>
  );
};

export default ConvertButton;
