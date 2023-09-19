import './ImageList.css'
import ImageShow from './ImageShow';

function ImageList({ images }) {
    const showImages = images.map((image, index) => {
        return <ImageShow image={image} key={image.id}/>;
    });

    return(
        <div className='image-list'>
            {showImages}
        </div>
    );
};

export default ImageList;