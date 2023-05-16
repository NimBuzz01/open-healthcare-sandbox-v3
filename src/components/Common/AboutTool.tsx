import { Box, Link, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

interface Props {
  url: string;
}

export const AboutTool = ({ url }: Props) => {
  return (
    <Link href={url} target="_blank" underline="none">
      <Box sx={{ display: "flex", alignItems:"center",  gap: 1, color: "info", transition:"0.3s", ":hover":{color:"info.dark"} }}>
        <InfoIcon sx={{ width: 22, height: 22 }} />
        <Typography
          color="info"
          variant="h5"
          sx={{
            fontWeight: 400
          }}
        >
          About this accelerator
        </Typography>
      </Box>
    </Link>
  );
};
