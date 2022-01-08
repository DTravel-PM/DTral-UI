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
import { getAllPlan } from "./api/plans";
import { DDContainer } from "../components/DragDrog";
import { parseCookies, destroyCookie } from "nookies";

const MyPlan: NextPage = () => {
  const user = parseCookies().user;
  const dataSidebar = {
    name: "Lee Cross",
    description:
      "Developer of web applications, JavaScript, PHP, Java, Python, Ruby\nJava, Node.js, etc.",
    followers: 12,
    following: 1,
  };
  const { data } = useQuery(["all-location"], getAllLocation);
  const plan = useQuery(["my-plan", { user: user }], getAllPlan);

  return (
    <OnlyHeaderLayout header={<Header />}>
      <Container>
        <h2 className="mb-5 text-center">Kế hoạch của tôi </h2>
        {/* </div> */}
        <Row>
          <Col md="2"></Col>
          <Col md={8}>
            <DDContainer ITEMS={data} plan={plan?.data || []} />
          </Col>{" "}
          <Col md="2"></Col>
        </Row>
      </Container>
    </OnlyHeaderLayout>
  );
};

export default MyPlan;
