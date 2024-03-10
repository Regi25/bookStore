"use client"

import React, { useContext, useState } from "react";
import UserProvider, {UserContext} from "./UserProvider";
import CustomButton from "./CustomButton";
const AddBookForm : React.FC = () => {
    const { isAdmin } = useContext(UserContext);
    const [showNotification, setShowNotification] = useState(false);

    if (!isAdmin) {
      return null;
    }
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genres, setGenres] = useState<string[]>([]);
  const [cover, setCover] = useState("");

  const handleSubmit = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000); 
  };

return (
<div className="book-card group">
   <h2 className="book-card__content-title">
    Add book section
    </h2>
 <div className="searchbar">
   <div className="searchbar__item">
    <form onSubmit={handleSubmit}>
     <input
        className="w-full py-[16px] bg-primary-grey sm:px-5"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
     <input
        className="w-full py-[16px] bg-primary-grey sm:px-5"
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
     />
     <input
        className="w-full py-[16px] bg-primary-grey sm:px-5"
        type="text"
        placeholder="Genres"
        value={genres.join(", ")}
        onChange={(e) => setGenres(e.target.value.split(",").map((genre) => genre.trim()))}
     />
      
     <input
        className="w-full py-[16px] bg-primary-grey sm:px-5"
        type="text"
        placeholder="Cover"
        value={cover}
        onChange={(e) => setCover(e.target.value)}
     />
    
        <CustomButton
        title="Add book"
        containerStyles="w-full py-[16px] rounded-full bg-primary-blue-100"
        textStyles="text-white text-[14px] leading-[17px] font-bold"
        handleClick={handleSubmit}
        />
    </form>
   
   </div>
 </div>
 {showNotification && (
        <div className="padding-x bg-primary-grey ">
         We are currently working on the Add Book section. Thank you for your patience.
        </div>
      )}
</div>

  );
};

const AddBookWithProvider: React.FC = () => (
 <UserProvider>
    <AddBookForm />
 </UserProvider>
);
  
export default AddBookWithProvider;