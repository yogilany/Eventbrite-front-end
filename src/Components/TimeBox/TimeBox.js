import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers";

export default function TimePickerValue() {
  const [value, setValue] = React.useState(dayjs("2022-04-17T15:30"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker", "TimePicker"]}>
        <TimePicker
          label="Start Time"
          defaultValue={dayjs("2022-04-17T15:30")}
        />
        <TimePicker
          label="End Time"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
