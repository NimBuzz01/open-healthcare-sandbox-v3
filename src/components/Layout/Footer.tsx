import { Box, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

export const Footer = () => {
  return (
    <Box
      sx={{ display: "flex", borderTop: 0.5, borderColor: "grey.400" }}
      id="footer-container"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ml: "auto",
          px: 1,
          py: 0.6,
          mr: 2,
        }}
      >
        <CopyrightIcon
          sx={{
            color: "grey.400",
            mr: 0.5,
            fontSize: 19,
          }}
          aria-hidden="true"
        />
        <Typography
          variant="h6"
          sx={{ color: "grey.500", fontWeight: 300 }}
          id="footer-text"
        >
          2023 WSO2 LLC.
        </Typography>
      </Box>
    </Box>
  );
};
