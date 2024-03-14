import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="text-3xl col-span-2 border-2 border-black">
      <h2>Blogs section : {blogs.length}</h2>
      <Blog></Blog>
    </div>
  );
};

export default Blogs;
