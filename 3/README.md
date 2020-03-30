## Rewrite Board to use two loops to make the squares instead of hardcoding them

First we want to get rid of the original original `createBoard()` so go ahead an delete that.

Now redeclare the `createBoard()` function with two parameters `col` and `row`. Within the function create a constant `board` and a variable `cellNo`.

```javascript
createBoard(col, row){

  const board = [];
  let cellNo = 0;

  return board;
  }
```

Create the nested forloops:

```javascript
createBoard(col, row){

  const board = [];
  let cellNo = 0;

  for (let i = 0; i < row ; i++) {

    for (let y = 0; y < col; y++) {

    }

  }
  return board;
  }
```

Add a constant `columns` to the first loop, declaring it here stops the array becoming too large.

In the second loop push the value passed from `renderSquare()` for the specific `cellNo` to `columns`.

Now beyond the second loop push a render formatted value to `board`:

```javascript
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
```

For react to actually show anything we need to edit the `render()` function to call `createBoard()`:

```javascript
render() {
    return <div>{this.createBoard(3,3)}</div> ;
  }
}
```

links: |[1](../1)|[2](../2)|[3](../3)|[4](../4)|[5](../5)|[6](../6)|
---|---|---|---|---|---|---|

###### ReactJS.org tic-tac-toe tutorial improvements No.3
