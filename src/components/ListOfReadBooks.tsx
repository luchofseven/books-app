import BookCard from './BookCard'
import Buttons from './Buttons'
import Title from './Title'
import { type IBooksToRead, type Book } from '../types'

export default function ListOfReadBooks ({
  books,
  booksToRead,
  setBooks,
  setBooksToRead
}: IBooksToRead): JSX.Element {
  const removeFromReading = (book: Book): void => {
    const newBooks = booksToRead.filter(
      (element) => element.ISBN !== book.ISBN
    )
    setBooksToRead(newBooks)
    setBooks([...books, book])
  }

  return (
    <>
      <div className="top" />
      <div className="mid">
        <div className="mid-table" />
        <div className="mid-table-shadow" />
        <section className="content-section-to-read">
          <div style={{ width: '100%', margin: '-3rem auto' }}>
            {booksToRead.length > 0 && <Title title="PENDIENTES DE LEER" />}
          </div>
          <div className="cards-container">
            {booksToRead.length > 0 && <Buttons direction="left" />}
            <div className="carousel-container">
              {booksToRead.length === 0 && (
                <h4 className="text">
                  Selecciona un libro de la lista superior para agregarlo a tus
                  libros favoritos de lectura.
                </h4>
              )}
              <div className="carousel">
                {booksToRead?.map((book) => (
                  <BookCard
                    key={book.ISBN}
                    book={book}
                    action={removeFromReading}
                  />
                ))}
              </div>
            </div>
            {booksToRead.length > 0 && <Buttons direction="right" />}
          </div>
        </section>
      </div>
    </>
  )
}
