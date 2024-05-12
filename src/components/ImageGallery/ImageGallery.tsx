import {Image} from '../App/App.types'
import css from './ImageGallery.module.css'
import ImageCard from './ImageCard/ImageCard';


interface Props {
    images: Image[];
    onClick: (image: Image) => void;
}

function ImageGallery({images, onClick}: Props) {
    return (
        <ul className={css.list}>
            {images.map((image) => (
                <li className={css.listItem} key={image.id} >
                    <ImageCard 
                        image={image}
                        onClick={onClick}
                    />
                </li>
            ))}
        </ul>
    );
}

export default ImageGallery;