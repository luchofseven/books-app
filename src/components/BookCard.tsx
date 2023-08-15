import { type IBookCard } from '../types'

export default function BookCard ({ book, action }: IBookCard): JSX.Element {
  const { cover, title } = book

  return (
    <div className="book animate__animated animate__backInRight">
      <img src={cover} alt={title} />
      <div className="book-left-shadow" />
      <div className="book-right-shadow" />
      <div className="book-background-shadow" />
      <button
        onClick={() => {
          action(book)
        }}
        className="book-btn"
      />
    </div>
  )
}
