import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Row, Col, Container } from "react-bootstrap";
import { OnlyHeaderLayout } from "../../layout";

import { Header } from "../../components/common";
import { Sidebar, Hashtag, CardPostDetail } from "../../components";
interface IPosts {
  data?: any;
  children?: any;
}

const Posts: NextPage = ({ children, data }: IPosts) => {
  const router = useRouter();
  const { id } = router.query;


  return (
    <OnlyHeaderLayout header={<Header />}>
      <Container>
        <h3 className="mb-4">Post</h3>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={6}>
            <CardPostDetail></CardPostDetail>
            
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

export default Posts;
