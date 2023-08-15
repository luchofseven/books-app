export interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: {
    name: string
    otherBooks: string[]
  }
}

export interface ITitle {
  title: string
}

export interface ISubtitle {
  availableBooks: number
  booksPending: number
}

export interface IBooksToRead {
  books: Book[]
  booksToRead: Book[]
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>
  setBooksToRead: React.Dispatch<React.SetStateAction<Book[]>>
}

export interface IFilter {
  setSelectedGenre: React.Dispatch<React.SetStateAction<string>>
  reset: () => void
}

export interface IBookCard {
  book: Book
  action: (book: Book) => void
}
