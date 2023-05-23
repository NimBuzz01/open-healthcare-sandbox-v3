import {
  Box,
  Container,
  Divider,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { items } from "../Configs/AcceleratorConfig";
import { useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

interface SamplesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SamplesModal = ({ isOpen, onClose }: SamplesModalProps) => {
  const location = useLocation();
  const currentItem = items.find((item) => item.path === location.pathname);

  const sample = currentItem ? currentItem.samples : "";
  const label = currentItem ? currentItem.label : "";

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Container
        maxWidth="lg"
        sx={{ bgcolor: "background.default", height: 750, mt: 5 }}
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
        <Box>{sample}</Box>
      </Container>
    </Modal>
  );
};
