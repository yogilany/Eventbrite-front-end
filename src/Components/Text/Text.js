import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import { useRef, useState , useContext } from "react";
import { AppContext } from "../../Pages/CreatorsView/Details/Details";
export default function ValidationTextFields({data_testid , Label , PlaceHolder , width}) {
    const MyText = styled(TextField)({
        width:'400px '
    });
  const textRef = useRef();
  const [textValue, setTextValue] = useState("");
  const { showSubmit, setShowSubmit } = useContext(AppContext);
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error={textValue === "" ? true : false}
          id="outlined-error"
          label={Label}
          placeholder={PlaceHolder}
          style={{ width: "92%", marginTop: "5px" , padding:'80px !important'}}
          className="text"
          data-testid={data_testid}
          ref={textRef}
          onChange={(e) => { setTextValue(e.target.value); e.target.value === "" ? setShowSubmit(false) : setShowSubmit(true)}}
        />
      </div>
    </Box>
  );
}

