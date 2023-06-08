import React, { useState } from "react";
import TableConponent from "../Table/Table";
import styles from "./main.module.scss";
import Search from "../Search/Search";

const Main = () => {
  const [searchParam, setSearchParam] = useState("");
  return (
    <div className={styles.Main}>
      <h1 className={styles.MainTitle}>Общая база сотрудников</h1>
      <Search searchParam={searchParam} setSearchParam={setSearchParam} />
      <TableConponent searchParam={searchParam} />
    </div>
  );
};

export default Main;
