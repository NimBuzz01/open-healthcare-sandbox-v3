import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import { CodeEditor } from "./CodeEditor";
import { SelectedSampleContext } from "../Contexts/SelectedSampleContext";
import { CommonButton } from "./CommonButton";
import { Sample } from "../Configs/AcceleratorConfig";
import { items } from "../Configs/AcceleratorConfig";
import CloseIcon from "@mui/icons-material/Close";
import { SamplesButton } from "./SamplesButton";

interface SamplesModalProps {
  selectedAPI?: string;
}

export const SamplesModal = ({ selectedAPI }: SamplesModalProps) => {
  const { loadSample, setLoadSample } = useContext(SelectedSampleContext);
  const { selectedLabel, setSelectedLabel } = useContext(SelectedSampleContext);

  const [open, setOpen] = useState(false);

  const toggleOpen = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };

  const location = useLocation();
  const currentItem = items.find((item) => item.path === location.pathname);
  const data = currentItem ? currentItem.sampleData : "";
  const label = currentItem ? currentItem.label : "";

  const [selectedSample, setSelectedSample] = useState<Sample | null>(null);
  const [filteredData, setFilteredData] = useState<Sample[]>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      let filteredSamples: Sample[] = data;
      if (label === "FHIR APIs" && selectedAPI) {
        filteredSamples = data.filter(
          (sample: Sample) => sample.apiName === selectedAPI
        );
      }
      setFilteredData(filteredSamples);
      setSelectedSample(filteredSamples[0] || null);
    }
  }, [data, label, selectedAPI]);

  const handleSampleClick = (sample: Sample) => {
    setSelectedSample(sample);
  };

  const handleSampleLoad = () => {
    if (selectedSample) {
      setLoadSample(selectedSample);
      setSelectedLabel(label);
      setOpen(false);
    }
  };

  return (
    <>
      <SamplesButton onClick={toggleOpen(true)} />
      <Modal open={open} onClose={toggleOpen(false)}>
        <Container
          maxWidth="xl"
          sx={{
            bgcolor: "background.default",
            height: "90vh",
            mt: 5,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 500, color: "primary.dark" }}
            >
              {label} Samples
            </Typography>
            <IconButton onClick={toggleOpen(false)} sx={{ color: "grey.500" }}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Box>
          <Divider />
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Box
              sx={{
                width: "20%",
                px: 1,
                borderRight: 1,
                borderColor: "grey.400",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <List component="nav" sx={{ mb: "auto" }}>
                {filteredData.map((sample: Sample) => (
                  <ListItem
                    key={sample.name}
                    sx={{ p: 0, borderBottom: 1, borderColor: "grey.300" }}
                  >
                    <ListItemButton
                      selected={selectedSample === sample}
                      onClick={() => handleSampleClick(sample)}
                    >
                      <ListItemText primary={sample.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <CommonButton
                  variant="background"
                  label="Load Sample"
                  onClick={handleSampleLoad}
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                mb: 2,
                justifyContent: "center",
              }}
            >
              {selectedSample && (
                <CodeEditor
                  title={selectedSample.name}
                  value={selectedSample.data}
                  readOnly
                  darkMode
                  placeholder="FHIR Resource will be displayed here..."
                  downloadEnabled
                  width="98%"
                  height="calc(90vh - 110px)"
                />
              )}
            </Box>
          </Box>
        </Container>
      </Modal>
    </>
  );
};
