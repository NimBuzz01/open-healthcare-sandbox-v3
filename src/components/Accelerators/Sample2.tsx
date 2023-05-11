import React from "react";
import CommonButton from "../Common/CommonButton";
import { Box } from "@mui/material";

const Sample2 = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <Box sx={{ p: 2 }}>
        <CommonButton
          variant="background"
          label="Validate"
          onClick={handleButtonClick}
        />
        <CommonButton
          variant="border"
          label="Clear"
          onClick={handleButtonClick}
        />
      </Box>
    </>
  );
};

export default Sample2;
