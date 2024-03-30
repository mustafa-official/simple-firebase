import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default NavBar;
