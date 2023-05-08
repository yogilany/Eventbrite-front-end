import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabels({labelVal}) {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label={labelVal}
      sx = {{marginLeft:'20px' , fontSize:'40px' , marginBottom:'10px' , color:"#39364f;" , fontWeight:"bold"}} />
    </FormGroup>
  );
}
