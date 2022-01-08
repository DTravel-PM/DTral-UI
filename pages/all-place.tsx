import type { NextPage } from "next";
import { server } from "../config";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useQuery, QueryClient, useQueryClient } from "react-query";
import { CardLocation } from "../components";
import { OnlyHeaderLayout } from "../layout";
import { Header } from "../components/common";
import { Row, Col, Container } from "react-bootstrap";
import { CardPost, Sidebar, Hashtag, CardInput } from "../components";
import { getAllLocation } from "./api/place";
const AllPlace: NextPage = () => {
  const dataSidebar = {
    name: "Lee Cross",
    description:
      "Developer of web applications, JavaScript, PHP, Java, Python, Ruby\nJava, Node.js, etc.",
    followers: 12,
    following: 1,
  };
  const { data } = useQuery(["all-location"], getAllLocation);

  return (
    <OnlyHeaderLayout header={<Header />}>
      <Container>
        <h3 className="mb-4">Tất cả địa điểm </h3>
        <Row>
          <Col md={3}>
            <Sidebar
              name={dataSidebar.name}
              description={dataSidebar.description}
              following={dataSidebar.following}
              followers={dataSidebar.followers}
            />
          </Col>
          <Col md={6}>
            {data &&
              data.length &&
              data.map((item: any, i: any) => {
                return <CardLocation key={i} data={item} />;
              })}
          </Col>
          <Col md={3}>
            <Hashtag />
          </Col>
        </Row>
      </Container>
    </OnlyHeaderLayout>
  );
};

export default AllPlace;
