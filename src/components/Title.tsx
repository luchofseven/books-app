import { type ITitle } from '../types'

export default function Title ({ title }: ITitle): JSX.Element {
  return (
    <header className="header-section">
      <h3>{title}</h3>
    </header>
  )
}
