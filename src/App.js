import Player from '/src/player.jsx';
import GameBoard from '/src/Gameboard.jsx';
import './styles.css';
imprt {useState} from 'react';

export default function(){
  const[activePlayer,setActivePlayer]=useState('X');

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=>curActivePlayer===='X'?'0':'X')
  }
 
  return(
    <main>
    <div>
      <ol>
    <Player
     initialPlayerName="sam"
      symbol ="x"
      isActive={activePlayer==='X'}
     />   
      <Player
     initialPlayerName="nikhil"
     symbol ="x"
     isActive={activePlayer==='O'}
     />   
     </ol>
     <GameBoard
     onSelectSquare={handleSelectSquare}
     />
     GAME BOARD
    </div>
   
    </main>
  )
}