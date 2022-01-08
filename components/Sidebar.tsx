import React from "react";

export const Sidebar = (props: any) => {
  return (
    <div className="card" style={{ position: "sticky" }}>
      <div className="card-body">
        <div className="h5">{props.name}</div>
        <div className="h7">
          {props.description}
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="h6 text-muted">Followers</div>
          <div className="h5">{props.followers}</div>
        </li>
        <li className="list-group-item">
          <div className="h6 text-muted">Following</div>
          <div className="h5">{props.following}</div>
        </li>
      </ul>
    </div>
  );
};
