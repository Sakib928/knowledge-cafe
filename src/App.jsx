import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const updateReadingTime = (blog) => {
    console.log(blog.id);
    const newTime = readingTime + parseInt(blog.reading_time);
    setReadingTime(newTime);
    const remainingBookMarks = bookmarks.map((bookmark) => {
      return bookmark.id !== parseInt(blog.id);
    });
    setBookmarks(remainingBookMarks);
  };
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-8 gap-24">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          updateReadingTime={updateReadingTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
