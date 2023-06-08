import React, { useRef, useState } from "react";
import { Pagination } from "react-bootstrap";
import NavBar from "./Nav/Nav";
import styles from "./header.module.scss";
import UserBlock from "./UserBlock/UserBlock";
import { navItems } from "../../entities/header_nav_items";

const Header = () => {
  const [activeItem, setActiveItem] = useState(2);
  const elementRef = useRef<null | HTMLDivElement>(null);

  function handleClick(name: string) {
    if (elementRef.current?.scrollLeft !== undefined) {
      if (name === "next") {
        elementRef.current.scrollLeft += 200;
      } else if (name === "prev") {
        elementRef.current.scrollLeft -= 200;
      }
    }
  }

  const handleClickArrow = (name: string) => {
    setActiveItem((prev) => (name === "prev" ? prev - 1 : prev + 1));
    handleClick(name);
  };

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderArrows}>
        <button
          className={styles.HeaderArrowsPrev}
          onClick={() => handleClickArrow("prev")}
          disabled={activeItem === 1}
        >
          <img src="/static/images/prev.svg" alt="arrow" />
        </button>
        <button
          className={styles.HeaderArrowsNext}
          onClick={() => handleClickArrow("next")}
          disabled={activeItem === navItems.length}
        >
          <img src="/static/images/prev.svg" alt="arrow" />
        </button>
      </div>
      <NavBar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        elementRef={elementRef}
      />
      <UserBlock />
    </div>
  );
};

export default Header;
