import { Button } from "@mui/material";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

interface Props {
  handleSubmit?(): any;
}

export const ConvertButton = ({ handleSubmit }: Props) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      endIcon={<NavigateNextOutlinedIcon />}
      sx={{
        fontSize: 14,
        color: "background.default",
      }}
      onClick={handleSubmit}
    >
      Convert to FHIR
    </Button>
  );
};
