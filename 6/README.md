## When no one wins, display a message about the result being a draw

Add an else if statement to see if `history.length === 10` after the check if a player has won. If so then the game must have been a draw as noone won but all the squares are full:

```javascript
let status;
if (winner){
  status = "Winner: " + current.squares[winner[0]];
} else if (history.length === 10) {
  status = "Draw! Everyone wins (kinda)"
}
else {
  status = "Next player: " + (this.state.xIsNext ? "X" : "O");
}
```

The length is 10 not 9 as the first (also the 0th value) are all `null`.

links: |[1](../1)|[2](../2)|[3](../3)|[4](../4)|[5](../5)|[6](../6)|
---|---|---|---|---|---|---|

###### ReactJS.org tic-tac-toe tutorial improvements No.6
