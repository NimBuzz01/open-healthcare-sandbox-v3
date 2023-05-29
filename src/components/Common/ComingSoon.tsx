import { Typography, Box } from "@mui/material";
import logoBlack from "../../assets/logoBlack.png";

export const ComingSoon = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap:60,
        alignItems: "center",
        height:1
      }}
    >
      <Box>
        <img
          src={logoBlack}
          alt="Healthcare Logo"
          style={{ width: "200px" }}
        />
      </Box>
      <Box sx={{ lineHeight: 0.5, textAlign: "center" }}>
        <Typography variant="h4" color="primary.dark" fontWeight="500">
          Coming Soon
        </Typography>
        <Typography variant="h6" sx={{ color: "grey.500", mt:1 }}>
          We are trying to make your experience even better.
        </Typography>
      </Box>
    </Box>
  );
};
