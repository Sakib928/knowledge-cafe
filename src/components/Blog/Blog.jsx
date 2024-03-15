import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleAddToBookmark, updateReadingTime }) => {
  const {
    ["cover"]: image,
    author,
    author_img,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;
  return (
    <div className="my-8">
      <img src={image} className="w-full"></img>
      <div className="flex justify-between max-w-1/2">
        <div className="flex gap-2">
          <img src={author_img} style={{ width: "60px", height: "60px" }}></img>
          <div className="border-2 border-black">
            <h1 className="text-xl">{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex place-items-center gap-2">
          <span>{reading_time} min read</span>
          <button
            onClick={() => {
              handleAddToBookmark(blog);
            }}
          >
            <CiBookmark></CiBookmark>
          </button>
        </div>
      </div>
      <div className="my-6">
        <h1 className="text-3xl font-bold my-6">{title}</h1>
        <div className="flex gap-6 font-semibold">
          {hashtags.map((tag, idx) => (
            <p key={idx}># {tag}</p>
          ))}
        </div>
        <a
          onClick={() => {
            updateReadingTime(blog);
          }}
          className="text-lg font-semibold mt-6 border-b-2 border-blue-500 text-blue-700"
        >
          Mark as read
        </a>
      </div>
    </div>
  );
};

Blog.protoTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
