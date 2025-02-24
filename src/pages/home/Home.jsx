import React from "react";
import Header from "../../components/global-components/header/Header";
import Footer from "../../components/global-components/footer/Footer";
import HomeImage from "../../components/home-components/home-image/homeImage";
import CarouselComponent from "../../components/home-components/carousel-component/CarouselComponent";
import HomeContent from "../../components/home-components/home-content/HomeContent";
import "./Home.css";



function Home (){
    return (
        <>
         <Header/>
         <HomeImage/>
         <CarouselComponent/>
         <HomeContent/>
         <Footer/>
        </>
    )
}

export default Home;