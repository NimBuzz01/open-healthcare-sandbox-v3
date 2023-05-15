import { Box, Grid, TextField, Typography } from "@mui/material";
import DownloadIcon from "./DownloadIcon";
import FileSaver from "file-saver";
import CopyContent from "./CopyContent";
import ReactJson from "react-json-view";

interface Props {
  label: string;
  rows?: number;
  width?: string;
  isDownloadButtonRequired?: boolean;
  isCopyRequired?: boolean;
  iconWidth?: number;
  data?: {};
  isJson?: boolean;
  handleOnChange?(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): any;
}

const TextAreaOutput = ({
  label,
  rows = 30,
  width = "950px",
  isDownloadButtonRequired = false,
  isCopyRequired = true,
  iconWidth = 25,
  handleOnChange,
  data,
  isJson,
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

      {isJson ? (
        <Box
          sx={{
            overflow: "auto",
            height: 634,
            width: 1,
            border: 1,
            borderRadius: 1,
            borderColor: "primary.light",
            p:1,
          }}
        >
          <ReactJson
            name="fhir-output"
            src={data!}
            displayDataTypes={false}
            displayObjectSize
            style={{ fontSize: "14px" }}
            onEdit={() => {}}
            theme="summerfruit:inverted"
          />
        </Box>
      ) : (
        <TextField
          multiline
          rows={rows}
          variant="outlined"
          style={{ width: width }}
          onChange={handleOnChange}
          value={data && JSON.stringify(data, null, 2)}
        />
      )}
    </>
  );
};

export default TextAreaOutput;
