import React from "react";
import { Box } from "@mui/material";
import Routes from "../../contexts/AppRoutes";
import SideNavigation from "../SideNavigation";
import items from './Config'

const Body = () => {
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <SideNavigation items={items} />
      <Routes items={items} />
    </Box>
  );
};

export default Body;
