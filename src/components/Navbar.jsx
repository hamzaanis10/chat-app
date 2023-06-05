import Img from "../img/img.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img src={Img} alt="" />
        <span>Hamza</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
