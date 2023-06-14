import { Box } from "@mui/material";
import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

interface Props {
  size?: number;
  setActive: boolean;
}

export const Preloader = ({ size = 40, setActive }: Props) => {
  let [loading] = useState(setActive);
  let [color] = useState("#5567D5");

  return (
    <Box>
      <HashLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      />
    </Box>
  );
};
