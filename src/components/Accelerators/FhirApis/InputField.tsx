import { Box, IconButton, TextField, Typography } from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutline";

export interface Props {
  fieldIndex: number;
  label: string;
  pValue: string;
  isRequired?: boolean;
  example: string;
  dataType: string;
  onChange: (fieldIndex: number, field: string, value: any) => void;
  isDeleteRequired?: boolean;
  onDelete?: (fieldIndex: number) => void;
  [key: string]: any;
}

export const InputField = ({
  fieldIndex,
  label,
  isRequired,
  example,
  dataType,
  pValue,
  onChange,
  onDelete,
  isDeleteRequired,
  ...props
}: Props) => {
  const handleChange = (field: string, value: any) => {
    onChange(fieldIndex, field, value);
  };

  const handleDelete = () => {
    onDelete!(fieldIndex);
  };

  return (
    <Box sx={{ width: 550 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 1 }}>
        <Box sx={{ width: 200, mb: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ color: "primary.dark" }}>{label}</Typography>
            {isRequired && (
              <Typography
                sx={{ fontSize: 11, alignSelf: "flex-end", color: "#FF2E2E" }}
              >
                *required
              </Typography>
            )}
          </Box>
          <TextField
            size="small"
            value=""
            onChange={(event) => handleChange("value", event.target.value)}
            {...props}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{ color: "grey.500", pt: 2, fontStyle: "italic", width: 70 }}
        >
          {dataType}
        </Typography>
        <Typography variant="h6" sx={{ color: "grey.500", pt: 2 }}>
          Example: {example}
        </Typography>
        {isDeleteRequired && (
          <IconButton onClick={handleDelete} sx={{ mt: 1.5, ml: "auto" }}>
            <RemoveCircleOutlineOutlinedIcon
              sx={{ fontSize: 26, color: "primary.main" }}
            />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};
