import { useCallback, useState } from "react";
import axios from "axios";
import { Box, Container, Typography } from "@mui/material";
import { CommonButton, ResponseAlert, CodeEditor } from "../../Common";
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
        setIsError(true);
        setData(err.response);
      });
  };

  const handleReset = () => {
    setData("");
    setError("");
    setIsError(false);
    setRequest("");
  };

  return (
    <Container maxWidth={false} sx={{ py: 2, height: 1, overflowY: "auto" }}>
      {isError && (
        <ResponseAlert
          isOpen={isError}
          severity="error"
          message={error}
          setIsOpen={closeResponse}
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
          height={data ? "500px" : "calc(100vh - 350px)"}
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
    </Container>
  );
};
