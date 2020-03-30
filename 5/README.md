## When someone wins, highlight the three squares that caused the win

Edit the `calculateWinner()` function to return the three winning squares:

```javascript
for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i];
  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    return [a , b, c];
  }
```

Change the if statement, which assigns `status`, to check `winner[0]`:

```javascript
if (winner){
  status = "Winner: " + current.squares[winner[0]];
}
```

create variable `winningSquares` and pass the three winning `cellNo` to the `Board` if game is finished:

```javascript
<Board
  winningSquares={winner ? winner : ""}
  squares={current.squares}
  onClick={(i) => this.handleClick(i)}
/>
```

In `renderSquare()` check if this square is included in the `winner` array, and pass to `Square`:

```javascript
return (
  <Square
    isWinning={this.props.winningSquares.includes(i)}
    key={i}
    value={this.props.squares[i]}
    onClick={() => this.props.onClick(i)}
    />
);
```

Finally for the .js file the button representing the square shall be given a `className` of `"square-won"` if `isWinning` is truthy:

```javascript
return(
  <button className={"square " +  (props.isWinning ? "square--won" : "")}
          onClick={props.onClick}
  >
    {props.value}
  </button>
);
```

As we are relying on the css file to change the colour we should add a class of `"square--won"` with whatever background you like (I chose light green because it's my favourite):

```javascript
.square--won {
  background-color: lightgreen;
}
```

links: |[1](../1)|[2](../2)|[3](../3)|[4](../4)|[5](../5)|[6](../6)|
---|---|---|---|---|---|---|

###### ReactJS.org tic-tac-toe tutorial improvements No.5
