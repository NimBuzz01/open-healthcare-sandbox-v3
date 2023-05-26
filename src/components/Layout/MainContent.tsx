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
        <Box
          width={1}
          pt={1}
          pb={4}
          sx={{
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            height: 1,
          }}
        >
          <Routes items={items} />
        </Box>
      </Scrollbars>
    </Box>
  );
};
