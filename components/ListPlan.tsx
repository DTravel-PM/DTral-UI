import React from "react";
import { Button } from "react-bootstrap";
import Router from "next/router";

export const ListPlan = () => {
  const list = [
    "Plan 1",
    "Plan 2",
    "Plan 2",
    "Plan 2",
    "Plan 2",
    "Plan 2",
    "Plan 2",
    "Plan 2",
  ];

  return (
    <div className="card">
      <div className="card-body">
        <div className="h5">Danh sách Plan</div>
        <div className="h7" style={{ display: "list-item" }}>
          {list.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  marginRight: "8px",
                  marginTop: "10px",
                }}
                onClick={() => {
                  Router.push(`/search?text=${item}`);
                }}
              >
                <Button variant="outline-primary">{item}</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
