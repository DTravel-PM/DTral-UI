import React from "react";
import styles from "../styles/Layout.module.scss";

export const BlankLayout: React.FC = ({ children }) => {
  return <div  className={styles.blank_layout}>{children}</div>;
};
