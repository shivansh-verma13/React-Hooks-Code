import axios from "axios";
import { useEffect, useState, useMemo } from "react";

// UseMemo is for optimization
export const UseMemoHook = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setData(response.data);
    };
    getData();
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("This was computed");
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
      <h1>UseMemo Hook</h1>
      <h5>{getLongestName}</h5>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
};
