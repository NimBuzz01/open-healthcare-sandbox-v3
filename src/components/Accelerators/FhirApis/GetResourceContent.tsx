import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Container,
  Divider,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import axios from "axios";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { CommonButton, ResponseAlert, CodeEditor } from "../../Common";
import { SearchParam } from "../../Configs/ApiConfig";
import { InputField, Props as InputFieldProps } from "./InputField";
import { ResourceMethodIcon } from "./ResourceMethodIcon";
import InfoOutlineIcon from "@mui/icons-material/InfoOutlined";

interface Props {
  isSearchOperation?: boolean;
  backendUrl: string;
  searchParams: SearchParam[];
  resource: any;
}

export const GetResourceContent = ({
  isSearchOperation = false,
  backendUrl,
  searchParams,
  resource,
}: Props) => {
  const [data, setData] = useState<any>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [inputFields, setInputFields] = useState<InputFieldProps[]>([]);
  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const [isAdded, setIsAdded] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);

  useEffect(() => {
    if (!isSearchOperation && searchParams.length > 0) {
      const firstParam = searchParams[0];
      const initialInputField: InputFieldProps = {
        label: firstParam.paramName,
        pValue: firstParam.paramValue,
        isRequired: true,
        example: firstParam.paramExample,
        dataType: firstParam.paramType,
        onChange: handleChange,
        onDelete: handleDeleteInputField,
        fieldIndex: 0,
      };
      setInputFields([initialInputField]);
    }
  }, [isSearchOperation, searchParams]);

  const handleAddInputField = () => {
    const selectedLabelObject = searchParams.find(
      (param) => param.paramName === selectedLabel
    );

    if (
      selectedLabelObject &&
      !inputFields.some((field) => field.label === selectedLabel)
    ) {
      const newInputField: InputFieldProps = {
        label: selectedLabelObject.paramName,
        pValue: selectedLabelObject.paramValue,
        isRequired: selectedLabelObject.isRequired,
        example: selectedLabelObject.paramExample,
        dataType: selectedLabelObject.paramType,
        isDeleteRequired: true,
        onChange: handleChange,
        onDelete: handleDeleteInputField,
        fieldIndex: 0,
      };

      setInputFields((prevInputFields) => [...prevInputFields, newInputField]);
    } else {
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }
  };

  const handleChange = (fieldIndex: number, field: string, value: any) => {
    setInputFields((prevInputFields) => {
      const updatedInputFields = [...prevInputFields];
      updatedInputFields[fieldIndex][field] = value;
      return updatedInputFields;
    });
  };

  const handleDeleteInputField = (fieldIndex: number) => {
    setInputFields((prevInputFields) => {
      const updatedInputFields = [...prevInputFields];
      updatedInputFields.splice(fieldIndex, 1);
      return updatedInputFields;
    });
  };

  const handleLabelChange = (event: SelectChangeEvent<string>) => {
    setSelectedLabel(event.target.value);
  };

  const callBackend = () => {
    if (inputFields.some((field) => !field.value)) {
      setIsInputEmpty(true);
      return;
    }

    // Reset the isInputEmpty state if all input fields are filled
    setIsInputEmpty(false);

    let url: string = "";
    let searchString: string = "";

    if (isSearchOperation) {
      searchString = Object.keys(inputFields).reduce((searchString, index) => {
        let str = index as keyof typeof inputFields;
        let result = inputFields[str];

        if (isInputFieldProps(result)) {
          return searchString + `${result.pValue}=${result.value}&`;
        }

        return searchString;
      }, "?");

      searchString = searchString.substring(0, searchString.length - 1);

      url = backendUrl.concat(searchString);
    } else {
      url = `${backendUrl}/${inputFields[0].value}`;
    }

    console.log(url);
    setData(null);
    setError("");

    axios
      .get(url)
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

  function isInputFieldProps(obj: any): obj is InputFieldProps {
    return obj && obj.hasOwnProperty("pValue") && obj.hasOwnProperty("value");
  }

  const handleReset = () => {
    setData(null);
    setIsError(false);
    setError("");
    setInputFields([]);
    setSelectedLabel("");
  };

  const closeResponse = () => {
    setIsError(false);
  };

  return (
    <Container maxWidth={false} sx={{ mt: 2 }}>
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
      <Divider />
      <Box>
        <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
          <Typography sx={{ color: "primary.dark", my: 2 }}>
            Add optional search parameter(s)
          </Typography>
          {isSearchOperation && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Select
                value={selectedLabel}
                onChange={handleLabelChange}
                size="small"
                sx={{ width: 250 }}
              >
                {searchParams.map((searchParams) => (
                  <MenuItem
                    key={searchParams.paramName}
                    value={searchParams.paramName}
                  >
                    {searchParams.paramName} - {searchParams.paramDescription}
                  </MenuItem>
                ))}
              </Select>
              <IconButton
                onClick={handleAddInputField}
                disabled={!selectedLabel}
              >
                <AddCircleOutlineOutlinedIcon
                  sx={{ fontSize: 26, color: "secondary.main" }}
                />
              </IconButton>
              {isAdded && (
                <Alert
                  severity="warning"
                  icon={<InfoOutlineIcon sx={{ fontSize: 18 }} />}
                  sx={{ fontSize: 12, py: 0.3 }}
                >
                  Already added!
                </Alert>
              )}
            </Box>
          )}
        </Box>
        <Box sx={{ my: 1 }}>
          {isInputEmpty && (
            <Alert severity="error" sx={{ fontSize: 13 }}>
              Please fill all input fields.
            </Alert>
          )}
        </Box>
        {inputFields.map((inputField, index) => (
          <InputField key={index} {...inputField} fieldIndex={index} />
        ))}
      </Box>
      <Box sx={{ mt: 2, mb: 2 }}>
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
