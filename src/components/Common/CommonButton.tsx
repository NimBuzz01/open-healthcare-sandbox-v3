import * as React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  variant: "background" | "border";
  label: string;
  onClick: () => void;
}

const CommonButton = ({ variant, label, onClick }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      sx={{
        fontSize: 16,
        borderRadius: 1,
        backgroundColor:
          variant === "background" ? "success.main" : "transparent",
        color: variant === "background" ? "white" : "success.main",
        border: 2,
        borderColor: "success.main",
        ":hover": {
          border: 2,
          bgcolor:
            variant === "background" ? "success.main" : "background.paper",
          borderColor: "success.main",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default CommonButton;
