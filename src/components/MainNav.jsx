import styles from "../modules.css/MainNav.module.css";
import stylesHeader from "../modules.css/Header.module.css";

export default function MainNav({ navVariables }) {
  return (
    <nav className={styles.MainNav}>
      <ul className={styles["nav-list"]}>
        {navVariables.map((navItem) => {
          const hideClass = navItem.isHideOnLarge ? stylesHeader.hideOnLarge : "";
          const itemClass = `${styles["nav-item"]} ${hideClass}`;

          return !navItem.isSelect ? (
            <li key={navItem.id} className={itemClass}>
              <a href={navItem.path} className={styles["nav-link"]}>
                {navItem.name}
              </a>
            </li>
          ) : (
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
                {navItem.options?.map((option, index) => (
                  <option key={index} value={option.path}>
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
