import "./App.css";
import { UseStateHook } from "./Components/UseStateHook";
import { UseReducerHook } from "./Components/UseReducerHook";
import { UseEffectHook } from "./Components/UseEffectHook";
import { UseRefHook } from "./Components/UseRefHook";
import { UseLayoutEffectHook } from "./Components/UseLayoutEffectHook";
import { UseImperativeHandleHook } from "./Components/UseImperativeHandleHook/UseImperativeHandleHook";
import { UseContextHook } from "./Components/UseContextHook/UseContextHook";
import { UseMemoHook } from "./Components/UseMemoHook";
import { UseCallbackHook } from "./Components/UseCallbackHook/UseCallbackHook";

function App() {
  return (
    <>
      <UseStateHook />
      <UseReducerHook />
      <UseEffectHook />
      <UseRefHook />
      <UseLayoutEffectHook />
      <UseImperativeHandleHook />
      <UseContextHook />
      <UseMemoHook />
      <UseCallbackHook />
    </>
  );
}

export default App;
