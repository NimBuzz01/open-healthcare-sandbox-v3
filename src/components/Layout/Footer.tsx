import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { FeedbackForm } from "../FeedbackForm";
import CopyrightIcon from "@mui/icons-material/Copyright";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Dialog open={isOpen}>
        <DialogTitle>We value your feedback!</DialogTitle>
        <DialogContent>
          <FeedbackForm
            onSubmit={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>Close</Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{
          display: "flex",
          color: "secondary.dark",
          px: 2,
          py: 1,
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          zIndex: 3,
          bgcolor: "background.paper",
        }}
      >
        <CopyrightIcon sx={{ color: "primary.light", mr: 0.5 }} />
        <Typography
          variant="h6"
          sx={{ marginRight: "auto", color: "primary.light" }}
        >
          2023 WSO2 LLC.
        </Typography>
        <Typography
          variant="h6"
          sx={{ display: "flex", gap: 0.5, fontWeight: 400, mr: 0.5 }}
        >
          Like our work?
        </Typography>
        <Typography
          onClick={handleClick}
          sx={{
            color: "secondary.main",
            cursor: "pointer",
            transition: "0.3s",
            ":hover": {
              color: "secondary.dark",
            },
          }}
        >
          Leave a feedback
        </Typography>
      </Box>
    </>
  );
};
