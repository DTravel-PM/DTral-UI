import type { NextPage } from "next";
import { Button, Row, Col, Container } from "react-bootstrap";
import { OnlyHeaderLayout } from "../layout";
import { Header } from "../components/common";
import { CardPost, Sidebar, Hashtag, CardInput } from "../components";
import { getAllPost } from "./api/posts/[id]";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { ListPlan } from "../components/ListPlan";
import { DetailPlan } from "../components/DetailPlan";


const MyPlan =() => {
  const { data } = useQuery("all-articles", getAllPost);
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    if (data && data.length) {
      setNewData(data);
    }
  }, [data]);

  return (
    <OnlyHeaderLayout header={<Header />}>
      
        <h3 className="mb-4">My Plan </h3>
        <Row>
          <Col md={2}>
            <ListPlan />
          </Col>
          <Col md={3}>
            <CardInput />
            {data && newData ? (
              reverseArray(newData).map((item: IArticle, i: number) => {
                return <CardPost data={item} key={i} />;
              })
            ) : (
              <></>
            )}
          </Col>
          <Col md={7}>
            <ListPlan />
          </Col>
        </Row>
      
    </OnlyHeaderLayout>
  );
};

export default MyPlan;
