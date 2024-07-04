import { useEffect } from "react";

export const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("Function was called");
  }, [returnComment]);
  return <div>{returnComment("Shivansh")}</div>;
};
