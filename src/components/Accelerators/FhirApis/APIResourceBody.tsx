import { useState, SyntheticEvent, ChangeEvent } from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { ApiConfig, OperationTypes, apiList } from "../../Configs/ApiConfig";
import { CreateOperationContent } from "./CreateOperationContent";
import { GetResourceContent } from "./GetResourceContent";

export const APIResourceBody = () => {
  const [selectedAPI, setSelectedAPI] = useState<number>(0);
  const [selectedResource, setSelectedResource] = useState<number>(0);

  const handleChangeAPI = (_event: SyntheticEvent, newTab: number) => {
    setSelectedAPI(newTab);
    setSelectedResource(0);
  };

  const handleChangeResource = (_event: ChangeEvent<{}>, newTab: number) => {
    setSelectedResource(newTab);
  };

  const renderResources = ({ baseUrl, resources, searchParams }: ApiConfig) => (
    <Box
      sx={{
        mt: 1,
        flexGrow: 1,
        gap: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          px: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
          border: 1,
          borderRadius: 2,
          borderColor: "grey.400",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: "primary.dark" }}
        >
          Select Resource:
        </Typography>
        <Tabs
          value={selectedResource}
          onChange={handleChangeResource}
          aria-label="Resource tabs"
        >
          {resources.map((resource, index) => (
            <Tab
              key={index}
              label={resource.resourceName}
              id={`resource-tab-${index}`}
              aria-controls={`resource-tabpanel-${index}`}
              sx={{
                fontSize: 14,
                fontWeight: 500,
                textTransform: "none",
              }}
            />
          ))}
        </Tabs>
      </Box>

      {resources.map((resource, index) => (
        <Box
          sx={{
            width: 1,
            border: 1,
            borderRadius: 2,
            borderColor: "grey.400",
          }}
          key={index}
          role="tabpanel"
          hidden={selectedResource !== index}
          id={`resource-tabpanel-${index}`}
          aria-labelledby={`resource-tab-${index}`}
        >
          {selectedResource === index && (
            <>
              {(resource.resourceMethod === "POST" ||
                resource.resourceMethod === "PUT") && (
                <CreateOperationContent
                  backendUrl={baseUrl}
                  resource={resource}
                />
              )}
              {resource.resourceMethod === "GET" && (
                <GetResourceContent
                  resource={resource}
                  isSearchOperation={
                    resource.resourceOperation === OperationTypes.SEARCH
                  }
                  backendUrl={baseUrl}
                  searchParams={searchParams}
                />
              )}
            </>
          )}
        </Box>
      ))}
    </Box>
  );

  const renderAPIs = () =>
    apiList.map((api: ApiConfig, index: number) => (
      <Tab
        key={index}
        label={api.name}
        id={`tab-${index}`}
        aria-controls={`tabpanel-${index}`}
        sx={{ fontSize: 14, fontWeight: 500, textTransform: "none" }}
      />
    ));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
      <Box
        sx={{
          px: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
          border: 1,
          borderRadius: 2,
          borderColor: "grey.400",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: "primary.dark" }}
        >
          Select API:
        </Typography>
        <Tabs value={selectedAPI} onChange={handleChangeAPI}>
          {renderAPIs()}
        </Tabs>
      </Box>
      {renderResources(apiList[selectedAPI])}
    </Box>
  );
};
