import { BookProps } from "@/types";

export async function fetchBooks() {
    const headers = {
		'X-RapidAPI-Key': '337bee1550mshc927f47f5812d00p1c4e34jsn6687d7c9a168',
		'X-RapidAPI-Host': 'books-api7.p.rapidapi.com'
	}
    const response = await fetch('https://books-api7.p.rapidapi.com/books/find/genres?genres%5B%5D=fantasy&genres%5B%5D=fiction&genres%5B%5D=Classics', {
        headers: headers,
    });
const result = await response.json();

return result;
}


export const generateBookImageUrl = (book: BookProps, angle?: string) => {
    if (!book.cover) {
      return;
    }
  
    const { cover } = book;
    const url = new URL(cover);
    if (angle) {
      url.searchParams.set("angle", angle);
    }
    return url.toString();
  };


