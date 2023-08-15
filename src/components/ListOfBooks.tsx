import { useState, useEffect } from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import Filter from './Filter'
import ListOfReadBooks from './ListOfReadBooks'
import Buttons from './Buttons'
import BookCard from './BookCard'
import { getBooks } from '../services/data'
import { type Book } from '../types'

export default function ListOfBooks (): JSX.Element {
  const [selectedGenre, setSelectedGenre] = useState<string | 'All'>('All')
  const [books, setBooks] = useState<Book[]>(() => {
    const booksInLS = window.localStorage.getItem('books-storage')
    if (booksInLS !== null) {
      const parsed = JSON.parse(booksInLS)
      return parsed
    }

    return []
  })

  const [booksToRead, setBooksToRead] = useState<Book[]>(() => {
    const booksToReadInLS = window.localStorage.getItem(
      'books-to-read-storage'
    )
    if (booksToReadInLS !== null) {
      const parsed = JSON.parse(booksToReadInLS)
      return parsed
    }

    return []
  })

  const addToRead = (book: Book): void => {
    const newBooks = books.filter((element) => element.ISBN !== book.ISBN)
    setBooks(newBooks)
    setBooksToRead([...booksToRead, book])
  }

  const reset = (): void => {
    setBooks([])
    setBooksToRead([])
  }

  useEffect(() => {
    const getBooksData = async (): Promise<void> => {
      try {
        const bookList = await getBooks()
        setBooks(bookList)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    books.length === 0 &&
      booksToRead.length === 0 &&
      getBooksData().catch((error) => {
        console.error('Error:', error)
      })
  }, [reset])

  useEffect(() => {
    window.localStorage.setItem('books-storage', JSON.stringify(books))
    window.localStorage.setItem(
      'books-to-read-storage',
      JSON.stringify(booksToRead)
    )
  }, [books, booksToRead])

  const filteredBooks =
    selectedGenre === 'All'
      ? books
      : books.filter((book) => book.genre === selectedGenre)

  return (
    <>
      <Title title="LIBROS DISPONIBLES" />
      <Filter setSelectedGenre={setSelectedGenre} reset={reset} />
      <SubTitle
        availableBooks={filteredBooks.length}
        booksPending={booksToRead.length}
      />
      <div className="top" />
      <div className="mid">
        <div className="mid-table" />
        <div className="mid-table-shadow" />
        <section className="content-section">
          <div className="cards-container">
            {books.length !== 0 && <Buttons direction="left" />}
            <div className="carousel-container">
              {books.length === 0 && (
                <h4 className="text">No hay libros disponibles.</h4>
              )}
              <div className="carousel">
                {books.length > 0 &&
                  filteredBooks.map((book) => (
                    <BookCard key={book.ISBN} book={book} action={addToRead} />
                  ))}
              </div>
            </div>
            {books.length !== 0 && <Buttons direction="right" />}
          </div>
        </section>
      </div>
      <div className="bottom">
        <ListOfReadBooks
          books={books}
          booksToRead={booksToRead}
          setBooks={setBooks}
          setBooksToRead={setBooksToRead}
        />
      </div>
    </>
  )
}
