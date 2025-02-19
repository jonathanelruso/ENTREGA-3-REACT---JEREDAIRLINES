import React from "react";
import Header from "../../components/global-components/header/Header";
import Footer from "../../components/global-components/footer/Footer";
import HomeImage from "../../components/home-components/home-image/homeImage";
import "./Home.css";
import CarouselComponent from "../../components/home-components/carousel-component/CarouselComponent";


function Home (){
    return (
        <>
         <Header/>
         <HomeImage/>
         <CarouselComponent/>
         <Footer/>
        </>
       
   
        

    )
}

export default Home;