import { useCallback, useContext, useEffect, useState } from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import {
  ConvertButton,
  SamplesModal,
  CodeEditor,
  ResponseAlert,
} from "../Common";
import { DarkModeContext } from "../Contexts/DarkModeContext";
import { SelectedSampleContext } from "../Contexts/SelectedSampleContext";
import apiClient from "../../services/api-client";
import { BFF_BASE_URL } from "../Configs/Constants";

interface State {
  input: string;
  output: string;
  errorMessage: string;
  isError: boolean;
  isLoading: boolean;
  alertOpen: boolean;
}

export const Hl7v2ToFhir = () => {
  const [state, setState] = useState<State>({
    input: "",
    output: "",
    errorMessage: "",
    isError: false,
    isLoading: false,
    alertOpen: false,
  });

  const { input, output, errorMessage, isError, isLoading, alertOpen } = state;

  const { loadSample, setLoadSample, selectedLabel, setSelectedLabel } =
    useContext(SelectedSampleContext);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (selectedLabel == "HL7V2 To FHIR") {
      setState((prevState) => ({
        ...prevState,
        input: loadSample!.data,
        alertOpen: true,
      }));
      setLoadSample(null);
      setSelectedLabel("");
      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          alertOpen: false,
        }));
      }, 2000);
    }
  }, [loadSample, selectedLabel]);

  const closeAlert = () => {
    setState((prevState) => ({
      ...prevState,
      alertOpen: false,
    }));
  };

  const closeResponse = () => {
    setState((prevState) => ({
      ...prevState,
      isError: false,
    }));
  };

  const handleInputChange = useCallback((value: string) => {
    setState((prevState) => ({
      ...prevState,
      input: value,
    }));
  }, []);

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

  const readFile = (fileInput?: string | ArrayBuffer | null) => {
    if (typeof fileInput == "string") {
      setState((prevState) => ({
        ...prevState,
        input: fileInput,
      }));
    }
  };

  const callBackend = () => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
      output: "",
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
          errorMessage: error.message,
          isError: true,
          isLoading: false,
        }));
        setTimeout(() => {
          setState((prevState) => ({
            ...prevState,
            isError: false,
          }));
        }, 2000);
      });
  };

  return (
    <Container
      maxWidth={false}
      sx={{ display: "flex", flexDirection: "column", height: 1 }}
    >
      {isError && (
        <ResponseAlert
          isOpen={isError}
          severity="error"
          message={errorMessage}
          setIsOpen={closeResponse}
        />
      )}
      {alertOpen && (
        <ResponseAlert
          isOpen={alertOpen}
          severity="success"
          message="Sample Loaded"
          setIsOpen={closeAlert}
        />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SamplesModal />
        <ConvertButton handleSubmit={callBackend} isLoading={isLoading} />
        <Box sx={{ visibility: "hidden" }}>
          <Typography>PLACEHOLDER ABCXY</Typography>
        </Box>
      </Box>
      <Divider sx={{ mt: 1 }} />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            pr: 1,
            pb: 1,
            width: "50%",
          }}
        >
          <CodeEditor
            title="HL7 Resource"
            value={input}
            onChange={handleInputChange}
            darkMode={darkMode}
            onClear={handleInputClear}
            placeholder="Paste or edit HL7 Data here..."
            fileType="jsx"
            uploadEnabled
            readFile={readFile}
            clearEnabled
            width="100%"
            height="calc(100vh - 197px)"
          />
        </Box>
        <Box
          sx={{
            pl: 1,
            pb: 1,
            width: "50%",
          }}
        >
          <CodeEditor
            title="FHIR Resource"
            value={output}
            readOnly
            darkMode={darkMode}
            onClear={handleOutputClear}
            placeholder="FHIR Resource will be displayed here..."
            fileType="json"
            downloadEnabled
            clearEnabled
            width="100%"
            height="calc(100vh - 197px)"
          />
        </Box>
      </Box>
    </Container>
  );
};
