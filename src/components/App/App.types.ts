
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
    image: Image
    onClick: (image: Image) => void;
}