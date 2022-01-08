import React from "react";
import { parseCookies, destroyCookie } from "nookies";

export const Sidebar = (props: any) => {
  const user = parseCookies().user;
  return (
    <div className="card" style={{ position: "sticky" }}>
      <div className="card-body">
        <div className="h5">{user || "Guest"}</div>
        <div className="h7">{props?.description || ""}</div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="h6 text-muted">Comment</div>
          <div className="h5">{props.followers}</div>
        </li>
        <li className="list-group-item">
          <div className="h6 text-muted">Share posts</div>
          <div className="h5">{props.following}</div>
        </li>
      </ul>
    </div>
  );
};
