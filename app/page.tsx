import { BookCard, SearchBar, Book } from "@/components";
import { fetchBooks } from "@/utils";
import BookManagement from "@/components/BookManagment";

export default async function Home() {
  const allBooks = await fetchBooks();

  const isDataEmpty =
    !Array.isArray(allBooks) || allBooks.length < 1 || !allBooks;

  return (
    <main className="overflow-hidden">
      <BookCard />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Book store</h1>
          <p>The best book store designs for inspiration</p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__books-wrapper">
              {allBooks?.map((book) => (
                <Book key={book.id} book={book} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
      <BookManagement />
    </main>
  );
}
