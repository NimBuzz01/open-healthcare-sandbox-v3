import { Box, Divider, Typography } from "@mui/material";
import { AboutTool } from "../Common";

interface Props {
  heading: string;
  description: string;
  url: string;
}

export const Heading = ({ heading, description, url }: Props) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          color="primary.dark"
          variant="h3"
          sx={{ fontWeight: 600 }}
        >
          {heading}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            color="common.black"
            variant="h6"
            sx={{ fontWeight: 400, my: 1 }}
          >
            {description}
          </Typography>
          <AboutTool url={url}></AboutTool>
        </Box>
        <Divider />
      </Box>
    </>
  );
};
