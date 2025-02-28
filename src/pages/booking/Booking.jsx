import BookingMenu from "../../components/booking-components/booking-menu/BookingMenu";
import Footer from "../../components/global-components/footer/Footer";
import Header from "../../components/global-components/header/Header";
import HomeImage from "../../components/global-components/background-image/HomeImage";
import "../home/Home.css";

function Booking() {
    return (
        <>
            <Header logo_image={"./logo/black-logo.png"}/>
            <HomeImage image= "/background-image/booking-image.webp" text = "A un solo clic de tu próximo viaje"/>
            <BookingMenu />
            <Footer />
        </>

    );
}

export default Booking;