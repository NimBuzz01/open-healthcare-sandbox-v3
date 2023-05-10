import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

interface AlertModalProps {
  contentText: string;
}

const AlertModal = ({ contentText }: AlertModalProps) => {
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
          <CloseIcon
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          />
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", alignItems: "center", gap: 2, pb: 4 }}
        >
          <InfoIcon color="info" sx={{ width: 26, height: 26 }} />
          <DialogContentText id="alert-dialog-description">
            {contentText}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AlertModal;
