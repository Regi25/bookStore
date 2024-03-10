"use client"

import React, { useState } from 'react';
import UserProvider from './UserProvider';
import AddBookForm from './AddBookForm';
import CustomButton from './CustomButton';

const BookManagement: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleButtonClick = () => {
    setIsInputVisible(true);

    if (userId.trim() !== "") {
      if (userId === "1") {
        setIsAuthorized(true);
        setIsError(false);
      } else {
        setIsAuthorized(false);
        setIsError(true);

        setTimeout(() => {
          setIsError(false);
          setUserId(""); 
        }, 3000);
      }
    }
  };

  return (
    <div>
      <UserProvider>
        {isInputVisible && (
          <input 
            type="text" 
            value={userId} 
            onChange={(e) => setUserId(e.target.value)} 
            placeholder="Enter user ID" 
          />
        )}
        <CustomButton 
          title="Check ID" 
          containerStyles='rounded-full bg-white min-w-[150px]'
          handleClick={handleButtonClick} 
        />
        {isAuthorized && <AddBookForm />}
        {isError && <p>You are not authorized to access this feature.</p>}
      </UserProvider>
    </div>
  );
};

export default BookManagement;