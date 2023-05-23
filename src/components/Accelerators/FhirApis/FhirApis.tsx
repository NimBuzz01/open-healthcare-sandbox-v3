import { Container, Typography } from "@mui/material";
import { APIResourceBody } from "./APIResourceBody";

export const FhirApis = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h5"
        sx={{ mt: 2, fontWeight: 500, color: "primary.dark" }}
      >
        Select API :
      </Typography>
      <APIResourceBody />
    </Container>
  );
};
