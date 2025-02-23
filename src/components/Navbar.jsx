import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path as needed
import SearchBar from "./SearchBar";
import Switch from "./SwitchBar"; // Ensure the correct path

function Navbar({ setSearchQuery, toggleTheme }) { // Add toggleTheme as a prop
  return (
    <nav>
      <div className="navbar-left">
        <img src={logo} alt="Movie Explorer Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <Link to="/">Home</Link>
        <SearchBar setSearchQuery={setSearchQuery} />
        <Link to="/watchlist">Watchlist</Link>
      </div>
      <div className="navbar-right">
        <Switch onChange={toggleTheme} /> {/* Use the toggleTheme function */}
      </div>
    </nav>
  );
}

export default Navbar;