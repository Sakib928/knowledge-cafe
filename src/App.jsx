import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (bookmark) => {
    console.log("bookmark item detected");
  };
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-8 gap-24">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
