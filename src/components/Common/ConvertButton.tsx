import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  handleSubmit?(): any;
}

const ConvertButton = ({ handleSubmit }: Props) => {
  return (
    <Button variant="outlined" onClick={handleSubmit}>
      <ArrowForwardIosIcon
        color="secondary"
        sx={{ fontSize: 70 }}
        onClick={() => {
          console.log("Clicked");
        }}
      ></ArrowForwardIosIcon>
    </Button>
  );
};

export default ConvertButton;
