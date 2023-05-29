import { useState } from "react";
import { Box, Container } from "@mui/material";
import { TextAreaInput, TextAreaOutput, CommonButton, ResponseAlert } from "../../Common";
import axios from "axios";

interface Props {
  backendUrl: string;
}

export const CreateOperationContent = ({backendUrl}: Props) => {
  const [request, setRequest] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(event.target.value);
    setRequest(event.target.value);
  };

  const callBackend = () => {
    setData("");
    setError("");

    axios
      .post(backendUrl, request)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setData(err.response.data);
      });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      {error && (
        <ResponseAlert
          isOpen={isOpen}
          severity="error"
          message={error}
          setIsOpen={setIsOpen}
        />
      )}
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mb: 2 }}>
        <CommonButton
          variant="background"
          label="Execute"
          onClick={callBackend}
        />
        <CommonButton
          variant="border"
          label="Clear"
          onClick={() => {
            setData("");
            setRequest("");
          }}
        />
      </Box>
      <TextAreaInput
        label="Input: "
        isCopyRequired
        isUploadRequired
        handleOnChange={handleOnChange}
        data={request}
      />
      {data && (
        <Box sx={{ mt: 5 }}>
          <TextAreaOutput
            label={"Output"}
            isDownloadButtonRequired
            data={data}
          ></TextAreaOutput>
        </Box>
      )}
    </Container>
  );
};
