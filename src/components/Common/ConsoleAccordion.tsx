import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { bbedit, aura } from "@uiw/codemirror-themes-all";
import { langs } from "@uiw/codemirror-extensions-langs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface Props {
  error: string;
  darkMode?: boolean;
}

export const ConsoleAccordion = ({ error, darkMode }: Props) => {
  const langExtensions: Record<string, () => any> = langs;

  return (
    <Accordion
      disableGutters
      sx={{ border: 1, borderRadius: 1, borderColor: "grey.500" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ mr: 8, color: "primary.dark" }}>Console</Typography>
        <Typography sx={{ color: "primary.dark" }}>
          Problems Found {error.length}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Divider />
        <CodeMirror
          placeholder="No errors found..."
          width="100%"
          height="400px"
          value={error}
          theme={darkMode ? aura : bbedit}
          extensions={[langExtensions["javascript"]()]}
          readOnly
        />
      </AccordionDetails>
    </Accordion>
  );
};
