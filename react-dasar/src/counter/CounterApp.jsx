import React, { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show, setShow] = useState(true);
  function handleChange(e) {
    setShow(e.target.checked);
  }
  return (
    <div>
      {/* <Counter name={"First"} />
      {show && <Counter name={"Second"} />} */}
      {/* {show ? <Counter name={"First"} /> : <Counter name={"Second"} />} */}
      {show ? (
        <div>
          <Counter name={"First"} />
        </div>
      ) : (
        <section>
          <Counter name={"Second"} />
        </section>
      )}
      <input type="checkbox" checked={show} onChange={handleChange} id="show" /> Show Counter
    </div>
  );
}
