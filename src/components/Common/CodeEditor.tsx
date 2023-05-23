import { Box, Tooltip, IconButton, Typography } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { aura, bbedit } from "@uiw/codemirror-themes-all";
import { langs } from "@uiw/codemirror-extensions-langs";
import FileSaver from "file-saver";
import { CopyContent } from "../Common";
import {
  SaveAltOutlined as SaveAltOutlinedIcon,
  DeleteOutlineOutlined as DeleteOutlineOutlinedIcon,
} from "@mui/icons-material";

interface CodeEditorProps {
  title: string;
  value: string;
  onChange?: (value: string) => void;
  darkMode?: boolean;
  onClear?: () => void;
  placeholder?: string;
  fileType: string;
  downloadEnabled?: boolean;
  readOnly?: boolean;
  width: string;
  height: string;
}

export const CodeEditor = ({
  title,
  value,
  onChange,
  darkMode,
  onClear,
  placeholder,
  fileType,
  downloadEnabled,
  readOnly,
  width,
  height,
}: CodeEditorProps) => {
  const handleDownload = (content: string, filename: string) => {
    if (content != null) {
      const file = new File([content], filename, {
        type: "application/json;charset=utf-8",
      });
      FileSaver.saveAs(file);
    }
  };

  const handleDownloadClick = () => {
    const content = JSON.stringify(value, null, 2);
    handleDownload(content, `${fileType}.json`);
  };

  const langExtensions: Record<string, () => any> = langs;

  return (
    <Box
      sx={{
        width: { width },
        border: 1,
        borderRadius: 1,
        borderColor: "grey.500",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 1,
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Box sx={{ display: "flex" }}>
          <CopyContent data={JSON.stringify(value!)} />
          {downloadEnabled && (
            <Tooltip
              key={"download-icon"}
              title={"Download Content"}
              placement="bottom"
            >
              <IconButton color="primary" onClick={handleDownloadClick}>
                <SaveAltOutlinedIcon />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip
            key={"clear-icon"}
            title={"Clear Content"}
            placement="bottom"
          >
            <IconButton color="primary" onClick={onClear}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <CodeMirror
        placeholder={placeholder}
        height={height}
        value={value}
        theme={darkMode ? aura : bbedit}
        extensions={[langExtensions[fileType]()]}
        onChange={onChange}
        readOnly={readOnly}
      />
    </Box>
  );
};
