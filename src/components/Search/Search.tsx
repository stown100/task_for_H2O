import React from "react";
import styles from "./search.module.scss";
import { Props } from "./IProps";

const Search: React.FC<Props> = ({ searchParam, setSearchParam }) => {
  return (
    <div className={styles.Search}>
      <div className={styles.SearchContent}>
        <span className={styles.SearchContentCount}>2345</span>
        <span className={styles.SearchContentText}>Контактов</span>
        <input
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className={styles.SearchContentInput}
          placeholder="Поиск"
          type="search"
        />
      </div>
      <button className={styles.SearchButton}>Режим редактирования</button>
    </div>
  );
};

export default Search;
