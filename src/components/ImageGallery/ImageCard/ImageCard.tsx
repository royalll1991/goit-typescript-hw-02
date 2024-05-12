import css from './ImageCard.module.css'
import {ImageProps} from '../../App/App.types'


function ImageCard ({image, onClick}: ImageProps) {
    return (
        <div onClick={() => onClick (image)} className={css.box}>
            <img src={image.urls.small} alt={image.description} className={css.card}/>
            <p>likes {image.likes}</p>
        </div>
    );
}

export default ImageCard;