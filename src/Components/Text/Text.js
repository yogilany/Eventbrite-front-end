import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

export default function ValidationTextFields() {
    const MyText = styled(TextField)({
        width:'500px'
    });
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-error"
          label="Summary"
          placeholder="Write a short event summary to get attended excited."
          style={{ width: "700px", marginTop: "20px" }}
        />
      </div>
    </Box>
  );
}

