import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavItem.scss";

const NavItem = ({ children, redirectPath, onClick }) => {
  return (
    <span className={styles.navItem}>
      <Link className={styles.navItemLink} to={redirectPath} onClick={onClick}>
        {children}
      </Link>
    </span>
  );
};

export default NavItem;
