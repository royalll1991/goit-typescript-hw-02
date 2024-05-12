import {Image} from '../App/App.types'
import css from './ImageGallery.module.css'
import ImageCard from './ImageCard/ImageCard';


interface Props {
    images: Image[];
    onClick: () => void;
}

function ImageGallery({images, onClick}: Props) {
    return (
        <ul className={css.list}>
            {images.map((image) => (
                <li className={css.listItem} key={image.id} onClick={() => onClick()}>
                    <ImageCard 
                        small={image.urls.small}
                        description={image.description}
                        likes={image.likes}
                        onClick={onClick}
                    />
                </li>
            ))}
        </ul>
    );
}

export default ImageGallery;