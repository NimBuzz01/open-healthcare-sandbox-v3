import React from "react";
import Box from "@mui/material/Box";
import Alert, { AlertColor } from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";

interface Props {
  isOpen: boolean;
  severity: AlertColor;
  message: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ResponseAlert = ({
  isOpen,
  severity,
  message,
  setIsOpen,
}: Props) => {
  return (
    <Collapse
      in={isOpen}
      sx={{
        position: "fixed",
        bottom: 60,
        right: 30,
        zIndex: 10,
        transition: "0.3s ease",
      }}
    >
      <Box display="flex" justifyContent="flex-end">
        <Alert
          severity={severity}
          sx={{ fontSize: 15, width: 500, mt: 2 }}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          {message}
        </Alert>
      </Box>
    </Collapse>
  );
};
