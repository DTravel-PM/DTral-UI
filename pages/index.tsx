import type { NextPage } from "next";
import { Button, Row, Col, Container } from "react-bootstrap";
import { OnlyHeaderLayout } from "../layout";
import { Header } from "../components/common";
import { CardPost, Sidebar, Hashtag, CardInput } from "../components";
import { getAllPost } from "./api/posts/[id]";
import { useQuery } from "react-query";
interface IPosts {
  children?: any;
  data?: any;
}

const Home: NextPage = ({ children }: IPosts) => {
  const { data } = useQuery("all-articles", getAllPost);

  return (
    <OnlyHeaderLayout header={<Header />}>
      <Container>
        <h3 className="mb-4">Newsfeeds </h3>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={6}>
            <CardInput />
            {data ? (
              data.map((item: IArticle, i: number) => {
                return <CardPost data={item} key={i} />;
              })
            ) : (
              <></>
            )}
          </Col>
          <Col md={3}>
            <Hashtag />
          </Col>
        </Row>
      </Container>
    </OnlyHeaderLayout>
  );
};

export default Home;
