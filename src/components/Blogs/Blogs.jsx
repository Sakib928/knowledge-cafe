import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, updateReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="col-span-2 border-2 border-black">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          updateReadingTime={updateReadingTime}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
