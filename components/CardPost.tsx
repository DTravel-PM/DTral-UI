import React, { useState } from "react";
import { Popover, OverlayTrigger, Button, Modal } from "react-bootstrap";
import styles from "../styles/Component.module.css";

export const CardPost = () => {
  const [show, setShow] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClickItem = () => {
    setShowOverlay(false);
    handleShow();
  };

  const popover = (
    <Popover
      id="popover-basic"
      style={{ display: showOverlay ? "block" : "none" }}
    >
      <Popover.Header as="h3">Tác vụ</Popover.Header>
      <Popover.Body style={{ padding: 0 }}>
        <div className={styles.cardOption} onClick={handleClickItem}>
          <span>Báo cáo bài đăng</span>
        </div>
        <div className={styles.cardOption} onClick={handleClickItem}>
          <span>Ẩn bài đăng</span>
        </div>
        <div className={styles.cardOption} onClick={handleClickItem}>
          <span>Lưu bài đăng</span>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="card gedf-card mb-5">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div className="mr-2">
              <img
                className="rounded-circle"
                width="45"
                src="https://picsum.photos/50/50"
                alt=""
              />
            </div>
            <div className="ml-2">
              <div className="h5 m-0">@LeeCross</div>
              <div className="h7 text-muted">Miracles Lee Cross</div>
            </div>
          </div>
          <div>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
              rootClose
            >
              <div
                className="card-student__right"
                onClick={() => setShowOverlay(true)}
              >
                <button
                  className="btn btn-link dropdown-toggle"
                  type="button"
                  id="gedf-drop1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-h"></i>
                </button>
              </div>
            </OverlayTrigger>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="text-muted h7 mb-2">
          {" "}
          <i className="fa fa-clock-o"></i>10 min ago
        </div>
        <a className="card-link" href="#">
          <h5 className="card-title">
            Lorem ipsum dolor sit amet, consectetur adip.
          </h5>
        </a>

        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor sequi
          fuga quia quaerat cum, obcaecati hic, molestias minima iste
          voluptates.
        </p>
      </div>
      <div className="card-footer">
        <a href="#" className="card-link">
          <i className="fa fa-gittip"></i> Like
        </a>
        <a href="#" className="card-link">
          <i className="fa fa-comment"></i> Comment
        </a>
        <a href="#" className="card-link">
          <i className="fa fa-mail-forward"></i> Share
        </a>
      </div>
    </div>
  );
};
