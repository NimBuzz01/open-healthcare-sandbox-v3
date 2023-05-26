import { Box, Typography } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { aura, xcodeLight } from "@uiw/codemirror-themes-all";
import { langs } from "@uiw/codemirror-extensions-langs";
import FileSaver from "file-saver";
import { ClearIcon, CopyContent, DownloadIcon, UploadIcon } from "../Common";

interface CodeEditorProps {
  title: string;
  value: string;
  onChange?: (value: string) => void;
  darkMode?: boolean;
  onClear?: () => void;
  placeholder?: string;
  fileType: string;
  downloadEnabled?: boolean;
  uploadEnabled?: boolean;
  clearEnabled?: boolean;
  readFile?(fileInput?: string | ArrayBuffer | null): any;
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
  uploadEnabled,
  clearEnabled,
  readFile,
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
    handleDownload(JSON.parse(content), `${fileType}.json`);
  };

  const langExtensions: Record<string, () => any> = langs;

  return (
    <Box
      sx={{
        width: { width },
        border: 1,
        borderRadius: 1,
        borderColor: "grey.500",
        display: "flex",
        flexDirection: "column",
        height: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 1,
          borderBottom: 1,
          borderColor: "grey.500",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Box sx={{ display: "flex" }}>
          <CopyContent data={JSON.parse(JSON.stringify(value!))} size={20} />
          {downloadEnabled && (
            <DownloadIcon handleDownload={handleDownloadClick} size={22} />
          )}
          {uploadEnabled && <UploadIcon readFile={readFile!} size={22} />}
          {clearEnabled && <ClearIcon onClear={onClear!} size={22} />}
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <CodeMirror
          placeholder={placeholder}
          value={value}
          height={height}
          theme={darkMode ? aura : xcodeLight}
          extensions={[langExtensions[fileType]()]}
          onChange={onChange}
          readOnly={readOnly}
        />
      </Box>
    </Box>
  );
};
