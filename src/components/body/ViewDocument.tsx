import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";

interface Props {
  url: string;
}

const ViewDocument = ({ url }: Props) => {
  return (
    <>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Typography color="primary.dark" variant="h6" sx={{ fontWeight: 400 }}>
          Need help?
        </Typography>
        <Link href={url} target="_blank" underline="none">
          <Typography
            color="secondary.main"
            variant="h6"
            sx={{ fontWeight: 400 }}
          >
            View Documentation
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default ViewDocument;
