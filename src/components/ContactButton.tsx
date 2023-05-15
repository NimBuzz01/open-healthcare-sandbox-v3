import { Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { WSO2_CONTACT_URL } from "../Config";

export const ContactButton = () => {
  return (
    <Button
      variant="outlined"
      aria-label="contact-button"
      startIcon={<MailIcon />}
      sx={{
        visibility: "hidden",
        fontSize: 16,
        mx: 2,
        my: 1.2,
        border: 2,
        borderRadius: 1,
        color: "success.main",
        transition: "0.2s",
        ":hover": {
          border: 2,
          bgcolor: "success.main",
          color: "background.paper",
          borderColor: "success.main",
        },
      }}
      component="a"
      href={WSO2_CONTACT_URL}
      target="_blank"
    >
      Contact Us
    </Button>
  );
};
