import { useCallback, useContext, useEffect, useState } from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import {
  ConvertButton,
  SamplesModal,
  CodeEditor,
  ResponseAlert,
  SamplesButton,
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
  isSamplesOpen: boolean;
  isLoading: boolean;
}

export const CcdaToFhir = () => {
  const [state, setState] = useState<State>({
    input: "",
    output: "",
    errorMessage: "",
    isError: false,
    isSamplesOpen: false,
    isLoading: false,
  });

  const { input, output, errorMessage, isError, isSamplesOpen, isLoading } =
    state;

  const { loadSample, setLoadSample } = useContext(SelectedSampleContext);
  const { selectedLabel, setSelectedLabel } = useContext(SelectedSampleContext);

  const { darkMode } = useContext(DarkModeContext);

  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    if (selectedLabel == "C-CDA To FHIR") {
      setState((prevState) => ({
        ...prevState,
        input: loadSample!.data,
      }));
      setLoadSample(null);
      setSelectedLabel("");
      setAlertOpen(true);
      setTimeout(() => {
        setAlertOpen(false);
      }, 2000);
    }
  }, [loadSample, selectedLabel]);

  const closeAlert = () => {
    setAlertOpen(false);
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
      .post("/ccdatofhir/transform", input)
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

  const readFile = (fileInput?: string | ArrayBuffer | null) => {
    if (typeof fileInput == "string") {
      setState((prevState) => ({
        ...prevState,
        input: fileInput,
      }));
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{ display: "flex", flexDirection: "column", height: 1 }}
    >
      {isError && (
        <ResponseAlert
          isOpen={isError}
          severity={"error"}
          message={errorMessage}
          setIsOpen={closeResponse}
        />
      )}
      {alertOpen && (
        <ResponseAlert
          isOpen={alertOpen}
          severity={"success"}
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
        <SamplesButton onClick={openSampleModal} />
        <SamplesModal isOpen={isSamplesOpen} onClose={closeSampleModal} />
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
            title="C-CDA Resource"
            value={input}
            onChange={handleInputChange}
            darkMode={darkMode}
            onClear={handleInputClear}
            placeholder="Paste or edit C-CDA Data here..."
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
