import axios from "axios";
import { useEffect, useState } from "react";

export const UseEffectHook = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setData(response.data[0].email);
      console.log("API is called");
    };
    getData();
  }, []);
  return (
    <div>
      <h1>Use Effect</h1> {data}
    </div>
  );
};
