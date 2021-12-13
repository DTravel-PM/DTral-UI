import type { NextPage } from "next";
import { Button, Row, Col, Container } from "react-bootstrap";
import { OnlyHeaderLayout } from "../layout";
import { Header } from "../components/common";
import { CardPost, Sidebar, Hashtag } from "../components";

interface IPosts {
  data?: any;
  children?: any;
}

const Home: NextPage = ({ children, data }: IPosts) => {
  return (
    <OnlyHeaderLayout header={<Header />}>
      <Container>
        <h3 className="mb-4">Newsfeeds</h3>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={6}>
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
          </Col>
          <Col md={3}>
            <Hashtag />
          </Col>
        </Row>
      </Container>
    </OnlyHeaderLayout>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data: data.data } };
}

export default Home;
