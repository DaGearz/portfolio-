import { useState, useEffect } from "react";
import styles from "../modules.css/MainNav.module.css";
import useWindowWidth from "../hooks/useWindowWidth";

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
    <nav className={styles.MainNav}>
      <ul className={styles["nav-list"]}>
        {filteredNav.map((navItem) => {
          const itemClass = styles["nav-item"];

          if (!navItem.isSelect) {
            return (
              <li key={navItem.id} className={itemClass}>
                <a href={navItem.path} className={styles["nav-link"]}>
                  {navItem.name}
                </a>
              </li>
            );
          }

          // Filter dropdown options dynamically
          const filteredOptions = navItem.options?.filter((opt) => {
            if (isSmallScreen && opt.id === "O1") return false;
            if (isPhone && opt.id === "O1") return true; // show Contact in dropdown on phones
            return opt.id !== "O1"; // hide elsewhere
          });

          return (
            <li key={navItem.id} className={itemClass}>
              <select
                className={styles["nav-select"]}
                defaultValue="default"
                onChange={(e) => {
                  const path = e.target.value;
                  if (path !== "default") {
                    window.location.href = path;
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
