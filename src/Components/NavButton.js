import { Link } from "react-router-dom";
import "./TextInput.css";

export default function NavButton({ name, to }) {
  return (
    <Link className="link-styles" to={to}>
      {name}
    </Link>
  );
}
