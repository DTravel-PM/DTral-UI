import React from "react";
import styles from "../styles/Layout.module.scss";

export const OnlyHeaderLayout: React.FC<IOnlyHeaderLayout> = ({
  children,
  header,
}) => {
  return (
    <div className={"only-header"}>
      <div className="only-header__header">
        <div className="only-header__container">{header}</div>
      </div>
      <div style={{ paddingTop: "80px" }} className={"only-header__center"}>
        {children}
      </div>
    </div>
  );
};
