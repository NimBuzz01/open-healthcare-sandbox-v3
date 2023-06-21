import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Box, Divider, Typography } from "@mui/material";
import {
  CommonButton,
  ResponseAlert,
  SamplesButton,
  SamplesModal,
  PreLoader,
  CodeEditor,
} from "../../Common";
import { SelectedSampleContext } from "../../Contexts/SelectedSampleContext";
import { ResourceMethodIcon } from "./ResourceMethodIcon";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [successAlert, setSuccessAlert] = useState<boolean>(false);

  const { loadSample, setLoadSample, selectedLabel, setSelectedLabel } =
    useContext(SelectedSampleContext);

  const [selectedAPIName] = useState(
    resource.resourcePath.slice(resource.resourcePath.indexOf("/") + 1)
  );

  useEffect(() => {
    if (selectedLabel === "FHIR APIs") {
      if (loadSample?.apiName === selectedAPIName) {
        setRequest(loadSample!.data);
        setLoadSample(null);
        setSelectedLabel("");
        setAlertOpen(true);
        setTimeout(() => {
          setAlertOpen(false);
        }, 2000);
      } else {
        alert("Incorrect API Data selected.");
        setLoadSample(null);
        setSelectedLabel("");
      }
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

  const openSampleModal = () => {
    setSampleOpen(true);
  };

  const closeSampleModal = () => {
    setSampleOpen(false);
  };

  const closeResponse = () => {
    setIsError(false);
  };

  const closeSuccessAlert = () => {
    setSuccessAlert(false);
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
        setSuccessAlert(true);
        setTimeout(() => {
          setSuccessAlert(false);
        }, 2000);
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
    <Box sx={{ border: 0.5, borderRadius: 1, borderColor: "grey.400", p: 2 }}>
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
          severity="success"
          message="Sample Loaded"
          setIsOpen={closeAlert}
        />
      )}
      {successAlert && (
        <ResponseAlert
          isOpen={successAlert}
          severity="success"
          message="Request Successful!"
          setIsOpen={closeSuccessAlert}
        />
      )}
      <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 1 }}>
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
      <Divider />
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 307px)",
          }}
        >
          <PreLoader setActive={isLoading} />
          <Typography variant="h5" sx={{ mt: 4, color: "primary.dark" }}>
            Loading ...
          </Typography>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "22%",
                flexGrow: 1,
                mt: 1,
                borderRight: 1,
                borderColor: "grey.400",
                mr: 2,
                pr: 2,
              }}
            >
              <Box sx={{ mt: 1 }}>
                <SamplesButton onClick={openSampleModal} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontStyle: "italic",
                  color: "grey.600",
                  mt: 2,
                }}
              >
                Note: Created resources will be available for 2 hours
              </Typography>
            </Box>
            <Box sx={{ width: "77%" }}>
              <CodeEditor
                title="Input"
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
                height={data ? "500px" : "calc(100vh - 346px)"}
              />
            </Box>
          </Box>
          <SamplesModal
            isOpen={sampleOpen}
            onClose={closeSampleModal}
            selectedAPI={selectedAPIName}
          />
          {data && (
            <>
              <Divider sx={{ mt: 1 }} />
              <CodeEditor
                title="Output"
                value={JSON.stringify(data, null, 2)}
                readOnly
                darkMode
                placeholder="Output will be displayed here..."
                fileType="json"
                downloadEnabled
                width="100%"
                height="500px"
              />
            </>
          )}
        </>
      )}
    </Box>
  );
};
