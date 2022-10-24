import React from "react";
import { useSelector } from "react-redux";

import { CAR_BODY_TYPES, VEHICLE_CONDITION } from "utils/types/types";

import styles from "./SearchBar.scss";

const SearchBar = () => {
  const { searchOpenMobile } = useSelector((state) => state.ui);

  return (
    <div className={styles.searchBar}>
      <div
        className={
          styles[searchOpenMobile ? "searchBarActive" : "searchBarInactive"]
        }
      >
        <div className={styles.header}>
          <h2>Filter your choice</h2>
        </div>
        <div className={styles.inlineContainer}>
          {VEHICLE_CONDITION.map(({ id, name }) => (
            <span key={id} className={styles.chip}>
              {name}
            </span>
          ))}
        </div>
        <div className={styles.chipContainer}>
          {CAR_BODY_TYPES.map(({ id, name, imgPath }) => (
            <div key={id} className={styles.chipWithLabel}>
              <span className={styles.chip}>
                <img src={imgPath} alt={name} />
              </span>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
