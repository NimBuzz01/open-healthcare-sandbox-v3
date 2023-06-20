import { Container } from "@mui/material";
import { APIResourceBody } from "./APIResourceBody";

export const FhirApis = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", flexDirection: "column", height: 1 }}
    >
      <APIResourceBody />
    </Container>
  );
};
