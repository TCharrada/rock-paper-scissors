import { MouseEventHandler } from 'react';
import './Hand.css'

interface HandProps {
  image: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  disabled: boolean
}

function Hand(props: HandProps) {
  return (
    <>
      <button className='hand' onClick={props.onClick} disabled={props.disabled}>
          <img src={props.image} className="logo" alt="Hand option" />
        </button>
    </>
  )
}

export default Hand;