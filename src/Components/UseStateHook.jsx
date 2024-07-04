import { useState } from "react";

export const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("Shivansh");

  const handleCountIncreament = () => {
    setCount(count + 1);
  };

  const handleOnChange = (event) => {
    const newInputVal = event.target.value;
    setInputVal(newInputVal);
  };

  return (
    <div>
      <div>
        <h1>UseState Hook</h1>
        <h1>{count}</h1>
        <button onClick={handleCountIncreament}>Increament</button>
      </div>
      <div>
        <input placeholder="Enter something..." onChange={handleOnChange} />
        {inputVal}
      </div>
    </div>
  );
};
