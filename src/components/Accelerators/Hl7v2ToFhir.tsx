import Heading from "../Common/Heading";
import { Container, Grid } from "@mui/material";
import TextArea from "../Common/TextArea";
import { useState } from "react";
import axios from "axios";
import ConvertButton from "../Common/ConvertButton";

const Hl7v2ToFhir = () => {
  const [data, setData] = useState("");
  const [response, setResponse] = useState({});

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setData(event.target.value);
  };

  const callBackend = () => {
    let config = {
      headers: {
        "API-Key":
          "",
      },
    };
    const url: string =
      "https://c32618cf-389d-44f1-93ee-b67a3468aae3-dev.e1-us-east-azure.choreoapis.dev/hdbb/hl7v2tofhirhealthcareaccelerator/endpoint-9090-803/1.0.0/v2tofhir/transform";

    axios
      .post(url, data, config)
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
            <TextArea
              label="Paste your HL7 resource here:"
              handleOnChange={handleOnChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2} xl={1.4}>
          <Grid container alignItems="center" justifyContent="center">
            <ConvertButton  handleSubmit={callBackend} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5.3}>
          <Grid container alignItems="center" justifyContent="center">
            <TextArea label="Converted FHIR resource here:" data={response} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hl7v2ToFhir;
