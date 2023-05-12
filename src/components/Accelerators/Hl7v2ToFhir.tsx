import Heading from "../Common/Heading";
import {
  Alert,
  Box,
  Collapse,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ConvertButton from "../Common/ConvertButton";
import TextAreaInput from "../Common/TextAreaInput";
import TextAreaOutput from "../Common/TextAreaOutput";
import apiClient from "../../services/api-client";
import { HL7_TO_FHIR_CONVERTER_BASE_URL } from "../Constants";
import ReactJson from "react-json-view";

const Hl7v2ToFhir = () => {
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

    apiClient(HL7_TO_FHIR_CONVERTER_BASE_URL)
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
        <Collapse in={isOpen}>
          <Box display="flex" justifyContent="flex-end">
            <Alert
              severity="error"
              sx={{ fontSize: 15, width: 500 }}
              onClose={() => {
                setIsOpen(false);
              }}
            >
              {error}
            </Alert>
          </Box>
        </Collapse>
      )}
      <Heading
        heading="HL7V2 To FHIR"
        description="Convert HL7 V2 data to FHIR"
        url="https://wso2.com/solutions/healthcare/"
      ></Heading>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
        marginTop={1}
      >
        <Grid item xs={12} sm={12} md={12} lg={5} xl={4}>
          <Grid container alignItems="center" justifyContent="center">
            <TextAreaInput
              label="Paste your HL7 resource here:"
              handleOnChange={handleOnChange}
              isUploadRequired={true}
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
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5.3}>
          <Grid container alignItems="center" justifyContent="center">
            <TextAreaOutput
              label="Converted FHIR resource here:"
              data={response}
              isDownloadButtonRequired={true}
            />
          </Grid>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={12} lg={6} xl={7}>
          <Grid container alignItems="center">
            <Typography variant="h5" sx={{ color: "secondary.dark", py:1 }}>
              Converted FHIR resource here:
            </Typography>
            <Box
              sx={{
                overflow: "auto",
                height: 533,
                width: 1,                
                border: 1,
                borderRadius: 1,
                borderColor: "primary.light",
                fontSize: 20
              }}
            >
              <ReactJson
                name="fhir-output"                
                src={response}
                displayDataTypes={false}
                displayObjectSize
                style={{ fontSize: "16px" }}
                onEdit={() => {}}
                theme="summerfruit:inverted"
              />
            </Box>
          </Grid> */}
      </Grid>
    </Container>
  );
};

export default Hl7v2ToFhir;
