import { Component } from "react";
import "./Navbarstyle.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo">CLARITY BRAVE</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link className="home" to="/">
              <i className="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li>
            <Link className="About" to="/About">
              <i className="fa-solid fa-circle-info"></i> About
            </Link>
          </li>
          <li>
            <Link className="Services" to="/Services">
              <i className="fa-solid fa-suitcase"></i> Services
            </Link>
          </li>
          <li>
            <Link className="Contact" to="/Contact">
              <i className="fa-solid fa-envelope-open"></i> Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
