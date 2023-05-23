import { Box, Typography } from "@mui/material";
import { AboutTool } from "../Common";

interface Props {
  heading: string;
  description: string;
  url: string;
}

export const ComponentTitle = ({ heading, description, url }: Props) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", mr: "auto" }}>
        <Typography color="primary.dark" variant="h4" sx={{ fontWeight: 600 }}>
          {heading}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            color="common.black"
            variant="h6"
            sx={{ fontWeight: 400 }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
      <AboutTool url={url}></AboutTool>
    </>
  );
};
