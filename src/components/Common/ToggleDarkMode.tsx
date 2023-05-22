import { Box, Switch, Typography } from "@mui/material";

interface Props {
  mode: any;
  toggleMode: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ToggleDarkMode = ({ mode, toggleMode }: Props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography sx={{ fontSize: 14, color: "primary.dark", fontWeight: 500 }}>
        DARK MODE
      </Typography>
      <Switch checked={mode} onChange={toggleMode} />
    </Box>
  );
};
