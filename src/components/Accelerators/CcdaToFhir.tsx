import { Container, Grid } from "@mui/material";
import {
  TextAreaInput,
  TextAreaOutput,
  ConvertButton,
  ResponseAlert,
} from "../Common";
import { useState } from "react";
import { BFF_BASE_URL } from "../Configs/Constants";
import apiClient from "../../services/api-client";

export const CcdaToFhir = () => {
  const [data, setData] = useState("");
  const [response, setResponse] = useState({});
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setData(event.target.value);
  };

  const readFile = (fileInput?: string | ArrayBuffer | null) => {
    if (typeof fileInput == "string") {
      setData(fileInput);
    }
  };

  const callBackend = () => {
    setResponse("");
    setIsOpen(true);
    setError("");

    apiClient(BFF_BASE_URL)
      .post("/ccdatofhir/transform", data)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        setError(error.message);
        setResponse(error.response);
      });
  };

  return (
    <Container maxWidth="xl">
      {error && (
        <ResponseAlert
          isOpen={isOpen}
          severity="error"
          message={error}
          setIsOpen={setIsOpen}
        />
      )}
      <Grid
        container
        spacing={2}
        marginTop={1}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={5.5} xl={5.5}>
          <Grid container alignItems="center" justifyContent="center">
            <TextAreaInput
              label="Paste your C-CDA resource here:"
              handleOnChange={handleOnChange}
              isUploadRequired
              readFile={readFile}
              data={data}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
          <Grid container alignItems="center" justifyContent="center">
            <ConvertButton handleSubmit={callBackend} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5.5} xl={5.5}>
          <Grid container alignItems="center" justifyContent="center">
            <TextAreaOutput
              label="Converted FHIR resource here:"
              data={response}
              isDownloadButtonRequired
              isJson
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
