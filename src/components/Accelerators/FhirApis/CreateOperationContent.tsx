import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Box, Divider, Typography } from "@mui/material";
import {
  CommonButton,
  ResponseAlert,
  SamplesModal,
  PreLoader,
  CodeEditor,
} from "../../Common";
import { ResourceMethodIcon, HeadersTab } from "../FhirApis";
import { DarkModeContext } from "../../Contexts/DarkModeContext";
import { SelectedSampleContext } from "../../Contexts/SelectedSampleContext";

interface Props {
  backendUrl: string;
  resource: any;
}

export const CreateOperationContent = ({ backendUrl, resource }: Props) => {
  const { loadSample, setLoadSample, selectedLabel, setSelectedLabel } =
    useContext(SelectedSampleContext);
  const { darkMode } = useContext(DarkModeContext);

  const [postRequest, setPostRequest] = useState<string>("");
  const [data, setData] = useState<any>("");
  const [error, setError] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [successAlert, setSuccessAlert] = useState<boolean>(false);
  const [selectedAPIName] = useState(
    resource.resourcePath.slice(resource.resourcePath.indexOf("/") + 1)
  );

  const [response, setResponse] = useState<any>({
    statusCode: null,
    statusText: "",
    resUrl: "",
    contentType: "",
  });
  const [request, setRequest] = useState<any>({
    reqUrl: "",
    contentType: "",
    method: "",
  });

  useEffect(() => {
    if (selectedLabel === "FHIR APIs") {
      setPostRequest(loadSample!.data);
      setLoadSample(null);
      setSelectedLabel("");
      setAlertOpen(true);
      setTimeout(() => {
        setAlertOpen(false);
      }, 2000);
    }
  }, [loadSample, selectedLabel]);

  const handleOnChange = useCallback((value: string) => {
    setPostRequest(value);
  }, []);

  const handleInputClear = () => {
    setPostRequest("");
  };

  const closeAlert = () => {
    setAlertOpen(false);
  };

  const closeResponse = () => {
    setIsError(false);
  };

  const readFile = (fileInput?: string | ArrayBuffer | null) => {
    if (typeof fileInput === "string") {
      setPostRequest(fileInput);
    }
  };

  const handleReset = () => {
    setData("");
    setError("");
    setIsError(false);
    setPostRequest("");
    setSuccessAlert(false);
    setResponse({});
    setRequest({});
  };

  const callBackend = () => {
    setIsLoading(true);
    setData("");
    setError("");

    setRequest({
      reqUrl: backendUrl,
      contentType: "application/fhir+json;charset=utf-8",
      method: "POST",
    });

    axios
      .post(backendUrl, postRequest)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        setSuccessAlert(true);
        setResponse({
          statusCode: res.status,
          statusText: res.statusText,
          resUrl: res.config.url,
          contentType: res.headers["content-type"],
        });
      })
      .catch((error) => {
        setError(error.message);
        setIsError(true);
        setData(error.response);
        setResponse({
          statusCode: error.response.status,
          statusText: error.response.statusText,
          resUrl: error.config.url,
          contentType: error.response.headers["content-type"],
        });
        setIsLoading(false);
        setTimeout(() => {
          setIsError(false);
        }, 2000);
      });
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
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "23%",
              flexGrow: 1,
              mt: 1,
              borderRight: 1,
              borderColor: "grey.400",
              mr: 2,
              pr: 2,
            }}
          >
            <Box sx={{ mt: 1 }}>
              <SamplesModal selectedAPI={selectedAPIName} />
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
            {successAlert && (
              <Typography
                variant="h6"
                color="secondary"
                sx={{ fontStyle: "italic", mt: "auto", mb: 2 }}
              >
                Resource created! Run the search operation to view the created
                resource
              </Typography>
            )}
          </Box>
          <Box sx={{ width: "76%" }}>
            {isLoading ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "calc(100vh - 306px)",
                }}
              >
                <PreLoader setActive={isLoading} />
                <Typography variant="h5" sx={{ mt: 4, color: "primary.dark" }}>
                  Loading ...
                </Typography>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    my: 0.5,
                  }}
                >
                  <HeadersTab request={request} response={response} />
                </Box>
                <Divider />
                <CodeEditor
                  title="Input"
                  value={postRequest}
                  onChange={handleOnChange}
                  darkMode={darkMode}
                  onClear={handleInputClear}
                  placeholder="Paste data here..."
                  fileType="json"
                  uploadEnabled
                  readFile={readFile}
                  clearEnabled
                  width="100%"
                  height="calc(100vh - 389px)"
                />
              </Box>
            )}
          </Box>
        </Box>
        {data && (
          <>
            <Divider sx={{ mt: 1 }} />
            <CodeEditor
              title="Output"
              value={JSON.stringify(data, null, 2)}
              readOnly
              darkMode={darkMode}
              placeholder="Output will be displayed here..."
              fileType="json"
              downloadEnabled
              width="100%"
              height="calc(100vh - 389px)"
            />
          </>
        )}
      </>
    </Box>
  );
};
