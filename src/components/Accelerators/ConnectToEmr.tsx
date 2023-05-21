import { Container } from "@mui/material";
import { Heading, CodeEditor } from "../Common";
import { CONNECT_TO_EMR_ABOUT_URL } from "../Configs/Constants";

export const ConnectToEmr = () => {
  return (
    <Container maxWidth="xl">
      <Heading
        heading="Connect to EMR"
        description="Connect with your EMR system"
        url={CONNECT_TO_EMR_ABOUT_URL}
      ></Heading>
      <CodeEditor />
    </Container>
  );
};
