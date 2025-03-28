import DestinationCards from "../../components/destination-components/DestinationCards";
import BackgroundImage from "../../components/global-components/background-image/BackgroundImage";
import Header from "../../components/global-components/header/Header";
import Footer from "../../components/global-components/footer/Footer";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Height } from "@mui/icons-material";

function Destinations() {
    return (
        <>
            <Header logo_image={"./logo/white-logo.png"} />
            <BackgroundImage image="/background-image/destinations-image.webp" text={"Lugares inolvidables te esperan"} />
            <DestinationCards />
            <Footer />
        </>
    )
}

export default Destinations;