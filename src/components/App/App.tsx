import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import { searchImage } from '../../serch-image';
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import {DataType, Image} from './App.types'


function App() {
    const [query, setQuery] = useState<string>('');
    const [images, setImages] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    const handleSubmit = async (query: string, page: number): Promise<void> => {
        try {
            setIsLoading(true);
            setError(false);
            const data:DataType = await searchImage(query, page);
            setImages(prevImages => [...prevImages, ...data.results]);
           
        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        if (!query) {
            return;
        }
        
        handleSubmit(query, page);
    }, [query, page]);
    
    useEffect(() => {
    setPage(1); 
    setImages([]);
    }, [query]);
    
    function openModal(image: Image) {
        setSelectedImage(image);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <SearchBar onSubmit={setQuery} />
            {error && <ErrorMessage />}
            {images.length > 0 && <ImageGallery images={images} onClick={openModal} />}
            {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
            {isLoading && <Loader />}
            {modalIsOpen && selectedImage && <ImageModal
                image={selectedImage}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal} />}
        </div>
    );
}

export default App;