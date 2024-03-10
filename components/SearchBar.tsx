'use client'

import React, { useState } from "react"
import { GenreFilter } from "./"
import Image from "next/image"
import { genres } from "@/constants"
import { useRouter } from "next/navigation"

const SearchButton = ({otherClasses}: {otherClasses: string}) => (
  <button type="submit" className={`-ml-6 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={20}
      height={20}
      className='object-contain'
    />
  </button>
)

const SearchBar = () => {
    const [filter, setFilter] = useState("");

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      if (filter === "" ) {

        return alert("Please provide some input");
     }
     updateSearchParams([filter.toLowerCase()])
    }

    const updateSearchParams = (genres: string[]) => {
      const searchParams = new URLSearchParams(window.location.search);

    if(genres.length > 0) {
      searchParams.set("genres", genres.join(","))
    } else {
      searchParams.delete("genres");
    }
     const newPathName = `${window.location.pathname}?${searchParams.toString()}` 
    
    router.push(newPathName);
    
  }  
   


  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
          <GenreFilter
           filter={filter}
           setFilter={setFilter}/>
          <SearchButton otherClasses="sm:hidden"/>
         
          <SearchButton otherClasses="max-sm:hidden"/>
        </div>
    </form>
  )
};

export default SearchBar