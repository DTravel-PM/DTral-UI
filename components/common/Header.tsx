import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import Router from "next/router";
import { BsBookmarkHeart } from "react-icons/bs";
import { FcPlanner } from "react-icons/fc";
import styles from "../../styles/Layout.module.css";
import Link from "next/link";

export const Header = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const search = e.target.search;

    if (search && search.value) {
      Router.push(`/search?text=${search.value}`);
    }
  };

  const handleLogout = () => {
    console.log("haha");
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        boxShadow: " 0 2px 10px 0 rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <Navbar bg="light" expand="lg">
        <Container fluid="lg">
          <Navbar.Brand
            href="/"
            style={{
              marginRight: "30px",
            }}
            className={styles.nameApp}
          >
            DTravel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex" onSubmit={handleSubmit}>
              <FormControl
                type="search"
                placeholder="Nhập từ khóa tìm kiếm"
                className="me-2"
                aria-label="Search"
                id="search"
                name="search"
              />
              <Button
                variant="outline-success"
                type="submit"
                style={{ width: "140px" }}
              >
                Tìm kiếm
              </Button>
            </Form>
            <Nav
              className=" my-2 my-lg-0"
              style={{ maxHeight: "100px", marginLeft: "auto" }}
              navbarScroll
            >
              <Nav.Link href="/my-list" style={{ margin: "0px 8px" }}>
                <BsBookmarkHeart size={22} color="red" />
              </Nav.Link>
              <Nav.Link href="/my-plan" style={{ margin: "0px 8px" }}>
                <FcPlanner size={25} color="green" />
              </Nav.Link>
              <NavDropdown
                style={{ margin: "0px 8px" }}
                title="Đạt Nguyễn"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="/profile">
                  Trang cá nhân
                </NavDropdown.Item>
                <NavDropdown.Item href="/edit-profile">
                  Thông tin cá nhân
                </NavDropdown.Item>
                <NavDropdown.Item href="/my-address">
                  Địa điểm của tôi
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Đăng xuất
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Link href="/login">
              <Button
                variant="danger"
                style={{ marginLeft: "20px", width: "120px" }}
              >
                Đăng nhập
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
