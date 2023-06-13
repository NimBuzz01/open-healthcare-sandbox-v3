import { Box } from "@mui/material";
import Routes from "../../routes/AppRoutes";
import { Footer, SideNavigation } from "../Layout";
import { items } from "../Configs/AcceleratorConfig";
import itemConfig from "../../tool-config.json";
import { ComingSoon } from "../Common";

interface ItemConfig {
  [key: string]: {
    status: "enabled" | "disabled" | "maintenance";
  };
}

export const MainContent = () => {
  const filteredItems = items.filter((item) => {
    const itemStatus = (itemConfig as ItemConfig)[item.label]?.status;
    return itemStatus !== "disabled";
  });

  const renderedItems = filteredItems.map((item) => {
    const itemStatus = (itemConfig as ItemConfig)[item.label]?.status;
    if (itemStatus === "maintenance") {
      return { ...item, component: <ComingSoon /> };
    }
    return item;
  });

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <SideNavigation items={renderedItems} />
      <Box
        width={1}
        pt={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 63px)",
          overflowY: "auto",
        }}
      >
        <Routes items={renderedItems} />
        <Footer />
      </Box>
    </Box>
  );
};
