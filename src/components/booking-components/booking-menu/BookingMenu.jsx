import CountrySelect from "../booking-autocompleters/BookingAutocompleters";
import BookingCalendar from "../booking-calendar/BookingCalendar";
import "./BookingMenu.css";

function BookingMenu() {
    return (
        <div className="booking-menu-container">
            <div className="booking-options-container">
                <CountrySelect label="Origen" />
                <CountrySelect label="Destino" />
                <BookingCalendar label="Fecha de ida" />
                <BookingCalendar label="Fecha de vuelta" />
            </div>

        </div>
    )
}

export default BookingMenu;