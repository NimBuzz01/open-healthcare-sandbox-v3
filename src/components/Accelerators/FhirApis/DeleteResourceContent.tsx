import {
  Box,
  Container,
  TextField,
} from "@mui/material";
import { CommonButton } from "../../Common/CommonButton";

interface Props {
  isSearchOperation?: boolean;
}

export const DeleteResourceContent = ({ isSearchOperation = false }: Props) => {
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Box sx={{ display: "flex", gap: 5 }}>
        <Box sx={{ display: "flex", gap: 70 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField variant="outlined" label="Id" fullWidth />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
            mb: 2,
            height: "25%",
          }}
        >
          <Box sx={{ gap: 2, display: "flex" }}>
            <CommonButton
              variant="background"
              label="Execute"
              onClick={function (): void {}}
            />
            <CommonButton variant="border" label="Clear" onClick={() => {}} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
