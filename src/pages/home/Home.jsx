import React from "react";
import Header from "../../components/global-components/header/Header";
import Footer from "../../components/global-components/footer/Footer";
import CarouselComponent from "../../components/home-components/carousel-component/CarouselComponent";
import HomeContent from "../../components/home-components/home-content/HomeContent";
import "./Home.css";
import HomeImage from "../../components/global-components/home-image/HomeImage";



function Home (){
    return (
        <>
         <Header logo_image={"./logo/white-logo.png"}/>
         <HomeImage image = "/background-image/home-image.webp" text = "Tu viaje empieza aquí"/>
         <CarouselComponent/>
         <HomeContent/>
         <Footer/>
        </>
    )
}

export default Home;