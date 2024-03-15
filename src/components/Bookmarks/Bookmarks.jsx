import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div>
      <h1>Spent time on read: {readingTime}</h1>
      <h2 className="col-span-1 border-2 border-black text-3xl">
        Bookmarks: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => {
        return <p key={idx}>{bookmark.title}</p>;
      })}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.object,
};
export default Bookmarks;
