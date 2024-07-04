import { useState, forwardRef, useImperativeHandle } from "react";

export const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button>Button from Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});


// Set the display name for debugging purposes
Button.displayName = 'Button';