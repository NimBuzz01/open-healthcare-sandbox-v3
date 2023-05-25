import { Box } from "@mui/material";
import { Header, MainContent } from "./components/Layout";

const App = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <MainContent />
    </Box>
  );
};

export default App;
