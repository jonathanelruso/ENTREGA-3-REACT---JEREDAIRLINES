import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
import BikeService from "../../services/bike.service";
import "./BikeList.css";

function BookingList() {
  const [reservations, setReservations] = useState([]);
  const refForm = useRef();

  const getAllReservations = () => {
    BikeService.getAllBikes()
      .then((items) => {
        let allBikes = [];
        items.forEach(item => {
          const key = item.key;
          const data = item.val();
          allBikes.push({
            key: key,
            brand: data.brand,
            model: data.model
          });
        });
        setBikes([...allBikes]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const removeBike = (key) => {
    BikeService.removeBike(key).then((res) => {
      getAllBikes();
    });
  }

  const addBike = (e) => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const model = e.target.model.value;
    BikeService.addBike(brand, model).then((res) => {
      refForm.current.reset();
      setBikes(oldValues => [...oldValues, { key: res.key, brand, model }])
    })
  }

  useEffect(() => {
    getAllBikes();
  }, []);

  return (
    <>
      <div className="bicycle-list-main-container">
        <div className="bicycle-form-container">
          <form id="bicycle-form" onSubmit={addBike} ref={refForm}>
            <input className="rounded-input" type="text" name="brand" placeholder="brand"/>
            <input className="rounded-input" type="text" name="model" placeholder="model"/>
            <input className="rounded-input" type="submit" value="Add Bike"/>
          </form>
        </div>

        <div className="bicycle-list">
          {bikes.map(b =>
            <div className="bike-item" key={b.key}>
              <p>{b.brand} {b.model}</p>
              <FaRegTrashAlt className="delete-bike" onClick={() => removeBike(b.key)}/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BikeList;