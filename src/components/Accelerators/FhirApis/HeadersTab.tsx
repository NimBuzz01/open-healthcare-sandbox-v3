import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

interface Props {
  request: any;
  response: any;
}

export const HeadersTab = ({ request, response }: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Button
        onClick={toggleDrawer(true)}
        color="primary"
        aria-label="view headers"
        endIcon={<SettingsOutlinedIcon />}
        sx={{ textTransform: "none" }}
      >
        <Typography variant="h6" color="primary" sx={{ ml: "auto" }}>
          View Headers
        </Typography>
      </Button>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 800 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <IconButton onClick={toggleDrawer(false)}>
              <ChevronRightIcon fontSize="large" color="primary" />
            </IconButton>
          </Box>
          <Divider />
          <Box
            sx={{
              p: 2,
              m: 2,
              mb: 0,
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
                  color:
                    request.method === "GET" ? "secondary.main" : "#FFA500",
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
            <Box
              sx={{ display: "flex", gap: 0.5, mb: 1, alignItems: "center" }}
            >
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
        </Box>
      </Drawer>
    </>
  );
};
