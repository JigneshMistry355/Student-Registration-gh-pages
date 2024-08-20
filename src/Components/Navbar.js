import MyLogo from "./MyLogo";
import NavButton from "./NavButton";
import "./TextInput.css";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <MyLogo text="MyLOGO" />
      </div>

      <div className="nav-bar-div">
        <div className="nav-button">
          <NavButton name="Home" to="/" />
        </div>
        <div className="nav-button">
          <NavButton name="Table" to="/student-table" />
        </div>
      </div>
    </div>
  );
}
