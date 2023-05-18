import { Container, Grid } from "@mui/material";
import { TextAreaInput, Heading } from "../Common";
import { FHIR_PATH_ABOUT_URL } from "../Configs/Constants";

export const FhirPath = () => {
  return (
    <Container maxWidth="xl">
      <Heading
        heading="Connect to EMR"
        description="Connect with your EMR system"
        url={FHIR_PATH_ABOUT_URL}
      ></Heading>
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
              label="Paste your request resource here:"
              readFile={function (
                fileInput?: string | ArrayBuffer | null | undefined,
                errors?: Error | undefined
              ) {
                throw new Error("Function not implemented.");
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
