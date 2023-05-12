import { Box, Grid, TextField, Typography } from "@mui/material";
import UploadIcon from "./UploadIcon";
import CopyContent from "./CopyContent";

interface Props {
  label: string;
  rows?: number;
  width?: string;
  isUploadRequired?: boolean;
  isCopyRequired?: boolean;
  iconWidth?: number;
  data?: string;
  handleOnChange?(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): any;
  readFile(fileInput?: string | ArrayBuffer | null): any;
}

const TextAreaInput = ({
  label,
  rows = 30,
  width = "950px",
  isUploadRequired = false,
  isCopyRequired = true,
  iconWidth = 25,
  handleOnChange,
  readFile,
  data,
}: Props) => {

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8} xl={8}>
          <Typography
            color="secondary.dark"
            variant="h5"
            sx={{ fontWeight: 400, py: 1 }}
          >
            {label}
          </Typography>
        </Grid>
        <Grid item xs={4} xl={4}>
          <Box
            justifyContent="right"
            alignItems="right"
            sx={{ display: "flex" }}
          >
            {isCopyRequired && <CopyContent size={iconWidth} data={data!} />}
            {isUploadRequired && (
              <UploadIcon size={iconWidth} readFile={readFile} />
            )}
          </Box>
        </Grid>
      </Grid>

      <TextField
        multiline
        rows={rows}
        variant="outlined"
        style={{ width: width }}
        onChange={handleOnChange}
        value={data && data}
      />
    </>
  );
};

export default TextAreaInput;
