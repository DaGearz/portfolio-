import styles from "../modules.css/MainNav.module.css";

export default function MainNav({ navVariables }) {
  return (
    <nav className={styles.MainNav}>
      <ul className={styles["nav-list"]}>
        {navVariables.map((navItem) =>
          !navItem.isSelect ? (
            <li key={navItem.id} className={styles["nav-item"]} id= {navItem.id}>
              <a href={navItem.path} className={styles["nav-link"]}>
                {navItem.name}
              </a>
            </li>
          ) : (
            <li key={navItem.id} className={styles["nav-item"]}id= {navItem.id}>
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
                  <option key={index} value={option.path} id={navItem.options.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
