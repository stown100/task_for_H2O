import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import styles from "./sidebar.module.scss";

const navItems = [
  {
    id: 1,
    img: "/static/images/nav/nav1.svg",
  },
  {
    id: 2,
    img: "/static/images/nav/nav2.svg",
  },
  {
    id: 3,
    img: "/static/images/nav/nav3.svg",
  },
  {
    id: 4,
    img: "/static/images/nav/nav4.svg",
  },
  {
    id: 5,
    img: "/static/images/nav/nav5.svg",
  },
  {
    id: 6,
    img: "/static/images/nav/nav6.svg",
  },
  {
    id: 7,
    img: "/static/images/nav/nav7.svg",
  },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(4);
  const clickItem = (id: number) => {
    setActiveItem(id);
  };
  return (
    <Nav defaultActiveKey="/home" className={`flex-column ${styles.Nav}`}>
      <Nav.Link href="/" className={styles.Logo}>
        <img src="/static/images/logo.svg" alt="logo" />
      </Nav.Link>
      {navItems.map((item) => (
        <Nav.Link
          eventKey="link-1"
          className={`${styles.NavItem} ${
            activeItem === item.id && styles.NavItemActive
          }`}
          key={item.id}
          onClick={() => clickItem(item.id)}
        >
          <img src={item.img} alt="icon" />
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default Sidebar;
