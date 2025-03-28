import { useState, useEffect } from "react";
import BookingListServices from "../../../../services/booking-list-services/BookingListServices";
import "./BookingList.css"
import { faTimes, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BookingList() {
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ origin: null, destination: null, departureDate: null, returnDate: null });

  const getAllReservations = () => {
    BookingListServices.getAllReservations()
      .then((items) => {
        let allReservations = [];
        items.forEach((item) => {
          const key = item.key;
          const data = item.val();
          allReservations.push({
            key: key,
            origin: data.origin,
            destination: data.destination,
            departureDate: data.departureDate,
            returnDate: data.returnDate,
          });
        });
        setReservations([...allReservations]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const removeReservation = (key) => {
    BookingListServices.removeReservation(key).then(() => {
      getAllReservations();
    });
  };

  const openUpdateModal = (reservation) => {
    setSelectedReservation(reservation.key);
    setFormData({
      origin: reservation.origin,
      destination: reservation.destination,
      departureDate: reservation.departureDate,
      returnDate: reservation.returnDate,
    });
    setShowModal(true);
  };

  const handleUpdate = () => {
    if (selectedReservation) {
      BookingListServices.updateReservation(selectedReservation, formData).then(() => {
        getAllReservations();
        setShowModal(false);
      });
    }
  };

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
            <FontAwesomeIcon icon={faPenToSquare} className="cancel-icon" onClick={() => openUpdateModal(r)} />
            <FontAwesomeIcon icon={faTimes} className="cancel-icon" onClick={() => removeReservation(r.key)} />
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>Actualizar Reserva</h2>
            <label>Origen: <input type="text" value={formData.origin} onChange={(e) => setFormData({ ...formData, origin: e.target.value })} /></label>
            <label>Destino: <input type="text" value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} /></label>
            <label>Fecha de Salida: <input type="date" value={formData.departureDate} onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })} /></label>
            <label>Fecha de Regreso: <input type="date" value={formData.returnDate} onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })} /></label>
            <button onClick={handleUpdate}>Actualizar</button>
            <button onClick={() => setShowModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingList;
