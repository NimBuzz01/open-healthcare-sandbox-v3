import React from "react";
import { Box } from "@mui/material";
import { Header, MainContent, Footer } from "./components/Layout";

const App = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <MainContent />
      <Footer />
    </Box>
  );
};

export default App;
