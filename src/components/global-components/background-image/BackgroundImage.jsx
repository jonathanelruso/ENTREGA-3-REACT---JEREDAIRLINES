import "./BackgroundImage.css";

function BackgroundImage({image, text}) {
    return(
        <div className="home-image-container">
            <img src={image} alt="homeImage" className="home-image-item" loading="lazy"/>
            <div className="home-image-text">
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default BackgroundImage;