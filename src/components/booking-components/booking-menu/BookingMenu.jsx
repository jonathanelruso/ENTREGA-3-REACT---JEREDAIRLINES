import * as React from 'react';
import { Button } from "@mui/material";
import { useState } from "react";
import CountrySelect from "../booking-autocompleters/BookingAutocompleters";
import BookingCalendar from "../booking-calendar/BookingCalendar";
import "./BookingMenu.css";
import dayjs from "dayjs";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

function BookingMenu() {
  const [origin, setOrigin] = useState(null); // Para almacenar el país de origen
  const [destination, setDestination] = useState(null); // Para almacenar el país de destino
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [alert, setAlert] = useState(null);

  // Función de reserva
  const handleReserva = () => {
    setAlert(
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">
          <AlertTitle>Reserva realizada</AlertTitle>
          Origen: {origin?.label}
          <p></p>
          Destino: {destination?.label}
          <p></p>
          Fecha Ida: {departureDate ? departureDate.format("DD/MM/YYYY") : "No seleccionada"}
          <p></p>
          Fecha Vuelta: {returnDate ? returnDate.format("DD/MM/YYYY") : "No seleccionada"}
        </Alert>
      </Stack>
    );
  };

  // Validar si la fecha de vuelta es válida
  const isReturnDateInvalid = returnDate && departureDate && !returnDate.isAfter(departureDate);

  // Validar si algún campo está vacío o si la fecha de vuelta no es válida
  const isDisabled = !origin || !destination || !departureDate || !returnDate || isReturnDateInvalid;

  return (
    <div className="booking-menu-container">
      <div className="booking-options-container">
        <div className="booking-items-container">
          {/* Pasar la función onChange que actualiza el estado */}
          <CountrySelect label="Origen" value={origin} onChange={setOrigin} />
          <CountrySelect label="Destino" value={destination} onChange={setDestination} />
          <BookingCalendar label="Fecha de ida" value={departureDate} onChange={setDepartureDate} />
          <BookingCalendar
            label="Fecha de vuelta"
            value={returnDate}
            onChange={setReturnDate}
            minDate={departureDate ? departureDate.add(1, "day") : dayjs().startOf("day")}
          />
        </div>
        <div className="booking-button-container">
          <Button variant="contained" onClick={handleReserva} disabled={isDisabled}>
            Reservar
          </Button>
        </div>
      </div>
      {alert && <div className="alert-container">{alert}</div>}
    </div>
  );
}

export default BookingMenu;
