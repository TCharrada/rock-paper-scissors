import { useState } from 'react'
import rockOption from './assets/icon-rock.svg'
import paperOption from './assets/icon-paper.svg'
import scissorsOption from './assets/icon-scissors.svg'
import './App.css'
import Hand from './components/Hand'
import RulesDialog from './components/Rules'



function App() {
  const Choices = [rockOption, paperOption, scissorsOption]
  const [userScore, setUserScore] = useState(0);
  const [userHand, setUserHand] = useState('');
  const [computerHand, setComputerHand] = useState('');
  const [showHome, setShowHome] = useState(true);
  const [message, setMessage] = useState('');
  const [showPlayAgain, setShowPlayAgain] = useState(false);
  const [showGameOnGoing, setShowGameOnGoing] = useState(false);
  const [openRulesDialog, setOpenRulesDialog] = useState(false);
 
  const playeGame = (newUserHand: string) => {
    setShowHome(false)
    setUserHand(newUserHand)
    setShowGameOnGoing(true)
    const newComputerHand = Choices[Math.floor(Math.random() * Choices.length)]
    setComputerHand(newComputerHand)
    
    switch (newUserHand) {
      case rockOption:
        if (newComputerHand === paperOption) {
          setMessage('You loose')
        } else if (newComputerHand === scissorsOption) {
          setUserScore((userScore) => userScore+1)
          setMessage('You win')
        } else {
          setMessage('Draw')
        }
        setShowPlayAgain(true)
        
        break;
      
      case paperOption:
        if (newComputerHand === scissorsOption) {
          setMessage('You loose')
        } else if (newComputerHand === rockOption) {
          setUserScore((userScore) => userScore+1)
          setMessage('You win')
        } else {
          setMessage('Draw')
        }
        setShowPlayAgain(true)
        
        break;
        
      case scissorsOption:
        if (newComputerHand === rockOption) {
          setMessage('You loose')
        } else if (newComputerHand === paperOption) {
          setUserScore((userScore) => userScore+1)
          setMessage('You win')
        } else {
          setMessage('Draw')
        }
        setShowPlayAgain(true)
        
        break;
    
      default:
        break;
    }
  }
  const handleOnPlayAgainClick = () => {
    setShowHome(true)
    setShowPlayAgain(false)
    setShowGameOnGoing(false)
    setMessage('Choose your hand')
  }

  const handleShowRulesDialog = () => {
    setOpenRulesDialog(true)
  }

  const handleCloseRulesDialog = () => {
    setOpenRulesDialog(false);
  };
  
  return (
    <>
      <h1>Rock + Paper + Scissor</h1>
      <p className="read-the-docs">
        YOUR SCORE IS {userScore}
      </p>
      {showHome && 
        <div>
          <Hand image={rockOption} onClick={() => playeGame(rockOption)} disabled={false}/>
          <Hand image={paperOption} onClick={() => playeGame(paperOption)} disabled={false}/>
          <Hand image={scissorsOption} onClick={() => playeGame(scissorsOption)} disabled={false}/>
        </div>
      }

      {showGameOnGoing && 
        <div>
          <Hand image={userHand} disabled={true}/>
          {computerHand && <Hand image={computerHand} disabled={true}/>}
        </div>
      }

      <h2>{message}</h2>
      

      {showPlayAgain && <button onClick={handleOnPlayAgainClick} className='card play-again'>
          PLAY AGAIN
        </button>}

        <button onClick={handleShowRulesDialog} className='rules card'>
          RULES
        </button>
        
        <RulesDialog open={openRulesDialog} handleClose={handleCloseRulesDialog} />
        
    </>
  )
}

export default App
