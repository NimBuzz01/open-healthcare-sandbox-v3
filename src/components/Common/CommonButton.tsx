import Button from "@mui/material/Button";

interface ButtonProps {
  variant: "background" | "border";
  label: string;
  onClick?: () => void;
}

export const CommonButton = ({ variant, label, onClick }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      sx={{
        fontSize: 14,
        borderRadius: 1,
        textTransform: "none",
        backgroundColor:
          variant === "background" ? "secondary.main" : "transparent",
        color: variant === "background" ? "white" : "secondary.main",
        border: 2,
        borderColor: "secondary.main",
        ":hover": {
          border: 2,
          bgcolor: variant === "background" ? "secondary.light" : "grey.100",
          borderColor:
            variant === "background" ? "secondary.light" : "secondary.light",
        },
      }}
    >
      {label}
    </Button>
  );
};
