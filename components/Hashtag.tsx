import React from "react";
import { Button } from "react-bootstrap";
import Router from "next/router";

export const Hashtag = () => {
  const list = [
    "Hà Nội",
    "Vũng Tàu",
    "TP Hồ Chí Minh",
    "Quảng Ngãi",
    "Bình Định",
    "Phú Yên",
    "Đà Lạt",
    "Hải Phòng",
  ];

  return (
    <div className="card">
      <div className="card-body">
        <div className="h5">Top địa điểm yêu thích</div>
        <div className="h7 text-muted">Thành phố đáng chú ý:</div>
        <div className="h7" style={{ display: "flex", flexWrap: "wrap" }}>
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
