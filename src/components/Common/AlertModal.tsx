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
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ position: "absolute", top: -500 }}
      >
        <DialogTitle>
          <IconButton
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
        >
          <InfoIcon sx={{ width: 26, height: 26, color: "primary.main" }} />
          <DialogContentText id="alert-dialog-description">
            {contentText}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
