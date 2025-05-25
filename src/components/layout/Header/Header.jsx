import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../ui/Button/Button";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <Link to="/" className="header__logo">
          <span className="header__logo-text">Todd Williams</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav header__nav--desktop">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`header__nav-link ${
                location.pathname === item.path
                  ? "header__nav-link--active"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="header__cta header__cta--desktop">
          <Link to="/resume">
            <Button variant="outline" size="sm">
              Resume
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="primary" size="sm">
              Get In Touch
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="header__menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`header__menu-icon ${
              isMenuOpen ? "header__menu-icon--open" : ""
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Mobile Navigation */}
        <nav
          className={`header__nav header__nav--mobile ${
            isMenuOpen ? "header__nav--mobile-open" : ""
          }`}
        >
          <div className="header__nav-content">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`header__nav-link ${
                  location.pathname === item.path
                    ? "header__nav-link--active"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="header__cta header__cta--mobile">
              <Link to="/resume">
                <Button variant="outline" size="md">
                  Resume
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="primary" size="md">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
