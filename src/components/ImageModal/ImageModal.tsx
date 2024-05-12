import Modal from 'react-modal';

interface ImageModalProps {
    image: {
        urls: {
            regular: string;
        };
        description: string;
        likes: number;
    } | null;
    modalIsOpen: boolean;
    closeModal: () => void;
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

function ImageModal({ image, modalIsOpen, closeModal }: ImageModalProps): JSX.Element {
    let subtitle: any;

    function afterOpenModal() {
        if (subtitle) {
            subtitle.style.color = '#f00';
        }
    }

    return (
        <div onClick={closeModal}>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Image Modal"
            >
                <div>
                    {image && (
                        <img
                            src={image.urls.regular}
                            alt={image.description}
                        />
                    )}
                    <p>likes {image?.likes}</p>
                </div>
            </Modal>
        </div>
    );
}

export default ImageModal;
