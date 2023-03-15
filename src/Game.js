import React, { useReducer } from "react";
import "./game.css";

function getStatus(squares,xIsNext){
    const winner = calculateWinner(squares);
        if(winner){
            return `Winner: ${winner}`
        } else if (squares.every(Boolean)) {
            return `Scratch: Cat's game`;
        } else {
            return `Next player: ${xIsNext ? "X" : "O"}`;
        }
}

function gameReducer(state, action){
    const{squares, xIsNext} = state;
    switch(action.type){
        case "SELECT_SQUARE": {
            const {square} = action; //squaresms index! 함수 selectSquare(square)인데 하단 버튼 클릭 시 selectSquare(index)함수 호출로 index와 동일
            //console.log(action) //{type: 'SELECT_SQUARE, square: 0}, {type: 'SELECT_SQUARE',square:1}

            const winner = calculateWinner(square);
                if (winner || squares[square]){
                    return state;
                }
            const squaresCopy = [...squares];
            squaresCopy[square] = xIsNext ? "X" : "O"
            return{
                squares: squaresCopy,
                xIsNext: !xIsNext
            };
        }
        default: {
            throw new Error(
                `Unhandled action type: $(action.type). Please fix it. Thank you`
            )
        }
    }
}

function Board(){
    //useReducer(reducer 업데이트 함수, state의 초기값)
    const [state, dispatch] = useReducer(gameReducer, {
        squares: Array(9).fill(null), xIsNext: true})
    
    const {squares, xIsNext} = state;

     function renderSquare(index) {
        return(
            <button className="square" onClick={() => selectSquare(index)}>
                {squares[index]}
            </button>
        )
    }

    function selectSquare(square){
        dispatch({type: "SELECT_SQUARE", square})
    }

      const status = getStatus(squares,xIsNext)

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );

    }


function Game(){

    return(
        <div className="game">
           <Board/>
        </div>
    )
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];  // 예) line[0] 은 요소 [0, 1, 2] 의미 
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {  // 예) squares: array(9).fill(null),
        return squares[a];
      }
    }
    return null;
  }

export default Game;