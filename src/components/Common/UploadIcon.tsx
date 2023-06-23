import { IconButton, Tooltip } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

interface Props {
  size?: number;
  readFile(data?: string | ArrayBuffer | null, errors?: Error): any;
}

export const UploadIcon = ({ size = 30, readFile }: Props) => {
  const reader = async (file: Blob): Promise<void> => {
    const fr = new FileReader();

    fr.onerror = (err: ProgressEvent<FileReader>) => {
      console.error("Error reading file:", err);
    };

    await new Promise<void>((resolve) => {
      fr.onload = () => {
        readFile(fr.result);
        resolve();
      };
      fr.readAsText(file);
    });
  };

  return (
    <>
      <input
        accept="text/*"
        id="icon-button-file"
        type="file"
        style={{ display: "none" }}
        onChange={(event) => {
          if (!event.target.files) {
            return;
          }
          let file = event.target.files;
          reader(file[0]);
        }}
        aria-label="Upload File"
      />
      <label htmlFor="icon-button-file">
        <Tooltip key="upload-icon" title="Upload Content" placement="bottom">
          <IconButton
            aria-label="upload file"
            sx={{
              color: "primary.main",
            }}
            component="span"
          >
            <FileUploadOutlinedIcon sx={{ fontSize: size }} />
          </IconButton>
        </Tooltip>
      </label>
    </>
  );
};
