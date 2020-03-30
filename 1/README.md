## Display the location for each move in the format (col, row) in the move history list


Firstly we shall declare a function expression to display the columns and rows, this is done outside of any class:

```javascript
const getLocation = (pos) =>{

};
```

Now we need to add an array which will map the `cellNo` to a human readable format (columns and rows), and return the value:

```javascript
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
```

Following this handleClick() is to be modified to call this function and store the results in the `history[]` array:

```javascript
handleClick(i) {

              //* blah blah - nothing needs editing here *//

              this.setState({

                history: history.concat([{
                  currentPositions: getLocation(i),
                  squares: squares,
                }]),
                xIsNext: !this.state.xIsNext,
                stepNumber : history.length,
              });

          };
```

Finally in the `Game` class add the `currentPositions` variable to the `desc` declaration:

```javascript
const desc = (move) ?
"Go to move #" + move + " " + step.currentPositions:
"Go to game start"
```

###### ReactJS.org tic-tac-toe tutorial improvements No.1

links: |[1](../1)|[2](../2)|[3](../3)|[4](../4)|[5](../5)|[6](../6)|
---|---|---|---|---|---|---|
