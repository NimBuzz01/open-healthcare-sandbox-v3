import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body/Body";

const App = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Body />
      <Footer />
    </Box>
  );
};

export default App;
