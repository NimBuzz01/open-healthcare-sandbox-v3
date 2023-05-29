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
  const [selectedAPI, setSelectedAPI] = useState(0);
  const [expandedResourceIndex, setExpandedResourceIndex] = useState<
    number | false
  >(false);

  const handleChangeAPI = (event: React.SyntheticEvent, newTab: number) => {
    setSelectedAPI(newTab);
    setExpandedResourceIndex(false);
  };

  const handleChangeResource =
    (index: number) => (_: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpandedResourceIndex(isExpanded ? index : false);
    };

  const renderResources = ({baseUrl, resources, searchParams}: ApiConfig) => {
    return resources.map((resource, index) => (
      <Accordion
        key={index}
        expanded={expandedResourceIndex === index}
        onChange={handleChangeResource(index)}
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
            <ResourceMethodIcon resourceMethod={resource.resourceMethod} />
            <Typography sx={{ color: "common.dark", fontSize: 14 }}>
              {resource.resourcePath}
            </Typography>
            <Typography
              sx={{ color: "grey.500", fontSize: 14, fontWeight: 500 }}
            >
              {resource.resourceDescription}
            </Typography>
          </Box>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          {(resource.resourceMethod === "POST" ||
            resource.resourceMethod === "PUT") && <CreateOperationContent backendUrl={baseUrl} />}
          {resource.resourceMethod === "GET" && (
            <GetResourceContent
              isSearchOperation={
                resource.resourceOperation === OpearionTypes.SEARCH
              }
              backendUrl={baseUrl}
              searchParams={searchParams}
            />
          )}
          {resource.resourceMethod === "DELETE" && (
            <DeleteResourceContent
              isSearchOperation={
                resource.resourceOperation === OpearionTypes.SEARCH
              }
            />
          )}
        </AccordionDetails>
      </Accordion>
    ));
  };

  const renderAPIs = () => {
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
        value={selectedAPI}
        onChange={handleChangeAPI}
        indicatorColor="primary"
        textColor="inherit"
      >
        {renderAPIs()}
      </Tabs>
      {renderResources(apiList[selectedAPI])}
    </div>
  );
};
