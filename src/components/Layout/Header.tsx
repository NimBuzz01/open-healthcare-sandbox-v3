import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Logo } from "../Logo";
import { AlertModal, ComponentTitle } from "../Common";
import { items } from "../Configs/AcceleratorConfig";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

export const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const location = useLocation();
  const currentItem = items.find((item) => item.path === location.pathname);
  const label = currentItem ? currentItem.label : "";
  const description = currentItem ? currentItem.description : "";
  const url = currentItem ? currentItem.url : "";

  return (
    <>
      {screenWidth < 960 && (
        <AlertModal contentText="Please use a laptop or a desktop to try out the Open Healthcare Sandbox seamlessly." />
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          py: 0.5,
          px: 1,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        }}
      >
        <Logo />
        <KeyboardArrowRightOutlinedIcon fontSize="large" color="primary" />
        <ComponentTitle
          heading={label}
          description={description}
          url={url}
        ></ComponentTitle>
      </Box>
    </>
  );
};
