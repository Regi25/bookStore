'use client'

import { useState } from "react";
import Image from "next/image";
import { BookProps } from "@/types";
import CustomButton from "./CustomButton"
import  BookDetails  from "./BookDetails";
import { generateBookImageUrl } from "@/utils";

interface BookCardProps {
  book: BookProps;
}

const Book = ({book} : BookCardProps) => {
  const imageUrl = generateBookImageUrl(book);
  const {author, title, genres, plot, cover } = book;
  const authorFullName = `${author.first_name} ${author.last_name}`;
  const [isOpen, setIsOpen] = useState(false);
  return (
<div className="book-card group">
    <div className="book-card__content">
      <h2 className="book-card__content-title">
        {title} 
      </h2>
    </div>
      <p className='flex mt-6 text-[20px] leading-[2px] font-medium'>
      {authorFullName}
      </p>

    <div className="relative w-full h-40 my-3 object-contain">
      <Image src={imageUrl || '/bookCard.png'} alt="book" fill priority className="object-contain" unoptimized/>
   
  
    <div className="book-card__btn-container">
      <CustomButton
      title="View More"
      containerStyles="w-full py-[16px] rounded-full bg-primary-blue-100"
      textStyles="text-white text-[14px] leading-[17px] font-bold"
      handleClick={() => setIsOpen(true)}
      />
    </div>
  </div>
  <BookDetails 
    isOpen={isOpen} 
    closeModal={() => setIsOpen(false)} 
    book={book}
    imageUrl={imageUrl}/>
</div>
  )
}

export default Book