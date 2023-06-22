import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  request: any;
  response: any;
}

export const HeadersTab = ({ request, response }: Props) => {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        position: "absolute",
        zIndex: 100,
        width: 900,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="primary" fontSize="medium" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ display: "flex", bgcolor: "background.default" }}
      >
        <Typography variant="h6" color="primary" sx={{ ml: "auto" }}>
          View Headers
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          border: 1,
          borderRadius: 1,
          borderColor: "grey.400",
        }}
      >
        <Box
          sx={{
            p: 2,
            m: 2,
            border: 0.5,
            borderRadius: 1,
            borderColor: "grey.400",
            bgcolor: "#fff",
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "primary.dark",
            }}
          >
            Request -
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 500,
                color: request.method == "GET" ? "secondary.main" : "#FFA500",
              }}
            >
              {request.method}
            </Typography>
            <Typography sx={{ fontSize: 14 }}>{request.reqUrl}</Typography>
          </Box>

          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "primary.dark",
            }}
          >
            Request Headers -
          </Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
            content-type:{" "}
            <Typography component="span" color="primary">
              {request.contentType}
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            p: 2,
            m: 2,
            mb: 1,
            border: 0.5,
            borderRadius: 1,
            borderColor: "grey.400",
            bgcolor: "#fff",
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "primary.dark",
            }}
          >
            Response -
          </Typography>
          <Box sx={{ display: "flex", gap: 0.5, mb: 1, alignItems: "center" }}>
            {response.statusCode === 200 || response.statusCode === 201 ? (
              <DoneOutlinedIcon color="success" />
            ) : (
              <CloseOutlinedIcon color="error" />
            )}
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 400,
                color: "primary.dark",
              }}
            >
              HTTP {response.statusCode} {response.statusText}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "primary.dark",
            }}
          >
            Response Headers -
          </Typography>
          <Typography>
            content-type:{" "}
            <Typography component="span" color="primary" sx={{ ml: 1 }}>
              {response.contentType}
            </Typography>
          </Typography>
          <Typography>
            url:
            <Typography component="span" color="primary" sx={{ ml: 1 }}>
              {response.resUrl}
            </Typography>
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
