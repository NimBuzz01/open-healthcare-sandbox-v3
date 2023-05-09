import { Typography } from "@mui/material";

interface Props {
  heading: string;
  description: string;
}

const Heading = ({ heading, description }: Props) => {
  return (
    <>
      <Typography color="secondary.dark" variant="h3" sx={{ fontWeight: 600 }}>
        {heading}
      </Typography>

      <Typography
        color="primary.dark"
        variant="h6"
        sx={{ fontWeight: 400, lineHeight: "3" }}
      >
        {description}
      </Typography>
    </>
  );
};

export default Heading;
