import React, { useState } from "react";

export const CardInput = () => {
  return (
    <div className="card gedf-card mb-5">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="posts-tab"
              data-toggle="tab"
              role="tab"
              href="javascript:void(0)"
              aria-controls="posts"
              aria-selected="true"
            >
              Đăng bài
            </a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="posts"
            role="tabpanel"
            aria-labelledby="posts-tab"
          >
            <div className="form-group">
              <textarea
                className="form-control"
                id="message"
                style={{ height: 120 }}
                placeholder="Chia sẽ chuyến đi của bạn"
              ></textarea>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "15px" }}>
          <input type="file" accept="image/*" multiple />
        </div>

        <div className="btn-toolbar justify-content-between">
          <div className="btn-group mt-3">
            <button type="submit" className="btn btn-primary">
              Đăng bài
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
