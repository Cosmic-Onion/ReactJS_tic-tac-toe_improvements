import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return(
    <button className="square"  onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          key={i}
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
          />
      );
    }

    createBoard(col, row){

      const board = [];
      let cellNo = 0;

      for (let i = 0; i < row ; i++) {
        const columns = [];
        for (let y = 0; y < col; y++) {
        columns.push(this.renderSquare(cellNo++));
          }
          board.push(<div key={i} className="board-row">{columns}</div>);
        }
      return board;
      }


  render() {

      return <div>{this.createBoard(3,3)}</div> ;
    }
  }

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history:  [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
      reverseList: "",
    };
  }

  handleClick(i) {
                const history = this.state.history.slice(0, this.state.stepNumber + 1);
                const current = history[history.length - 1];
                const squares = current.squares.slice();
                if (calculateWinner(squares) || squares[i]) {
                   return;
                 }
                squares[i] = this.state.xIsNext ? "X" : "0";
                this.setState({

                  history: history.concat([{
                    currentPositions: getLocation(i),
                    squares: squares,
                  }]),
                  xIsNext: !this.state.xIsNext,
                    stepNumber : history.length,
                });

            };

  jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
    });
  }

  reverseOrder() {
    this.setState({
      reverseList : this.state.reverseList === "" ? "reversed" : "",

    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) =>{
      const boldButton = move === this.state.stepNumber ? "button--bold" : "";

      const desc = (move) ?
      "Go to move #" + move + " " + step.currentPositions:
      "Go to game start"


      return (
        <li key={move}>
        <button className={`${boldButton} button`} onClick={() => this.jumpTo(move)}>{desc}
        </button>
        </li>
      );
    }
  );
    let status;
    if (winner){
      status = "Winner: " + current.squares[winner[0]];
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }



    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button className="button" onClick={() => this.reverseOrder()}>
            Move order {this.state.reverseList}
          </button>
          <ol reversed={this.state.reverseList}>{this.state.reverseList ? moves.reverse() : moves}</ol>
        </div>
      </div>
    );
  }
}
const getLocation = (pos) =>{
let positions =
  ["Col 1, Row 1",
  "Col 2, Row 1",
  "Col 3, Row 1",
  "Col 1, Row 2",
  "Col 2, Row 2",
  "Col 3, Row 2",
  "Col 1, Row 3",
  "Col 2, Row 3",
  "Col 3, Row 3",
];

return positions[pos];
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a , b, c];
    }
  }
  return null;
}



// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
