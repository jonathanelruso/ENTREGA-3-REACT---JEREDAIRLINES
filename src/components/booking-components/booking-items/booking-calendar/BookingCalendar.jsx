import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "../BookingItems.css"

function BookingCalendar({ label, value, onChange, minDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={["DatePicker"]} >
        <DatePicker
          format="DD/MM/YYYY"
          label={label}
          value={value}
          className="calendar-item"
          onChange={onChange}
          minDate={minDate || dayjs().startOf("day")} // Bloquea fechas pasadas
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default BookingCalendar;
