import "./navbar.css";
import navIcon from "../assets/nav-icon.png";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <h1>To-Do-List</h1>
        <img src={navIcon} alt="to-do-list-icon" className="icon" />
      </nav>
    </>
  );
};

export default Navbar;
