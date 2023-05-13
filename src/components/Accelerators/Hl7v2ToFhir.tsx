import Heading from "../Common/Heading";
import { Container, Grid } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import ConvertButton from "../Common/ConvertButton";
import TextAreaInput from "../Common/TextAreaInput";
import TextAreaOutput from "../Common/TextAreaOutput";

const Hl7v2ToFhir = () => {
  const [data, setData] = useState("");
  const [response, setResponse] = useState({});

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setData(event.target.value);
  };

  const readFile = (
    fileInput?: string | ArrayBuffer | null
  ) => {
    console.log(fileInput);
    if (typeof fileInput == "string") {
      setData(fileInput);
    }
  };

  const callBackend = () => {
    const url: string =
      "https://c32618cf-389d-44f1-93ee-b67a3468aae3-dev.e1-us-east-azure.choreoapis.dev/hdbb/bffservice/endpoint-9090-803/1.0.0/v2tofhir/transform";

    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        setResponse(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container>
      <Heading
        heading="HL7V2 To FHIR"
        description="Convert HL7 V2 data to FHIR"
        url="https://wso2.com/solutions/healthcare/"
      ></Heading>
      <Grid
        container
        spacing={2}
        marginTop={1}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5.3}>
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
        <Grid item xs={12} sm={12} md={12} lg={2} xl={1.4}>
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
      </Grid>
    </Container>
  );
};

export default Hl7v2ToFhir;
