import { useContext } from "react";
import { AppContext } from "./UseContextHook";

export const User = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
};
