import { useState } from "react";

function UseState() {
  var initialVal = 0;
  var [num, setNum] = useState(initialVal);
  function handleDecrement() {
    setNum(num - 1);
  }
  return (
    <div>
      <h1>This is UseEffect exanple</h1>
      <h2>State initial value is {initialVal}</h2>
      <button onClick={handleDecrement}>-</button>
      <h3>Updating State: {num}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
      <br />
      <br />
      <button onClick={() => setNum(initialVal)}>Reset</button>
    </div>
  );
}

export default UseState;
