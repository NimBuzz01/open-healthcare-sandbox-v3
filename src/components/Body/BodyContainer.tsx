import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const BodyContainer = ({ children }: Props) => {
  return (
    <div
      style={{
        marginTop: "50px",
        marginRight: "60px",
        marginLeft: "80px",
      }}
    >
      {children}
    </div>
  );
};

export default BodyContainer;
