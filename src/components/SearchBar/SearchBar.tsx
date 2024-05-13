import { useState, FormEvent, ChangeEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

function SearchBar({ onSubmit }: SearchBarProps) {
    const [query, setQuery] = useState<string>('');

    const notify = () => toast('no image to find, put text');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!query) {
            notify();
            return;
        }
        
        onSubmit(query);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <header className={css.box}>
            <form onSubmit={handleSubmit}>
                <input className={css.search}
                    value={query}
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit" className={css.button}>Search</button>
                <Toaster />
            </form>
        </header>
    );
}

export default SearchBar;