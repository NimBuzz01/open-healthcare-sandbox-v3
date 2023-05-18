import { Box, Container } from "@mui/material";
import { CommonButton } from "../../Common/CommonButton";
import { TextAreaInput, TextAreaOutput } from "../../Common";
import { useState } from "react";

export const CreateOperationContent = () => {
  const [data, setData] = useState(false);
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mb: 2 }}>
        <CommonButton
          variant="background"
          label="Execute"
          onClick={() => {
            setData(true);
          }}
        />
        <CommonButton
          variant="border"
          label="Clear"
          onClick={()=>{setData(false)}}
        />
      </Box>
      <TextAreaInput label="Input: " isCopyRequired isUploadRequired />
      {data && (
        <Box sx={{ mt: 5 }}>
          <TextAreaOutput
            label={"Output"}
            isDownloadButtonRequired
          ></TextAreaOutput>
        </Box>
      )}
    </Container>
  );
};
