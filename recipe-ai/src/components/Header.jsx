import "./header.css";
import chefIcon from "../assets/chef-icon.png";
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <img className="icon" src={chefIcon} alt="chef icon" />
        <h1>AI Recipe Generator</h1>
      </nav>
    </>
  );
};

export default Header;
