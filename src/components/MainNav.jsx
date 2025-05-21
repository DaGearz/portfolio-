import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../modules.css/MainNav.module.css";
import useWindowWidth from "../hooks/useWindowWidth";
import "../index.css";

export default function MainNav({ navVariables }) {
  const width = useWindowWidth();
  const isSmallScreen = width < 1060;
  const isPhone = width <= 650;

  // Filter top-level nav items
  const filteredNav = navVariables.filter((item) => {
    if (isPhone && item.id === "L4") return false; // hide Contact
    if (isSmallScreen && (item.id === "L5" || item.id === "L6")) return false;
    if (!isSmallScreen && item.isHideOnLarge) return false;
    return true;
  });

  return (
    <nav className={`bColor1 ${styles.MainNav}`}>
      <ul className={styles["nav-list"]}>
        {filteredNav.map((navItem) => {
          const itemClass = styles["nav-item"];

          if (!navItem.isSelect) {
            return (
              <li key={navItem.id} className={itemClass}>
                <Link to={navItem.path} className={styles["nav-link"]}>
                  {navItem.name}
                </Link>
              </li>
            );
          }

          // Filter dropdown options dynamically
          const filteredOptions = navItem.options?.filter((opt) => {
            // Always include Resume (O2) in dropdown
            if (opt.id === "O2") return true;

            // Include Contact (O1) in dropdown when on small screens
            if (isSmallScreen && opt.id === "O1") return true;

            return false; // Hide other options
          });

          return (
            <li key={navItem.id} className={itemClass}>
              <select
                className={styles["nav-select"]}
                defaultValue="default"
                onChange={(e) => {
                  const path = e.target.value;
                  if (path !== "default") {
                    // React-router way:
                    window.location.hash = `#${path}`;
                  }
                }}
              >
                <option value="default" disabled>
                  {navItem.name}
                </option>
                {filteredOptions.map((option) => (
                  <option key={option.id} value={option.path}>
                    {option.name}
                  </option>
                ))}
              </select>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
