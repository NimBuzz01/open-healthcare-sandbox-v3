import { IconButton, Tooltip } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

interface Props {
  size?: number;
  onClear: () => void;
}

export const ClearIcon = ({ size = 30, onClear }: Props) => {
  return (
    <Tooltip key={"clear-icon"} title={"Clear Content"} placement="bottom">
      <IconButton color="primary" onClick={onClear}>
        <DeleteOutlineOutlinedIcon sx={{ fontSize: size }} />
      </IconButton>
    </Tooltip>
  );
};
