import React from "react";
import Nav from "react-bootstrap/Nav";
import styles from "./nav.module.scss";
import { Props } from "./IProps";
import { navItems } from "../../../entities/header_nav_items";

const NavBar: React.FC<Props> = ({ activeItem, setActiveItem, elementRef }) => {
  const hancleClickNavItem = (id: number) => {
    setActiveItem(id);
  };
  return (
    <Nav ref={elementRef} className={styles.Nav}>
      <div className={styles.NavItems}>
        {navItems.map((item) => (
          <Nav.Item
            className={`${styles.NavItem} ${
              activeItem === item.id && styles.NavItem_active
            }`}
            key={item.id}
            onClick={() => hancleClickNavItem(item.id)}
          >
            <Nav.Link
              className={`${styles.NavItemLink} ${
                activeItem === item.id && styles.NavItemLink_active
              }`}
            >
              {item.title}
            </Nav.Link>
          </Nav.Item>
        ))}
      </div>
    </Nav>
  );
};

export default NavBar;
