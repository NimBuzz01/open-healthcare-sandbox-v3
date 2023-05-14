import { Box, Grid, TextField, Typography } from "@mui/material";
import DownloadIcon from "./DownloadIcon";
import FileSaver from "file-saver";
import CopyContent from "./CopyContent";

interface Props {
  label: string;
  rows?: number;
  maxRows?: string;
  width?: string;
  isDownloadButtonRequired?: boolean;
  isCopyRequired?: boolean;
  iconWidth?: number;
  data?: {};
  handleOnChange?(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): any;
}

const TextAreaOutput = ({
  label,
  rows = 30,
  maxRows = "Infinity",
  width = "950px",
  isDownloadButtonRequired = false,
  isCopyRequired = true,
  iconWidth = 25,
  handleOnChange,
  data,
}: Props) => {
  const downloadContent = () => {
    if (data != null) {
      const content: string = JSON.stringify(data, null, 2);
      var file = new File([content], "output.json", {
        type: "application/json;charset=utf-8",
      });
      FileSaver.saveAs(file);
    }
  };

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
            {isCopyRequired && (
              <CopyContent size={iconWidth} data={JSON.stringify(data!)} />
            )}
            {isDownloadButtonRequired && (
              <DownloadIcon size={iconWidth} handleDownload={downloadContent} />
            )}
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

export default TextAreaOutput;
