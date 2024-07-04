import { useRef } from "react";

export const UseRefHook = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    // console.log(inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Use Ref Hook</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Heading</button>
    </div>
  );
};
