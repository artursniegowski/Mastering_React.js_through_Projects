function ImageShow({ image }) {
    return(
        <div>
            <img src={image.urls.small} alt={image.alt} />
        </div>
    );
};

export default ImageShow;