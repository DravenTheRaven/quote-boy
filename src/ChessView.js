import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import 'chess.scss';

export default function ChessView() {
  let board = []
  let files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  for (let y in files) {
    board.push([])
    for (let i = 1; i <=8; i++) {
      board[y].unshift(
       
        <li className='chessSquare' key={`${files[y]}${i}`}>
          {`${files[y]}${i}`}
        </li>
       
      )
      
    }
    console.log(board[y])
  }
  
  console.log(board)
  return (
    <ul className='chessRow'>{board}</ul>
  )
}
