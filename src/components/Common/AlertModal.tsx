import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

interface AlertModalProps {
  contentText: string;
}

export const AlertModal = ({ contentText }: AlertModalProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClose = () => setOpen(false);

  return (
    <Dialog
      id="alert-dialog"
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-container": {
          alignItems: "flex-start",
        },
      }}
    >
      <DialogTitle>
        <IconButton
          id="close-dialog-button"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 2,
            top: 2,
            color: "grey.500",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{ display: "flex", alignItems: "center", gap: 2, pb: 4 }}
        id="alert-dialog-content"
      >
        <InfoIcon
          sx={{ width: 26, height: 26, color: "primary.main" }}
          id="info-icon"
        />
        <DialogContentText id="alert-dialog-description">
          {contentText}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
