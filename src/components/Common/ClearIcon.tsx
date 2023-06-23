import { IconButton, Tooltip } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

interface Props {
  size?: number;
  onClear: () => void;
}

export const ClearIcon = ({ size = 30, onClear }: Props) => {
  return (
    <Tooltip key="clear-icon" title="Clear Content" placement="bottom">
      <IconButton
        color="primary"
        onClick={onClear}
        id="clear-icon-button"
        aria-label="Clear Icon Button"
      >
        <DeleteOutlineOutlinedIcon
          sx={{ fontSize: size }}
          id="clear-icon"
          aria-label="Clear Icon"
        />
      </IconButton>
    </Tooltip>
  );
};
