import { type ISubtitle } from '../types'

export default function SubTitle ({
  availableBooks,
  booksPending
}: ISubtitle): JSX.Element {
  return (
    <div className="counter-books">
      <div>
        <span>{availableBooks}</span>
        <h4>libros disponibles</h4>
      </div>
      <div>
        <span>{booksPending}</span>
        <h4>en la lista de lectura</h4>
      </div>
    </div>
  )
}
