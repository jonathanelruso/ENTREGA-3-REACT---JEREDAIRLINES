import { useState, useEffect } from "react";
import BookingListServices from "../../../../services/booking-list-services/BookingListServices";
import "./BookingList.css"
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BookingList() {
  // Estado para almacenar las reservas
  const [reservations, setReservations] = useState([]);

  // Función para obtener todas las reservas desde Firebase
  const getAllReservations = () => {
    BookingListServices.getAllReservations()
      .then((items) => {
        let allReservations = [];
        items.forEach((item) => {
          const key = item.key;
          const data = item.val();
          // Agregar cada reserva a la lista de reservas
          allReservations.push({
            key: key,
            origin: data.origin,
            destination: data.destination,
            departureDate: data.departureDate,
            returnDate: data.returnDate,
          });
        });
        // Actualizar el estado con todas las reservas
        setReservations([...allReservations]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const removeReservation = (key) => {
          BookingListServices.removeReservation(key).then((res) => {
              getAllReservations();
          });
      }

  useEffect(() => {
    getAllReservations();
  }, []);

  return (
    <div className="reservation-list-main-container">
      <div className="reservation-list">
        {reservations.map((r) => (
          <div className="reservation-item" key={r.key}>
            <p>
              {r.origin} to {r.destination} from {r.departureDate} to {r.returnDate}
            </p>
            <FontAwesomeIcon icon={faTimes} className="cancel-icon" onClick={() => removeReservation(r.key)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingList;
