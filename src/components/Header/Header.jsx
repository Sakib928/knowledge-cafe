import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between border-b-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile}></img>
    </div>
  );
};

export default Header;
