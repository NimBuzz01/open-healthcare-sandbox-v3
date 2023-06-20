import { useState, SyntheticEvent, ChangeEvent } from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { ApiConfig, OperationTypes, apiList } from "../../Configs/ApiConfig";
import { CreateOperationContent } from "./CreateOperationContent";
import { GetResourceContent } from "./GetResourceContent";

export const APIResourceBody = () => {
  const [selectedAPI, setSelectedAPI] = useState<number>(0);
  const [selectedResource, setSelectedResource] = useState<number>(0);
  const [key, setKey] = useState<number>(0);

  const handleChangeAPI = (_event: SyntheticEvent, newTab: number) => {
    setSelectedAPI(newTab);
    setSelectedResource(0);
    setKey((prevKey) => prevKey + 1);
  };

  const handleChangeResource = (_event: ChangeEvent<{}>, newTab: number) => {
    setSelectedResource(newTab);
  };

  const renderAPIs = () =>
    apiList.map((api: ApiConfig, index: number) => (
      <Tab
        key={index}
        label={api.name}
        id={`tab-${index}`}
        aria-controls={`tabpanel-${index}`}
        sx={{
          fontSize: 13,
          fontWeight: 500,
          textTransform: "none",
          transition: "0.2s",
          my: 1,
          mx: 0.5,
          borderRadius: 1,
          "&.Mui-selected": {
            backgroundColor: "primary.main",
            color: "background.default",
          },
          height: "40px",
          minHeight: "40px",
        }}
      />
    ));

  const renderResources = () =>
    apiList[selectedAPI].resources.map((resource, index) => (
      <Tab
        key={index}
        label={resource.resourceName}
        id={`resource-tab-${selectedAPI}-${index}`}
        aria-controls={`resource-tabpanel-${selectedAPI}-${index}`}
        sx={{
          fontSize: 13,
          fontWeight: 500,
          textTransform: "none",
          transition: "0.2s",
          my: 1,
          mx: 0.5,
          borderRadius: 1,
          "&.Mui-selected": {
            backgroundColor: "primary.main",
            color: "background.default",
          },
          height: "40px",
          minHeight: "40px",
        }}
      />
    ));

  const renderResourceContent = ({}: ApiConfig) =>
    apiList[selectedAPI].resources.map((resource, index) => (
      <Box
        key={index}
        role="tabpanel"
        hidden={selectedResource !== index}
        id={`resource-tabpanel-${selectedAPI}-${index}`}
        aria-labelledby={`resource-tab-${selectedAPI}-${index}`}
      >
        {selectedResource === index && (
          <>
            {(resource.resourceMethod === "POST" ||
              resource.resourceMethod === "PUT") && (
              <CreateOperationContent
                backendUrl={apiList[selectedAPI].baseUrl}
                resource={resource}
              />
            )}
            {resource.resourceMethod === "GET" && (
              <GetResourceContent
                resource={resource}
                isSearchOperation={
                  resource.resourceOperation === OperationTypes.SEARCH
                }
                backendUrl={apiList[selectedAPI].baseUrl}
                searchParams={apiList[selectedAPI].searchParams}
              />
            )}
          </>
        )}
      </Box>
    ));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          mt: 1,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 500, color: "grey.600" }}>
            Select API
          </Typography>
          <Tabs
            value={selectedAPI}
            TabIndicatorProps={{ style: { display: "none" } }}
            onChange={handleChangeAPI}
            sx={{
              border: 0.5,
              borderRadius: 1,
              borderColor: "grey.400",
              px: 1,
            }}
          >
            {renderAPIs()}
          </Tabs>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 500, color: "grey.600" }}>
            Select Resource
          </Typography>
          <Tabs
            value={selectedResource}
            onChange={handleChangeResource}
            aria-label="Resource tabs"
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={{
              border: 0.5,
              borderRadius: 1,
              borderColor: "grey.400",
              px: 1,
            }}
          >
            {renderResources()}
          </Tabs>
        </Box>
      </Box>
      <Box
        key={key}
        sx={{
          gap: 1,
          display: "flex",
          flexDirection: "column",
          my: 2,
        }}
      >
        {renderResourceContent(apiList[selectedAPI])}
      </Box>
    </Box>
  );
};
