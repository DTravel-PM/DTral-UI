/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import styles from "../styles/Component.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

type IArticle = any;
type IMedia = any;
interface ICardPost {
  data?: IArticle;
}

export const CardPost = ({ data }: ICardPost) => {
  const [show, setShow] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [rating, setRating] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onPressRating = (rate: any) =>{
    if(rate==0) setRating(1);
    else setRating(0);
  }
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
            <div className="">
              <img
                className="rounded-circle"
                width="45"
                src="https://picsum.photos/50/50"
                alt=""
              />
            </div>
            <div className="mx-2">
              <div className="h5 m-0"> {data?.username || "Dương Nguyễn"}</div>
              {/* <div className="h7 text-muted">Miracles Lee Cross</div> */}
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
          <i className="fa fa-clock-o"></i>
          {data?.uploaddate || "01/01/2022"}
        </div>
        <b className="card-link">
          <h5 className="card-title">{data?.title}</h5>
        </b>

        <p className="card-text">
          Địa điểm:{" "}
          <a href={`/search?text=${data?.location}`}>
            {" "}
            {data?.location || "TP HCM"}
          </a>
        </p>

        <p className="card-text">
          {data?.content ||
            "Trong 10 kỷ lục châu Á được công nhận có đến 5 kỷ lục gắn với tôn giáo và 3 kỷ lục dành cho các danh lam thắng cảnh tại Việt Nam. Tất cả các kỷ lục này đều có giá trị lịch sử, "}
        </p>

        <div className="card-image" style={{ width: "80%", margin: "auto" }}>
          {data?.media && (
            <Carousel
              showArrows={true}
              // onChange={onChange}
              // onClickItem={onClickItem}
              // onClickThumb={onClickThumb}
            >
              {data.media.map((item: IMedia, i: number) => {
                return (
                  <div key={i} style={{ maxHeight: "400px" }}>
                    <img src={`${process.env.URL_API}${item.url}`} />
                  </div>
                );
              })}
            </Carousel>
          )}
        </div>
      </div>
      <div className="card-footer">
      <a className="card-link" onClick={()=>onPressRating(rating)} style={{ textDecoration: 'none' }}>
          <i className="fa fa-gittip"></i>
          {(data?.rating || 0)+ rating} Rating
        </a>
        <a href="/posts/123" className="card-link" style={{ textDecoration: 'none' }}>
          <i className="fa fa-comment"></i> {data?.view || 0} view
        </a>
      </div>
    </div>
  );
};
