import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import { useRef , useState } from "react";
export default function ValidationTextFields({data_testid}) {
    const MyText = styled(TextField)({
        width:'400px '
    });
  const textRef = useRef();
  const [textValue, setTextValue] = useState("");
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
          error={textValue === "" ? true : false}
          id="outlined-error"
          label="Summary"
          placeholder="Write a short event summary to get attended excited."
          style={{ width: "92%", marginTop: "5px" }}
          className="text"
          data-testid={data_testid}
          ref={textRef}
          onChange = {(e) => {setTextValue(e.target.value)}}
        />
      </div>
    </Box>
  );
}

