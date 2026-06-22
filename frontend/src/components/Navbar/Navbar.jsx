import "./Navbar.css";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { RiShieldUserFill } from "react-icons/ri";

const Navbar = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const goToAdmin = () => {
    if (onNavigate) {
      onNavigate("/admin");
      return;
    }

    window.location.href = "/admin";
  };

  const goToLink = (href) => (e) => {
    if (href.startsWith("#")) {
      setMenuOpen(false);
      return;
    }

    e.preventDefault();
    setMenuOpen(false);

    if (onNavigate) {
      onNavigate(href);
      return;
    }

    window.location.href = href;
  };

  const goHome = (e) => {
    e.preventDefault();
    setMenuOpen(false);

    if (onNavigate) {
      onNavigate("/");
      return;
    }

    window.location.href = "/";
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar-top">
        <div className="logo">
          <span className="logo-icon" aria-hidden="true">
            <RiShieldUserFill />
          </span>
          <h2>Mini CRM</h2>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className="nav-menu" id="primary-navigation">
        <ul className="nav-links">
          <li>
            <a className="nav-home-link" href="/" onClick={goHome}>
              Home
            </a>
          </li>
          <li>
            <a href="#features" onClick={goToLink("#features")}>
              Features
            </a>
          </li>
          <li>
            <a href="#contact" onClick={goToLink("#contact")}>
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-buttons">
          <button type="button" className="login-btn" onClick={goToAdmin}>
            Admin Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
