import { Box } from "@mui/material";
import ContactBtn from "./ContactButton";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import AlertModal from "../AlertModal";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth < 960 && (
        <AlertModal contentText="Please use a medium or large seize display to try out the Open Healthcare Sandbox seamlessly." />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 1.5,
          px: 1,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        }}
      >
        <Logo />
        <ContactBtn />
      </Box>
    </>
  );
};

export default Header;
