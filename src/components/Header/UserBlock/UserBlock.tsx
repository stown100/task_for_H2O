import React, { useState } from "react";
import styles from "./user.module.scss";

const UserBlock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMainInfo = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.User}>
      <img
        className={styles.UserAvatar}
        src="/static/images/user_avatar.svg"
        alt="avatar"
      />
      <div className={styles.UserInfo}>
        <h6 className={styles.UserInfoName}>Kristina 🐰</h6>
        <p className={styles.UserInfoDescription}>менеджер продаж</p>
      </div>
      <img
        onClick={handleOpenMainInfo}
        className={`${styles.UserArrow} ${isOpen && styles.UserArrow_active}`}
        src="/static/images/arrow_bottom.svg"
        alt="arrow"
      />
    </div>
  );
};

export default UserBlock;
