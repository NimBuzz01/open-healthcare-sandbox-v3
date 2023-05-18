import { Container } from "@mui/material";
import { Heading } from "../../Common";
import { APIResourceBody } from "./APIResourceBody";
import { FHIR_APIS_ABOUT_URL } from "../../Configs/Constants";

export const FhirApis = () => {
  return (
    <Container maxWidth="xl">
      <Heading
        heading="FHIR APIs"
        description="Try out a set of sample fhir apis"
        url={FHIR_APIS_ABOUT_URL}
      ></Heading>
      <APIResourceBody />
    </Container>
  );
};
