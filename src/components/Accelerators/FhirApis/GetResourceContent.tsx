import { useState } from "react";
import {
  Box,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { TextAreaOutput, CommonButton, ResponseAlert } from "../../Common";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import axios from "axios";
import { SearchParam } from "../../Configs/ApiConfig";

interface Props {
  isSearchOperation?: boolean;
  backendUrl: string;
  searchParams: SearchParam[];
}

interface ParamMap {
  [key: string]: { [key: string]: string };
}

export const GetResourceContent = ({
  isSearchOperation = false,
  backendUrl,
  searchParams,
}: Props) => {
  const [searchBoxCount, setSearchBoxCount] = useState(1);
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [searchParamPair, setSearchParamPair] = useState({});

  const callBackend = () => {
    let url: string = "";
    if (isSearchOperation) {
      console.log(searchParamPair);

      let resultArray = Object.keys(searchParamPair).map(function (
        personNamedIndex
      ) {
        let str = personNamedIndex as keyof typeof searchParamPair;
        let person = searchParamPair[str];
        // do something with person
        return person;
      });

      console.log(resultArray);

      let searchString: string = "?";

      resultArray.forEach((p) => {
        searchString = searchString
          .concat(p["param"])
          .concat("=")
          .concat(p["value"])
          .concat("&");
      });

      searchString = searchString.substring(0, searchString.length - 1);

      url = backendUrl.concat(searchString);

      console.log(searchString);
    } else {
      url = backendUrl.concat("/").concat(id);
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
        setData(err.response.data);
      });
  };

  const handleSearchParamsKeys = (key: SelectChangeEvent<unknown>) => {
    console.log(searchParamPair);
    const id: string = String(key.target.name);
    const paramName = String(key.target.value);

    setSearchParamPair({ ...searchParamPair, [id]: { param: paramName } });
  };

  const handleSearchParamsValues = (
    key: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(searchParamPair);
    const id: string = String(key.target.name);
    const paramName = String(key.target.value);

    const obj: ParamMap = { ...searchParamPair };

    let str = id as keyof typeof obj;

    const obj2 = obj[str];

    obj2["value"] = paramName;

    const final = { ...obj, [str]: obj2 };

    setSearchParamPair(final);
  };

  const renderSearchBoxes = () => {
    const elements: any[] = [];

    for (var i = 1; i <= searchBoxCount; i++) {
      let id = "select-".concat(String(i));
      elements.push(
        <Box sx={{ display: "flex", gap: 2 }} key={i}>
          <Box sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-label" />
            <Select
              labelId="demo-simple-select-label"
              id={id}
              name={id}
              // value={age}
              label="Age"
              displayEmpty
              sx={{ minWidth: 200 }}
              onChange={(event) => {
                handleSearchParamsKeys(event);
              }}
            >
              <MenuItem disabled value="">
                <em>Search Param</em>
              </MenuItem>
              {searchParams.map((p) => (
                <MenuItem key={p.param} value={p.param}>
                  {p.display}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box sx={{ minWidth: 250 }}>
            <TextField
              name={id}
              fullWidth
              variant="outlined"
              onChange={(event) => {
                handleSearchParamsValues(event);
              }}
            />
          </Box>
        </Box>
      );
    }

    return elements;
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
      <Box sx={{ display: "flex", gap: 5 }}>
        {isSearchOperation && (
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            {/* Box to wrap the list of dropdown list and text of pairs */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {/* Box to wrap a one dropdown list and text of pairs */}
              {renderSearchBoxes()}
            </Box>
          </Box>
        )}
        {!isSearchOperation && (
          <Box sx={{ display: "flex", gap: 70 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                onChange={(event) => {
                  setId(event.target.value);
                }}
                variant="outlined"
                label="Id"
                fullWidth
              />
            </Box>
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
            mb: 2,
            height: "25%",
          }}
        >
          {isSearchOperation && (
            <Box sx={{ display: "flex" }}>
              <Button
                disabled={searchBoxCount === 7}
                onClick={() => {
                  setSearchBoxCount(searchBoxCount + 1);
                }}
              >
                <AddCircleIcon sx={{ fontSize: 30 }} />
              </Button>
              <Button
                disabled={searchBoxCount === 1}
                onClick={() => {
                  setSearchBoxCount(
                    searchBoxCount === 1 ? searchBoxCount : searchBoxCount - 1
                  );
                }}
              >
                <RemoveCircleIcon sx={{ fontSize: 30 }} />
              </Button>
            </Box>
          )}

          <Box sx={{ gap: 2, display: "flex" }}>
            <CommonButton
              variant="background"
              label="Execute"
              onClick={callBackend}
            />
            <CommonButton
              variant="border"
              label="Clear"
              onClick={() => {
                setSearchBoxCount(1);
                setData(null);
                setError("");
                setId("");
                setSearchParamPair({});
              }}
            />
          </Box>
        </Box>
      </Box>
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
