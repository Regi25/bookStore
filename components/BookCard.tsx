"use client";
import Image from "next/image";
import { CustomButton } from ".";

const BookCard = () => {
  return (
    <div className="bookCard">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="bookCard__title">Discover Worlds Between the Pages</h1>

        <p className="bookCard__subtitle">
          {" "}
          Welcome to our Book store, where every book is a gateway to adventure.
          Whether you’re seeking an escape from reality or a deeper
          understanding of the world around you, our curated selection has
          something to offer. Come in and lose yourself in the magic of
          literature{" "}
        </p>
      </div>
      <div className="bookCard__image-container">
        <div className="bookCard__image">
          <Image
            src="/bookCard.png"
            alt="bookCard"
            fill
            className="object-container"
          />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
