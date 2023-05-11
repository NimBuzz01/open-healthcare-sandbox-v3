import Heading from "../Common/Heading";
import { Container, Grid } from "@mui/material";
import TextArea from "../Common/TextArea";
import { useState } from "react";
import axios from "axios";
import CommonButton from "../Common/CommonButton";

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
          "eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI0NWUyM2MyZC1kYmI4LTRiZDAtODI0NS0xMzFmZGFhNmY2ZmFAY2FyYm9uLnN1cGVyIiwiaXNzIjoiaHR0cHM6XC9cL3N0cy5jaG9yZW8uZGV2OjQ0M1wvb2F1dGgyXC90b2tlbiIsImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJobDd2MnRvZmhpcmhlYWx0aGNhcmVhY2NlbGVyYXRvciAtIEVuZHBvaW50IDkwOTAgOCIsImNvbnRleHQiOiJcL2MzMjYxOGNmLTM4OWQtNDRmMS05M2VlLWI2N2EzNDY4YWFlM1wvaGRiYlwvaGw3djJ0b2ZoaXJoZWFsdGhjYXJlYWNjZWxlcmF0b3JcL2VuZHBvaW50LTkwOTAtODAzXC8xLjAuMCIsInB1Ymxpc2hlciI6ImNob3Jlb19wcm9kX2FwaW1fYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjpudWxsfV0sImV4cCI6MTY4Mzc5NDk0MiwidG9rZW5fdHlwZSI6IkludGVybmFsS2V5IiwiaWF0IjoxNjgzNzk0MzQyLCJqdGkiOiI5Y2I0MzJiNi01NTQ2LTRmZDMtOGY3Mi05MjhmY2NiYzA4MzMifQ.V3kQn5YH5rP1wcW5sWAdri1gMdBjbEKc_oQyUgcxvTmmV4RRNDRFgAn5gfsM786mRY-G190lk9rnLVSyXDrYahNlwev5ShrB64GKbDEGciS37nQHH5ePPqz34mpXzROzVx-0xrTum0-FoCQpZV2ni7k4OQw9oSHRUJVHdaMQ5jE3ndZcCG37M-ZQcBogp1RE7DZap7QSlydqhbXLBVXUSOUFZNnpGpWKVRo0YZ9ZgceLpOBB48m6iLrdqiCG71Y8gpgF61s3UrHjgC8IY5Z85Y3zGYB0wBeU-lgc80kmcDM_-6I21E7zrdsINbjJ_hQqdQ39EC8r3sGQdLVyMbhtrw1xYhWK9eHO5coHy2vE3JAlTgeETu1o8zksfsWBRwWIpRfAW1hSCnypuZVnhcTFt_rEMqlTaeNOjEqsFxYJ1zgrovDMllNlxyvNaxlK_V-0XQQO2xJ3VJmfap-sVmKSFLJMBGrkhvbCos1aW9Qk0wiYJgmtYonSTdoHenleeWKs69jgfc1J7MK1H7_mZRgwOhKa8syyGAiG_kHDnAz197ZHzMavtZdQzd6Hi1CUoKs55cWbEz5XsuqXChqszfB9iw9pChLgOcDklBQJAUAndrvsKH_GOaTgCiekv2NrOuhhcekVeokVFwdZR5dhJpEQNS6Mwp9xWVigW5P2OXMIu4I",
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
            <CommonButton variant="border" onClick={callBackend} label="Convert"/>
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
