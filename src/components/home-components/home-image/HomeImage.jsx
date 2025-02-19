import "./homeImage.css";

function HomeImage(){
    return(
        <div className="home-image-container">
            <img src="/home-image\home-image.jpg" alt="homeImage" className="home-image-item" />
            <div className="home-image-text">
                <h1>Tu viaje empieza aquí.</h1>
            </div>
        </div>
    )
}

export default HomeImage;