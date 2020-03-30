## Bold the currently selected item in the move list

We need to be able to check if the current button in the moves list has been selected. Begin by adding a constant within the `moves` function expression:

```javascript
const moves = history.map((step, move) =>{
  const boldButton = move === this.state.stepNumber ? "button--bold" : "";
  const desc = move ?
```

Now we see that the value of `boldButton` is `button--bold` when `move` is equal to the `stepNumber`. To make this have any effect on our code we need to change the `className` of the move buttons:

```javascript
return (
  <li key={move}>
  <button className={`${boldButton} button`} onClick={() => this.jumpTo(move)}>{desc}
  </button>
  </li>
);
```

The attached index.css file will now apply the style `button--bold` when `boldButton` is truthy (strange word tbh (true is shorter and doesn't require an internet search for most people)).
Our index.css file needs updating, add this to the end of the css file so it knows what to do when the style is changed:

```
.button--bold {
  font-weight: bold;
}
```

links: |[1](../1)|[2](../2)|[3](../3)|[4](../4)|[5](../5)|[6](../6)|
---|---|---|---|---|---|---|

###### ReactJS.org tic-tac-toe tutorial improvements No.2
