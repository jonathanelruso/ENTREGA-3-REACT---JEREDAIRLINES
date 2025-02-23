import "./homeImage.css";

function HomeImage(){
    return(
        <div className="home-image-container">
            <img src="/home-image\home-image.webp" alt="homeImage" className="home-image-item" loading="lazy"/>
            <div className="home-image-text">
                <h1>Tu viaje empieza aquí.</h1>
            </div>
        </div>
    )
}

export default HomeImage;