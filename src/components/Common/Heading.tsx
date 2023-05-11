import { Box, Divider, Typography } from "@mui/material";
import ViewDocument from "./ViewDocument";

interface Props {
  heading: string;
  description: string;
  url: string;
}

const Heading = ({ heading, description, url }: Props) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          color="secondary.dark"
          variant="h3"
          sx={{ fontWeight: 600 }}
        >
          {heading}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            color="primary.dark"
            variant="h6"
            sx={{ fontWeight: 400, my: 1 }}
          >
            {description}
          </Typography>
          <ViewDocument url={url}></ViewDocument>
        </Box>
        <Divider />
      </Box>
    </>
  );
};

export default Heading;
