import css from './ImageCard.module.css'
import {ImageProps} from '../../App/App.types'


function ImageCard ({small, description, likes, onClick}: ImageProps) {
    return (
        <div onClick={() => onClick ({small, description, likes})} className={css.box}>
            <img src={small} alt={description} className={css.card}/>
            <p>likes {likes}</p>
        </div>
    );
}

export default ImageCard;