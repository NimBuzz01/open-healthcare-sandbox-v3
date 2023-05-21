import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  IconButton,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight, githubDark } from "@uiw/codemirror-themes-all";
import { useCallback, useState } from "react";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { langs } from "@uiw/codemirror-extensions-langs";
import { BFF_BASE_URL } from "../Configs/Constants";
import apiClient from "../../services/api-client";

export const CodeEditor = () => {
  const [area1, setArea1] = useState("");
  const [area2, setArea2] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const callBackend = () => {
    apiClient(BFF_BASE_URL)
      .post("/v2tofhir/transform", area1)
      .then((res) => {
        setArea2(JSON.stringify(res.data));
      })
      .catch((error) => {
        setArea2(JSON.stringify(error.response));
      });
  };

  const onChange = useCallback((value: any, viewUpdate: any) => {
    setArea1(value);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
  };

  return (
    <Box
      sx={{
        width: 1,
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="text"
          endIcon={<ArticleOutlinedIcon />}
          sx={{ fontSize: 14, color: "primary.dark" }}
        >
          Load Examples
        </Button>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<NavigateNextOutlinedIcon />}
          sx={{
            fontSize: 14,
            color: "background.default",
          }}
          onClick={callBackend}
        >
          Convert to FHIR
        </Button>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ fontSize: 14, color: "primary.dark", fontWeight: 500 }}
          >
            DARK MODE
          </Typography>
          <Switch checked={darkMode} onChange={handleChange} />
        </Box>
      </Box>
      <Box sx={{ display: "flex", mt: 1, border: 1, borderColor: "grey.400", borderBottom:0 }}>
        <Box sx={{ width: "50%", borderRight: 1, borderColor: "grey.400" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 1,
              borderRight: 0.5,
              borderColor: "grey.400",
            }}
          >
            <Typography variant="h5">HL7 Resource :</Typography>
            <Box sx={{ display: "flex" }}>
              <Tooltip
                key={"copy-icon"}
                title={"Copy Content"}
                placement="bottom"
              >
                <IconButton color="primary">
                  <ContentCopyOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip
                key={"download-icon"}
                title={"Download Content"}
                placement="bottom"
              >
                <IconButton color="primary">
                  <SaveAltOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip
                key={"clear-icon"}
                title={"Clear Content"}
                placement="bottom"
              >
                <IconButton color="primary">
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <CodeMirror
            placeholder="Paste or edit HL7 Data here..."
            height="700px"
            value={area1}
            theme={darkMode ? githubDark : githubLight}
            extensions={[langs.javascript()]}
            onChange={onChange}
          />
        </Box>
        <Divider orientation="vertical" />
        <Box sx={{ width: "50%", borderLeft: 1, borderColor: "grey.400" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 1,
              borderLeft: 0.5,
              borderColor: "grey.400",
            }}
          >
            <Typography variant="h5">FHIR Resource :</Typography>
            <Box sx={{ display: "flex" }}>
              <Tooltip
                key={"copy-icon"}
                title={"Copy Content"}
                placement="bottom"
              >
                <IconButton color="primary">
                  <ContentCopyOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip
                key={"download-icon"}
                title={"Download Content"}
                placement="bottom"
              >
                <IconButton color="primary">
                  <SaveAltOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip
                key={"clear-icon"}
                title={"Clear Content"}
                placement="bottom"
              >
                <IconButton color="primary">
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <CodeMirror
            placeholder="Paste or edit Json Data here..."
            value={area2}
            height="700px"
            theme={darkMode ? githubDark : githubLight}
            extensions={[langs.json()]}
          />
        </Box>
      </Box>
      <Box sx={{ borderTop: 1, borderColor: "grey.400" }}>
        <Accordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ mr: 8 }}>Console</Typography>
            <Typography>Problems Found - 0</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
