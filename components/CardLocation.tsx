import React, { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { AiFillHeart } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BiSave } from "react-icons/bi";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { createPlan, updatePlan } from "../pages/api/plans";
import Router from "next/router";
import { parseCookies, destroyCookie } from "nookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CardLocation = ({ data, onPlan, plan }: any) => {
  const user = parseCookies().user;
  const [budget, setBudget] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const { mutate, isLoading } = useMutation(createPlan, {
    onSuccess: (data) => {
      console.log(data);
      const message = "success";
      console.log(message);
      // Router.reload();
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const notify = () => {
    toast("Đã thêm vào plan của bạn", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "foo-bar",
    });
  };

  const notify2 = () => {
    toast("Chỉnh sửa thành công", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "foo-bar",
    });
  };

  const mutationEdit = useMutation(updatePlan, {
    onSuccess: (data) => {
      console.log(data);
      const message = "success";
      console.log(message);
      // Router.reload();
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    mutate({ date, time, budget, username: user, locationid: data.siteid });

    notify();
  };

  const handleEditPlan = (e: any) => {
    e.preventDefault();

    mutationEdit.mutate({
      date,
      time,
      budget,
      username: user,
      locationid: data.siteid,
      id: plan.id,
    });

    notify2();
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      {" "}
      <ToastContainer autoClose={2000}></ToastContainer>
      <Card style={{ width: "100%" }}>
        <Row>
          {!onPlan ? (
            <Card.Img
              style={{ height: "300px", objectFit: "cover" }}
              variant="top"
              src={data?.thumbnail}
            />
          ) : (
            <Col md="5">
              <Card.Img
                style={{ height: "100%", objectFit: "cover" }}
                variant="top"
                src={data?.thumbnail}
              />
            </Col>
          )}
          <Col md={onPlan ? "7" : "12"}>
            <Card.Body>
              <Card.Title>{data?.sitename}</Card.Title>
              {onPlan && (
                <Button
                  style={{ position: "absolute", top: 10, right: 10 }}
                  variant="success"
                  onClick={(e: any) => handleEditPlan(e)}
                >
                  <BiSave size={20} />
                </Button>
              )}
              <Card.Text>
                <span style={{ fontWeight: "bold" }}>Địa điểm</span>:{" "}
                {data?.address}
              </Card.Text>
              {!onPlan ? (
                <>
                  <Card.Text>
                    {data?.description.substr(0, 200)}......
                  </Card.Text>
                  <Button variant="primary" style={{ marginRight: "15px" }}>
                    <a
                      href={`/place/${data.siteid}`}
                      style={{
                        color: "white",
                        width: "100px",
                        textDecoration: "none",
                      }}
                    >
                      <BiMessageDetail style={{ marginRight: 5 }} size="20" />
                      Chi tiết
                    </a>
                  </Button>

                  <Button
                    variant="danger"
                    onClick={(e: any) => handleSubmit(e)}
                  >
                    <AiFillHeart size="20" style={{ marginRight: 5 }} />
                    Thêm vào Plan
                  </Button>
                </>
              ) : (
                <>
                  <Form.Group controlId="dob">
                    <Form.Label>Chi phí</Form.Label>
                    <Form.Control
                      type="number"
                      defaultValue={plan?.budget}
                      onChange={(e: any) => setBudget(e.target.value)}
                      name="dob"
                      placeholder="VND"
                    />
                  </Form.Group>
                  <Row style={{ marginTop: "15px" }}>
                    <Col md="6">
                      {" "}
                      <Form.Group controlId="dob">
                        <Form.Label>Chọn ngày</Form.Label>
                        <Form.Control
                          type="date"
                          defaultValue={plan?.date}
                          name="dob"
                          onChange={(e: any) => setDate(e.target.value)}
                          placeholder="Date of Birth"
                        />
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group controlId="dob">
                        <Form.Label>Chọn giờ</Form.Label>
                        <Form.Control
                          type="time"
                          defaultValue={plan?.time}
                          onChange={(e: any) => setTime(e.target.value)}
                          name="dob"
                          placeholder="Date of Birth"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </>
              )}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
