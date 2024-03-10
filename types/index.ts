import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    isDisabled?: boolean;
}
export interface GenreFilterProps {
    filter: string;
    setFilter: (filter: string) => void;
}

export interface Author {
    first_name: string;
    last_name: string;
  }
  
export interface BookProps {
    author: Author;
    title: string;
    pages: number;
    genres: string[]; 
    rating: number;
    plot: string;
    cover: string;
    url: string;
}