import React from "react";

import styles from "./NavBar.scss";

const NavBar = ({ children }) => {
  return <div className={styles.navBar}>{children}</div>;
};

export default NavBar;
