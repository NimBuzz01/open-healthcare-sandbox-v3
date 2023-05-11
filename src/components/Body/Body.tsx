import React from "react";
import { Box } from "@mui/material";
import Routes from "../../contexts/AppRoutes";
import SideNavigation from "../SideNavigation";
import items from "./Config";
import { Scrollbars } from "react-custom-scrollbars";

const Body = () => {
  return (
    <Scrollbars>
      <Box sx={{ flexGrow: 1, display: "flex", overflowY: "auto" }}>
        <SideNavigation items={items} />
        <Box ml={33} width={1} mt={5} mb={8}>
          <Routes items={items} />
        </Box>
      </Box>
    </Scrollbars>
  );
};

export default Body;
