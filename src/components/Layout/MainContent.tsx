import { Box } from "@mui/material";
import { Footer, SideNavigation } from "../Layout";
import { ComingSoon } from "../Common";
import Routes from "../Routes/AppRoutes";
import { items } from "../Configs/AcceleratorConfig";
import itemConfig from "../../tool-config.json";

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
    <Box sx={{ flexGrow: 1, display: "flex" }} id="main-container">
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: "auto",
            flexGrow: 1,
          }}
          id="content-container"
        >
          <Routes items={renderedItems} />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};
