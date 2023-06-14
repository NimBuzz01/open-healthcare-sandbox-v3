import { Typography } from "@mui/material";

interface ContainerProps {
  resourceMethod: string;
}

export const ResourceMethodIcon = ({ resourceMethod }: ContainerProps) => {
  let bgcolor: string;

  switch (resourceMethod) {
    case "GET":
      bgcolor = "#34B474"; //34B474
      break;
    case "DELETE":
      bgcolor = "#F35A5A";
      break;
    case "POST":
      bgcolor = "#FFA500";
      break;
    default:
      bgcolor = "#6495ED";
      break;
  }

  return (
    <Typography
      sx={{
        bgcolor: bgcolor,
        color: "common.white",
        py: 1,
        borderRadius: 2,
        textAlign: "center",
        width: 90,
        fontWeight: 600,
      }}
    >
      {resourceMethod}
    </Typography>
  );
};
