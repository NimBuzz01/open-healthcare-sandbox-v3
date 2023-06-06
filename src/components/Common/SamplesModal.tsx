import { useState } from "react";
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
import { items } from "../Configs/AcceleratorConfig";
import CloseIcon from "@mui/icons-material/Close";

interface Sample {
  name: string;
  data: string;
}

interface SamplesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SamplesModal = ({ isOpen, onClose }: SamplesModalProps) => {
  const location = useLocation();
  const currentItem = items.find((item) => item.path === location.pathname);
  const data = currentItem ? currentItem.sampleData : "";
  const label = currentItem ? currentItem.label : "";

  const [selectedSample, setSelectedSample] = useState<Sample | null>(
    data && data.length > 0 ? data[0] : null
  );

  const handleSampleClick = (sample: Sample) => {
    setSelectedSample(sample);
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Container
        maxWidth="lg"
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
          <Typography variant="h4" component="h2">
            {label} Samples
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "grey.500" }}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ flexGrow: 1, my: 1, display: "flex" }}>
          <Box sx={{ width: "25%", borderRight: 1, borderColor: "grey.400" }}>
            <List component="nav">
              {data &&
                data.map((sample: Sample) => (
                  <ListItem
                    key={sample.name}
                    sx={{ p: 0, borderBottom: 0.5, borderColor: "grey.400" }}
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
          </Box>
          <Box sx={{ width: "75%", display: "flex", justifyContent: "center" }}>
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
  );
};
