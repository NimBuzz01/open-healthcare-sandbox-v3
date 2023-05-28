import { useState } from "react";
import {
  Box,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { TextAreaOutput, CommonButton, ResponseAlert } from "../../Common";
import { searchParams } from "../../Configs/ApiConfig";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import axios from "axios";

interface Props {
  isSearchOperation?: boolean;
  backendUrl: string;
}

export const GetResourceContent = ({
  isSearchOperation = false,
  backendUrl,
}: Props) => {
  const [searchBoxCount, setSearchBoxCount] = useState(1);
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  const callBackend = () => {
    let url: string = "";
    if (isSearchOperation) {
      url = backendUrl;
    } else {
      url = backendUrl.concat(id);
    }

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
      });
  };

  const renderSearchBoxes = () => {
    const elements: any[] = [];

    for (var i = 1; i <= searchBoxCount; i++) {
      elements.push(
        <Box sx={{ display: "flex", gap: 2 }} key={i}>
          <Box sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-label" />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              displayEmpty
              sx={{ minWidth: 200 }}
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
            <TextField fullWidth variant="outlined" />
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
                  setId(event.target.value)}
                }
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
