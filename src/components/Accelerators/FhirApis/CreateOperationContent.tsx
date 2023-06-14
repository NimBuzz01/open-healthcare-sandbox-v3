import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Box, Divider, Typography } from "@mui/material";
import {
  CommonButton,
  ResponseAlert,
  CodeEditor,
  SamplesButton,
  SamplesModal,
} from "../../Common";
import { SelectedSampleContext } from "../../Contexts/SelectedSampleContext";
import { ResourceMethodIcon } from "./ResourceMethodIcon";
import { Preloader } from "../../Common/Preloader";

interface Props {
  backendUrl: string;
  resource: any;
}

export const CreateOperationContent = ({ backendUrl, resource }: Props) => {
  const [request, setRequest] = useState<string>("");
  const [data, setData] = useState<any>("");
  const [error, setError] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [sampleOpen, setSampleOpen] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const { loadSample } = useContext(SelectedSampleContext);
  const { selectedLabel } = useContext(SelectedSampleContext);

  useEffect(() => {
    if (selectedLabel == "FHIR APIs") {
      setRequest(loadSample!.data);
      setAlertOpen(true);
      setTimeout(() => {
        setAlertOpen(false);
      }, 2000);
    }
  }, [loadSample, selectedLabel]);

  const closeAlert = () => {
    setAlertOpen(false);
  };

  const handleOnChange = useCallback((value: string) => {
    setRequest(value);
  }, []);

  const handleInputClear = () => {
    setRequest("");
  };

  const readFile = (fileInput?: string | ArrayBuffer | null) => {
    if (typeof fileInput === "string") {
      setRequest(fileInput);
    }
  };

  const closeResponse = () => {
    setIsError(false);
  };

  const openSampleModal = () => {
    setSampleOpen(true);
  };

  const closeSampleModal = () => {
    setSampleOpen(false);
  };

  const callBackend = () => {
    setIsLoading(true);
    setData("");
    setError("");

    axios
      .post(backendUrl, request)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setIsError(true);
        setData(err.response);
        setIsLoading(false);
      });
  };

  const handleReset = () => {
    setData("");
    setError("");
    setIsError(false);
    setRequest("");
  };

  return (
    <>
      {isError && (
        <ResponseAlert
          isOpen={isError}
          severity="error"
          message={error}
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
      <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 2 }}>
        <ResourceMethodIcon resourceMethod={resource.resourceMethod} />
        <Typography sx={{ color: "common.dark", fontSize: 14 }}>
          {resource.resourcePath}
        </Typography>
        <Typography
          sx={{ color: "grey.500", fontSize: 14, fontWeight: 500, mr: "auto" }}
        >
          {resource.resourceDescription}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CommonButton
            variant="background"
            label="Execute"
            onClick={callBackend}
          />
          <CommonButton variant="border" label="Reset" onClick={handleReset} />
        </Box>
      </Box>
      <Divider sx={{ mb: 1 }} />
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 25,
          }}
        >
          <Preloader setActive={isLoading} />
          <Typography variant="h5" sx={{ mt: 4, color: "primary.dark" }}>
            Loading ...
          </Typography>
        </Box>
      ) : (
        <>
          <SamplesButton onClick={openSampleModal} />
          <SamplesModal isOpen={sampleOpen} onClose={closeSampleModal} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
            <CodeEditor
              title="Input: "
              value={request}
              onChange={handleOnChange}
              darkMode
              onClear={handleInputClear}
              placeholder="Paste data here..."
              fileType="json"
              uploadEnabled
              readFile={readFile}
              clearEnabled
              width="100%"
              height={data ? "500px" : "calc(100vh - 380px)"}
            />
            {data && (
              <CodeEditor
                title="Output:"
                value={JSON.stringify(data, null, 2)}
                readOnly
                darkMode
                placeholder="Output will be displayed here..."
                fileType="json"
                downloadEnabled
                width="100%"
                height="500px"
              />
            )}
          </Box>
        </>
      )}
    </>
  );
};
