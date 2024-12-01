import './Tictac.css'
import {useState} from 'react'
const TicTac = ()=>{
    const[board,setBoard] = useState(Array(9).fill(null))
    const[isXturn,setisXturn] = useState(true)
    const[gameover,setgameover] = useState(false)
    const[winner,setWinner] = useState('')
    


    //handleClick
    const handleClick= (i)=>{
        if(board[i]||gameover){
            return
        }
        if(isXturn){
            const newBoard = [...board];
            newBoard[i] = 'X'
            setBoard(newBoard)
            setisXturn(false)
            setWinner(calculateWinner(newBoard))

        }
        else{
            const newBoard = [...board];
            newBoard[i] = 'O'
            setBoard(newBoard)
            setisXturn(true)
            setWinner(calculateWinner(newBoard))
        }    
    }
    const calculateWinner =(board)=>{
        const winning_patterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,6,8],[0,4,8],[2,4,7]]
        for(let i=0;i<8;i++){
            
            const [a,b,c] = winning_patterns[i]
            
            if(board[a]&&board[a]===board[b]&&board[a]===board[c]){
                console.log("win")
                setgameover(true)
                return board[a]
                    
            }
        }
        return null
    }
    return(
        <div className = 'gamebg'>
            <h1>TIC-TAC-TOE</h1>
            <h3>Player Turn {isXturn?"X" :"O"}</h3>
            <div className="board">
                {board.map((boxes,i)=>(
                    <div className="boxes" onClick={()=>handleClick(i)}>
                        {(boxes==='X')?
                            <div className="x">X</div>
                        :(boxes==='O')?
                            <div className="o">O</div>:""
                        }
                    </div>
                ))}
                
            </div>
            {gameover?<p>GameOver & Winner is {winner}</p>:""}
        </div>
    )
}
export default TicTac;