import { useState } from "react";
import { Container, Grid } from "@mui/material";
import {
  ConvertButton,
  TextAreaInput,
  TextAreaOutput,
  Heading,
  ResponseAlert,
} from "../Common";
import apiClient from "../../services/api-client";
import { HL7_TO_FHIR_ABOUT_URL, BFF_BASE_URL } from "../Configs/Constants";

export const Hl7v2ToFhir = () => {
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
      .post("/v2tofhir/transform", data)
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
      <Heading
        heading="HL7V2 To FHIR"
        description="Convert HL7 V2 data to FHIR"
        url={HL7_TO_FHIR_ABOUT_URL}
      ></Heading>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
        marginTop={1}
      >
        <Grid item xs={12} sm={12} md={12} lg={5.5} xl={5.5}>
          <Grid container alignItems="center" justifyContent="center">
            <TextAreaInput
              label="Paste your HL7 resource here:"
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
