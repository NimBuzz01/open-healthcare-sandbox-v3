import { Typography, Box } from "@mui/material";
import logoBlack from "../../assets/logoBlack.png";
import { PreLoader } from "./PreLoader";
import { useState } from "react";

export const ComingSoon = () => {
  const [active] = useState(true);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        gap: 15,
        alignItems: "center",
        height: 1,
      }}
    >
      <Box>
        <img src={logoBlack} alt="Healthcare Logo" style={{ width: "200px" }} />
      </Box>
      <Box sx={{ lineHeight: 0.5, textAlign: "center" }}>
        <PreLoader setActive={active} />
        <Typography
          variant="h4"
          color="primary.dark"
          fontWeight="500"
          sx={{ mt: 5 }}
        >
          Coming Soon
        </Typography>
        <Typography variant="h6" sx={{ color: "grey.500", mt: 1 }}>
          We are trying to make your experience even better.
        </Typography>
      </Box>
    </Box>
  );
};
