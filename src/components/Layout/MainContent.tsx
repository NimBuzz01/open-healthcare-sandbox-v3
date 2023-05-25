import { Box } from "@mui/material";
import Scrollbars from "react-custom-scrollbars";
import Routes from "../../contexts/AppRoutes";
import { SideNavigation } from "../Layout";
import { items } from "../Configs/AcceleratorConfig";

export const MainContent = () => {
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <SideNavigation items={items} />
      <Scrollbars>
        <Box width={1} mt={1} mb={4} sx={{ overflowY: "auto" }}>
          <Routes items={items} />
        </Box>
      </Scrollbars>
    </Box>
  );
};
