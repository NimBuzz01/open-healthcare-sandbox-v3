import { Typography, Box } from "@mui/material";
import choreologo from "./../assets/choreo-logo-black.svg";

export const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 350,
        gap: 0.2,
        margin: 1,
      }}
    >
      <Typography color="secondary.dark" variant="h3" sx={{ fontWeight: 600 }}>
        Open Healthcare Sandbox
      </Typography>
      <Box sx={{ alignSelf: "flex-end" }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography
            color="secondary.main"
            variant="h5"
            sx={{ fontWeight: 600 }}
          >
            Powered by
          </Typography>
          <Box
            component="img"
            sx={{ width: 80 }}
            alt="Choreo Logo"
            src={choreologo}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Logo;
