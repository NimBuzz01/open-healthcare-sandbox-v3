import { Box, Grid, TextField, Typography } from "@mui/material";
import UploadIcon from "./UploadIcon";

interface Props {
  label: string;
  rows?: number;
  maxRows?: string;
  width?: string;
  isUploadRequired?: boolean;
  iconWidth?: number;
  data?: {};
  handleOnChange?(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): any;
}

const TextArea = ({
  label,
  rows = 25,
  maxRows = "Infinity",
  width = "700px",
  isUploadRequired = false,
  iconWidth = 30,
  handleOnChange,
  data,
}: Props) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8} xl={8}>
          <Typography
            color="secondary.dark"
            variant="h5"
            sx={{ fontWeight: 400, py:1 }}
          >
            {label}
          </Typography>
        </Grid>
        <Grid item xs={4} xl={4}>
          <Box justifyContent="right" alignItems="right">
            {isUploadRequired && <UploadIcon size={iconWidth} />}
          </Box>
        </Grid>
      </Grid>

      <TextField
        multiline
        rows={rows}
        maxRows={maxRows}
        variant="outlined"
        style={{ width: width }}
        onChange={handleOnChange}
        value={data && JSON.stringify(data, null, 2)}
      />
    </>
  );
};

export default TextArea;
