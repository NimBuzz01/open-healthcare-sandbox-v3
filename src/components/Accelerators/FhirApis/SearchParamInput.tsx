import { Box, InputLabel, MenuItem, Select, TextField } from "@mui/material";

interface Props {
  count: number;
}

const SearchParamInput = ({ count }: Props) => {

  const renderSearchBoxes = () => {
    const elements: any[] = [];

    for (var i = 1; i <= 2; i++) {
      elements.push(
        <Box sx={{ display: "flex", gap: 2 }}>
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
              {/* {searchParams.map((p) => {
      <MenuItem value={p}>{p}</MenuItem>;
    })} */}
            </Select>
          </Box>
          <Box sx={{ minWidth: 250 }}>
            <TextField fullWidth variant="outlined" label="Id" />
          </Box>
        </Box>
      );
    }

    return elements;
  };

  return <>{renderSearchBoxes}</>;
};

export default SearchParamInput;
