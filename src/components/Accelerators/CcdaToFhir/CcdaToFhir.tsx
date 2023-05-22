import React, { useCallback, useState } from "react";
import { Box, Button, Container, Divider } from "@mui/material";
import apiClient from "../../../services/api-client";
import {
  ConvertButton,
  SamplesModal,
  ToggleDarkMode,
  CodeEditor,
  ConsoleAccordion,
} from "../../Common";
import { BFF_BASE_URL } from "../../Configs/Constants";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

export const CcdaToFhir = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [isSamplesOpen, setIsSamplesOpen] = useState(false);

  const callBackend = () => {
    apiClient(BFF_BASE_URL)
      .post("/ccdatofhir/transform", input)
      .then((res) => {
        setOutput(JSON.stringify(res.data));
      })
      .catch((error) => {
        setOutput(JSON.stringify(error.response));
        setError(JSON.stringify(error.response));
      });
  };

  const openSampleModal = () => {
    setIsSamplesOpen(true);
  };

  const closeSampleModal = () => {
    setIsSamplesOpen(false);
  };

  const handleInputClear = () => {
    setInput("");
  };

  const handleOutputClear = () => {
    setOutput("");
  };

  const handleInputChange = useCallback((value: string) => {
    setInput(value);
  }, []);

  const handleOutputChange = useCallback((value: string) => {
    setOutput(value);
  }, []);

  const toggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="text"
          endIcon={<ArticleOutlinedIcon />}
          sx={{ fontSize: 14, color: "primary.dark" }}
          onClick={openSampleModal}
        >
          Load Examples
        </Button>
        <SamplesModal isOpen={isSamplesOpen} onClose={closeSampleModal} />
        <ConvertButton handleSubmit={callBackend} />
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
          onDownload={() => {}}
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
          onDownload={() => {}}
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
