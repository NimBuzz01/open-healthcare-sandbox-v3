import React, { useCallback, useState } from "react";
import { Box, Button, Container, Divider } from "@mui/material";
import {
  ConvertButton,
  SamplesModal,
  ToggleDarkMode,
  CodeEditor,
  ConsoleAccordion,
  ResponseAlert,
} from "../Common";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import apiClient from "../../services/api-client";
import { BFF_BASE_URL } from "../Configs/Constants";

interface State {
  input: string;
  output: string;
  error: string;
  errorMessage: string;
  isError: boolean;
  darkMode: boolean;
  isSamplesOpen: boolean;
  isLoading: boolean;
}

export const Hl7v2ToFhir = () => {
  const [state, setState] = useState<State>({
    input: "",
    output: "",
    error: "",
    errorMessage: "",
    isError: false,
    darkMode: true,
    isSamplesOpen: false,
    isLoading: false,
  });

  const {
    input,
    output,
    error,
    errorMessage,
    isError,
    darkMode,
    isSamplesOpen,
    isLoading,
  } = state;

  const callBackend = () => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
      output: "",
      error: "",
      isError: false,
      errorMessage: "",
    }));

    apiClient(BFF_BASE_URL)
      .post("/v2tofhir/transform", input)
      .then((res) => {
        setState((prevState) => ({
          ...prevState,
          output: JSON.stringify(res.data, null, 2),
          isLoading: false,
        }));
      })
      .catch((error) => {
        setState((prevState) => ({
          ...prevState,
          output: JSON.stringify(error.response, null, 2),
          error: JSON.stringify(error.response, null, 2),
          errorMessage: error.message,
          isError: true,
          isLoading: false,
        }));
      });
  };

  const openSampleModal = () => {
    setState((prevState) => ({
      ...prevState,
      isSamplesOpen: true,
    }));
  };

  const closeSampleModal = () => {
    setState((prevState) => ({
      ...prevState,
      isSamplesOpen: false,
    }));
  };

  const closeResponse = () => {
    setState((prevState) => ({
      ...prevState,
      isError: false,
    }));
  };

  const handleInputClear = () => {
    setState((prevState) => ({
      ...prevState,
      input: "",
    }));
  };

  const handleOutputClear = () => {
    setState((prevState) => ({
      ...prevState,
      output: "",
    }));
  };

  const handleInputChange = useCallback((value: string) => {
    setState((prevState) => ({
      ...prevState,
      input: value,
    }));
  }, []);

  const handleOutputChange = useCallback((value: string) => {
    setState((prevState) => ({
      ...prevState,
      output: value,
    }));
  }, []);

  const toggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setState((prevState) => ({
      ...prevState,
      darkMode: checked,
    }));
  };

  return (
    <Container maxWidth={false}>
      {isError && (
        <ResponseAlert
          isOpen={isError}
          severity={"error"}
          message={errorMessage}
          setIsOpen={closeResponse}
        />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          endIcon={<ArticleOutlinedIcon />}
          sx={{ fontSize: 14, color:"background.default"}}
          onClick={openSampleModal}
        >
          Load Examples
        </Button>
        <SamplesModal isOpen={isSamplesOpen} onClose={closeSampleModal} />
        <ConvertButton handleSubmit={callBackend} isLoading={isLoading} />
        <ToggleDarkMode mode={darkMode} toggleMode={toggleDarkMode} />
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: 1,
        }}
      >
        <CodeEditor
          title="HL7 Resource: "
          value={input}
          onChange={handleInputChange}
          darkMode={darkMode}
          onClear={handleInputClear}
          placeholder="Paste or edit HL7 Data here..."
          fileType="xml"
          downloadEnabled
          width="50%"
          height="700px"
        />
        <Divider orientation="vertical" />
        <CodeEditor
          title="FHIR Resource: "
          value={output}
          onChange={handleOutputChange}
          darkMode={darkMode}
          onClear={handleOutputClear}
          placeholder="Paste or edit Json Data here..."
          fileType="json"
          downloadEnabled
          width="50%"
          height="700px"
        />
      </Box>
      <Box>
        <ConsoleAccordion error={error} darkMode />
      </Box>
    </Container>
  );
};
