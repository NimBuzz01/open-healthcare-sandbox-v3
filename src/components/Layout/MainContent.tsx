import { Box } from "@mui/material";
import { Scrollbars } from "react-custom-scrollbars";
import Routes from "../../contexts/AppRoutes";
import { SideNavigation } from "../Layout";
import { items } from "../../Config";

export const MainContent = () => {
  return (
    <Scrollbars>
      <Box sx={{ flexGrow: 1, display: "flex", overflowY: "auto" }}>
        <SideNavigation items={items} />
        <Box width={1} mt={5} mb={8} mx={4}>
          <Routes items={items} />
        </Box>
      </Box>
    </Scrollbars>
  );
};
