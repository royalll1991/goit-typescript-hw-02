import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
    onClick: () => void;
}

function LoadMoreBtn ({onClick}: LoadMoreBtnProps): JSX.Element {
    return (
        <>
            <button className={css.button} onClick={onClick}>Load More</button>
        </>
    );
}

export default LoadMoreBtn;