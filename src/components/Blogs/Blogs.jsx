import { useState } from "react";
import { useEffect } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="text-3xl">
      <h1>{blogs.map((blog) => blog.author)}</h1>
    </div>
  );
};

export default Blogs;
