import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  handleSubmit?(): any;
}

export const ConvertButton = ({ handleSubmit }: Props) => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: 1,
        color: "secondary.main",
        border: 1,
        borderColor: "grey.400",
        ":hover": {
          border: 1,
          borderColor: "secondary.light",
        },
      }}
      onClick={handleSubmit}
    >
      <ArrowForwardIosIcon sx={{ width: 50, height: 50 }}></ArrowForwardIosIcon>
    </Button>
  );
};
