import React from "react";
import { Box } from "@mui/material";
import Routes from "../../contexts/AppRoutes";
import SideNavigation from "../SideNavigation";
import items from "./Config";

const Body = () => {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", overflowY: "auto" }}>
      <SideNavigation items={items} />
      <Box ml={32}>
        <Routes items={items} />
      </Box>
    </Box>
  );
};

export default Body;
