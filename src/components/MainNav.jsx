import { useState, useEffect } from "react";
import styles from "../modules.css/MainNav.module.css";
import stylesHeader from "../modules.css/Header.module.css";

// 👇 ADD THIS
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function MainNav({ navVariables }) {
  const width = useWindowWidth();
  const isSmallScreen = width < 1060;

  const filteredNav = navVariables.filter((item) => {
    if (isSmallScreen && (item.id === "L5" || item.id === "L6")) return false;
    return !(width >= 1060 && item.isHideOnLarge);
  });

  return (
    <nav className={styles.MainNav}>
      <ul className={styles["nav-list"]}>
        {filteredNav.map((navItem) => {
          const itemClass = `${styles["nav-item"]} ${
            navItem.isHideOnLarge ? stylesHeader.hideOnLarge : ""
          }`;

          if (!navItem.isSelect) {
            return (
              <li key={navItem.id} className={itemClass}>
                <a href={navItem.path} className={styles["nav-link"]}>
                  {navItem.name}
                </a>
              </li>
            );
          }

          const filteredOptions = navItem.options?.filter((opt) =>
            isSmallScreen ? opt.id !== "O1" : true
          );

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
