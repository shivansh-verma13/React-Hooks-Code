import { useState, createContext } from "react";
import { Login } from "./Login";
import { User } from "./User";

export const AppContext = createContext(null);

export const UseContextHook = () => {
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <div>
        <h1>UseContext Hook</h1>
        <Login />
        <User />
      </div>
    </AppContext.Provider>
  );
};
