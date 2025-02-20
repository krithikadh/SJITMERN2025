import { useState,useEffect } from "react";
import axios from "axios";

const UseEffectAPI = () => {
  var [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log("Couldn't reach the API", err));
  }, []);
  return (
    <div>
      <h1>This is useEffect example with API call</h1>
      <h2>
        We are going to fetch data from JSONPlaceholder and display the data
      </h2>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
      <button onClick={()=>{console.log("Button Clicked!!!")}}>Hello</button>
    </div>
  );
};
export default UseEffectAPI;