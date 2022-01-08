import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { createPost, getAllPost } from "../pages/api/posts/[id]";
import { useMutation, useQueryClient, useQuery } from "react-query";
import Router from "next/router";
import { parseCookies, destroyCookie } from "nookies";

export const CardInput = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [location, setLocation] = useState("");
  const user = parseCookies().user;

  const { mutate, isLoading } = useMutation(createPost, {
    onSuccess: (data) => {
      console.log(data);
      const message = "success";
      console.log(message);
      Router.reload();
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    mutate({ title: title, content: des, location: location, username: user });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="card gedf-card mb-5">
        <div className="card-header">
          <ul
            className="nav nav-tabs card-header-tabs"
            id="myTab"
            role="tablist"
          >
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                onChange={(e: any) => setTitle(e.target.value)}
                type="text"
                placeholder="tiêu đề bài viết"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Địa điểm</Form.Label>
              <Form.Control
                onChange={(e: any) => setLocation(e.target.value)}
                type="text"
                placeholder="địa điểm muốn chia sẻ"
              />
            </Form.Group>
            <div
              className="tab-pane fade show active"
              id="posts"
              role="tabpanel"
              aria-labelledby="posts-tab"
            >
              <p>Nội dung chia sẻ</p>
              <div className="form-group">
                <textarea
                  className="form-control"
                  onChange={(e: any) => {
                    setDes(e.target.value);
                  }}
                  id="message"
                  style={{ height: 120 }}
                  placeholder="chia sẻ chuyến đi của bạn"
                ></textarea>
              </div>
            </div>
          </div>

          {/* <div style={{ marginTop: "15px" }}>
            <input type="file" accept="image/*" multiple />
          </div> */}

          <div className="btn-toolbar justify-content-between">
            <div className="btn-group mt-3">
              <button type="submit" className="btn btn-primary">
                Đăng bài
              </button>
              {isLoading && (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};
