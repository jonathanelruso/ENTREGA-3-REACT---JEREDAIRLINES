import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/reservas");

const getAllReservations = () => {
  return get(dbRef);
};

const addReservation = (brand, model) => {
  return push(dbRef, {
    brand: brand,
    model: model
  });
};

const removeReservation = (key) => {
  const dbRefReservation = ref(db, `/reservas/${key}`);
  return remove(dbRefReservation);
};

export default {
  getAllBikes,
  addBike,
  removeBike,
};