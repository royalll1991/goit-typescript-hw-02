
export interface Image {
    id: string;
    urls: {
        small: string;
        regular: string;
    };
    description: string;
    likes: number;
}

export interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export interface Props {
    images: Image[];
    onClick: (image: Image) => void;
}

export interface ImageProps {
    small: string;
    description: string;
    likes: number;
    onClick: (image: {small: string; description: string; likes: number;}) => void;
}