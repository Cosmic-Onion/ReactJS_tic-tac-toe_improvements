## Add a toggle button that lets you sort the moves in either ascending or descending order

Start by adding a variable `reverseList` in the `Game` constructor:

```javascript
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
```

Now add a button to the return function of game, this will call a function `reverseOrder()`:

```javascript
<div className="game-info">
  <div>{status}</div>
  <button className="button" onClick={() => this.reverseOrder()}>
    Move order {this.state.reverseList}
  </button>
```

Time to create the `reverseOrder()` function. this toggles the variable `reverseList` between `undefined` and `reversed`.

Ordered list numbers can be flipped by declaring `<ol "reversed">`. This is the reason for not having `reverseList` be a simple boolean.

Now to have this take effect, edit the ordered list so that it's numbers and the values inside them are reversed:

```javascript
<ol reversed={this.state.reverseList}>{this.state.reverseList ? moves.reverse() : moves}</ol>
```

(if you notice other differences from the last example, you're very observent well done! These are due to me moving on from this question and then overwriting with changes that aren't necessary when I came back to it.)

links: |[1](../1)|[2](../2)|[3](../3)|[4](../4)|[5](../5)|[6](../6)|

###### ReactJS.org tic-tac-toe tutorial improvements No.4
