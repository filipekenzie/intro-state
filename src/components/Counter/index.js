import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const addNumber = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const subNumber = () => {
    setCounter("Filipe");
    console.log(counter);
  };

  return (
    <>
      <button onClick={addNumber}>Add 1</button>
      <button onClick={subNumber}>Sub 1</button>
    </>
  );
}

export default Counter;
