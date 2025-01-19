import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  //#inisialisasi counter dengan 0

  function handleClick() {
    setCounter(counter + 1);
    //# nilai/value counter diubah dengan function setCounter
  }
  return (
    <div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      {/*nilai counter yang sudah diubah akan ditampilkan  */}
      <h1>Counter: {counter}</h1>
    </div>
  );
}
