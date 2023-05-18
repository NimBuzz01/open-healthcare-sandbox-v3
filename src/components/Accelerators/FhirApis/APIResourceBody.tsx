import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import {
  ApiConfig,
  OpearionTypes,
  ResourceConfig,
  apiList,
} from "../../Configs/ApiConfig";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CreateOperationContent } from "./CreateOperationContent";
import { GetResourceContent } from "./GetResourceContent";
import { ResourceMethodIcon } from "./ResourceMethodIcon";
import { DeleteResourceContent } from "./DeleteResourceContent";

export const APIResourceBody = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedAccordionIndex, setExpandedAccordionIndex] = useState<
    number | false
  >(false);

  const handleChangeTab = (event: React.SyntheticEvent, newTab: number) => {
    setSelectedTab(newTab);
    setExpandedAccordionIndex(false);
  };

  const handleChangeAccordion =
    (index: number) => (_: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpandedAccordionIndex(isExpanded ? index : false);
    };

  const renderContainers = (containers: ResourceConfig[]) => {
    return containers.map((container, index) => (
      <Accordion
        key={index}
        expanded={expandedAccordionIndex === index}
        onChange={handleChangeAccordion(index)}
        disableGutters
        sx={{
          my: 2,
          borderRadius: 2,
          border: 1,
          borderColor: "grey.300",
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id={`container-summary-${index}`}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <ResourceMethodIcon resourceMethod={container.resourceMethod} />
            <Typography sx={{ color: "common.dark", fontSize: 14 }}>
              {container.resourcePath}
            </Typography>
            <Typography
              sx={{ color: "grey.500", fontSize: 14, fontWeight: 500 }}
            >
              {container.resourceDescription}
            </Typography>
          </Box>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          {(container.resourceMethod == "POST" ||
            container.resourceMethod == "PUT") && <CreateOperationContent />}
          {container.resourceMethod == "GET" && (
            <GetResourceContent
              isSearchOperation={
                container.resourceOperation == OpearionTypes.SEARCH
              }
            />
          )}
          {container.resourceMethod == "DELETE" && (
            <DeleteResourceContent
              isSearchOperation={
                container.resourceOperation == OpearionTypes.SEARCH
              }
            />
          )}
        </AccordionDetails>
      </Accordion>
    ));
  };

  const renderTabs = () => {
    return apiList.map((api: ApiConfig, index: number) => (
      <Tab
        key={index}
        label={api.name}
        id={`tab-${index}`}
        aria-controls={`tabpanel-${index}`}
        sx={{ fontSize: 14, fontWeight: 500 }}
      />
    ));
  };

  return (
    <div>
      <Tabs
        value={selectedTab}
        onChange={handleChangeTab}
        indicatorColor="primary"
        textColor="inherit"
        sx={{ mt: 2 }}
      >
        {renderTabs()}
      </Tabs>
      {renderContainers(apiList[selectedTab].resources)}
    </div>
  );
};
