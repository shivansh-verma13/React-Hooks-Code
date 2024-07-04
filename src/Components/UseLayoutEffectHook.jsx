import { useEffect, useLayoutEffect, useRef } from "react";

export const UseLayoutEffectHook = () => {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  useEffect(() => {
    inputRef.current.value = "Shivansh";
  }, []);

  return (
    <div>
      <h1>Use UseLayoutEffectHook</h1>
      <input ref={inputRef} value="Hello" readOnly/>
    </div>
  );
};

// UseEffect is called when the stuff is shown to us.
// UseLayoutEffect is called before that.
