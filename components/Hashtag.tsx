import React from "react";
import { Button } from "react-bootstrap";

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
    <div className="card" >
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
              >
                <Button variant="outline-primary">{item}</Button>
              </div>
            );
          })}
        </div>
      </div>
      {/* <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="h6 text-muted">Followers</div>
          <div className="h5">5.2342</div>
        </li>
        <li className="list-group-item">
          <div className="h6 text-muted">Following</div>
          <div className="h5">6758</div>
        </li>
      </ul> */}
    </div>
  );
};
