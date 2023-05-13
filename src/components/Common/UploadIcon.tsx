import { IconButton } from "@mui/material";
import { CloudUploadRounded } from "@mui/icons-material";

interface Props {
  size?: number;
  readFile(data?: string | ArrayBuffer | null, errors?: Error): any;
}

const UploadIcon = ({ size = 30, readFile }: Props) => {
  const reader = (file: Blob) => {
    const fr = new FileReader();
    fr.onload = () => {
      {
        readFile(fr.result);
      }
    };
    fr.onerror = (err) => {};
    fr.readAsText(file);
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
      />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload file" component="span">
          <CloudUploadRounded sx={{ fontSize: size }} />
        </IconButton>
      </label>
    </>
  );
};

export default UploadIcon;
