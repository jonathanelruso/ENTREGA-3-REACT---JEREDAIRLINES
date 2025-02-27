import CountrySelect from "../booking-autocompleters/BookingAutocompleters";
import "./BookingMenu.css";

function BookingMenu() {
    return (
        <div className="booking-menu-container">
            <CountrySelect label="Origen" />
            <CountrySelect label="Destino" />
        </div>
    )
}

export default BookingMenu;