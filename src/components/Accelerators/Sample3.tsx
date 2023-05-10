import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import ReactJson from "react-json-view";
import CommonButton from "../Common/CommonButton";

interface JsonData {
  [key: string]: any;
}

const Sample3 = () => {
  const [inputJson, setInputJson] = useState<JsonData>({});
  const [showOutput, setShowOutput] = useState<boolean>(false);
  const [inputError, setInputError] = useState<boolean>(false);

  const handleInputJsonChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setInputError(false);
    try {
      const jsonData = JSON.parse(value);
      setInputJson(jsonData);
    } catch (error) {
      setInputJson({});
      setInputError(true);
    }
  };

  const handleValidateClick = () => {
    setShowOutput(true);
  };

  const handleResetClick = () => {
    setInputJson({});
    setShowOutput(false);
    setInputError(false);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>
            <h3>Input JSON Viewer</h3>
            <TextField
              id="input-json"
              label="Input JSON"
              error={inputError}
              helperText={inputError ? "Invalid JSON format" : ""}
              onChange={handleInputJsonChange}
              fullWidth
              multiline
              rows={10}
              variant="outlined"
            />
            <CommonButton
              variant="background"
              label="Validate"
              onClick={handleValidateClick}
            />
            {showOutput && (
              <CommonButton
                variant="border"
                label="Reset"
                onClick={handleResetClick}
              />
            )}
          </Paper>
        </Grid>
        {showOutput && (
          <>
            <Grid item xs={6}>
              <Paper>
                <h3>Input</h3>
                <ReactJson
                  name="input-json-pretty"
                  src={inputJson}
                  displayDataTypes={false}
                  displayObjectSize={false}
                  theme="monokai"
                  style={{ fontSize: "16px" }}
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <h3>Output</h3>
                <ReactJson
                  name="output-json-pretty"
                  src={inputJson}
                  displayDataTypes={false}
                  displayObjectSize={false}
                  theme="monokai"
                  style={{ fontSize: "16px" }}
                />
              </Paper>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default Sample3;
