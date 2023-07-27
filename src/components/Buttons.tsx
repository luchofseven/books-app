import { LEFT_ARROW, RIGHT_ARROW } from '../icons/icons'

export default function Buttons ({ direction }: { direction: string }): JSX.Element {
  const className = `${direction === 'left' ? 'btn-left' : 'btn-right'}`
  const btn = direction === 'left' ? LEFT_ARROW : RIGHT_ARROW

  return (
    <button className={className}>{btn}</button>
  )
}
