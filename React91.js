import React, { useEffect, useState } from "react";
import axios from "axios";

function React91() {
  const [posts, setposts] = useState([]);
  const [inp, setinp] = useState();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setposts(response.data);
    });
  }, []);

  return (
    <div>
      <select>
        <option onChange={(e) => setinp(e.target.value)} value={inp}>
          All Value
        </option>
        {posts.map(({ id }) => {
          return (
            <option
              key={id}
              value={inp}
              onChange={(e) => setinp(e.target.value)}
            >
              {id}
            </option>
          );
        })}
      </select>
      {posts.map(({ id, title, body }) => {
        return (
          <div key={id}>
            <h1>
              {id}.{title}
            </h1>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default React91;
