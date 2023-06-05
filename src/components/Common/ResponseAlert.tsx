import { useState } from "react";
import Alert, { AlertColor } from "@mui/material/Alert";
import { Snackbar, SnackbarOrigin } from "@mui/material";

interface Props {
  isOpen: boolean;
  severity: AlertColor;
  message: string;
  setIsOpen: any;
}

export interface State extends SnackbarOrigin {
  open: boolean;
}

export const ResponseAlert = ({
  isOpen,
  severity,
  message,
  setIsOpen,
}: Props) => {
  const [state] = useState<State>({
    open: isOpen,
    vertical: "bottom",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = state;

  return (
    <Snackbar
      open={open}
      onClose={setIsOpen}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert
        onClose={setIsOpen}
        severity={severity}
        sx={{ width: "100%", fontSize: 14 }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
