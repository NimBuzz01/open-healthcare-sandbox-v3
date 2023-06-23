import { Button, CircularProgress } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Props {
  handleSubmit?(): any;
  isLoading: boolean;
}

export const ConvertButton = ({ isLoading, handleSubmit }: Props) => {
  return (
    <Button
      id="convert-button"
      variant="contained"
      color="secondary"
      endIcon={
        isLoading ? (
          <CircularProgress
            size={16}
            sx={{ color: "background.default", ml: 0.46 }}
          />
        ) : (
          <ArrowForwardIcon />
        )
      }
      sx={{
        fontSize: 14,
        color: "background.default",
        textTransform: "none",
        width: 180,
        mr: 3,
      }}
      onClick={handleSubmit}
    >
      Convert to FHIR
    </Button>
  );
};
