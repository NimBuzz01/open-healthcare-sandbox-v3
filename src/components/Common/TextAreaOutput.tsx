import { Box, Grid, TextField, Typography } from "@mui/material";
import FileSaver from "file-saver";
import ReactJson from "react-json-view";
import { DownloadIcon, CopyContent } from "../Common";

interface Props {
  label: string;
  rows?: number;
  width?: number;
  isDownloadButtonRequired?: boolean;
  isCopyRequired?: boolean;
  iconWidth?: number;
  data?: {};
  isJson?: boolean;
  handleOnChange?(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): any;
}

export const TextAreaOutput = ({
  label,
  rows = 30,
  width = 1,
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
            color="primary.dark"
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
              <CopyContent data={JSON.stringify(data!)} />
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
            borderColor: "grey.400",
            p: 1,
          }}
        >
          {data && (
            <ReactJson
              name={false}
              src={data!}
              displayDataTypes={false}
              displayObjectSize={false}
              enableClipboard={false}
              style={{ fontSize: "14px" }}
              onEdit={() => ({ handleOnChange })}
              theme="summerfruit:inverted"
            />
          )}
        </Box>
      ) : (
        <TextField
          multiline
          rows={rows}
          variant="outlined"
          sx={{ width: width }}
          onChange={handleOnChange}
          value={data && JSON.stringify(data, null, 2)}
        />
      )}
    </>
  );
};
