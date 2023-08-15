import { library } from '../mock_api/books.json'
import { type Book } from '../types'

const books = library.map((book) => book.book)

export const getBooks = async (): Promise<Book[]> => {
  return books
}

export const getGenres = async (): Promise<string[]> => {
  const books = await getBooks()
  const genresMap = books.map((book) => book.genre)
  const set = new Set(genresMap)
  const gernes = [...set]

  return gernes
}
