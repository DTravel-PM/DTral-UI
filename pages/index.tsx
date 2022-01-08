import type { NextPage } from "next";
import { Row, Col, Container } from "react-bootstrap";
import { OnlyHeaderLayout } from "../layout";
import { Header } from "../components/common";
import { CardPost, Sidebar, Hashtag, CardInput } from "../components";
import { getAllPost } from "./api/posts/[id]";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { parseCookies, destroyCookie } from "nookies";

interface IPosts {
  children?: any;
  data?: any;
}

function reverseArray(arr: any) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

const Home: NextPage = ({ children }: IPosts) => {
  const { data } = useQuery("all-articles", getAllPost);
  const [newData, setNewData] = useState(data);
  const jwt = parseCookies().jwt;

  useEffect(() => {
    if (data && data.length) {
      setNewData(data);
    }
  }, [data]);

  const dataSidebar ={
    name: 'Lee Cross',
    description: 'Developer of web applications, JavaScript, PHP, Java, Python, Ruby\nJava, Node.js, etc.',
    followers: 12345,
    following: 65487,
  }

  return (
    <OnlyHeaderLayout header={<Header />}>
      <Container>
        <h3 className="mb-4">Newsfeeds </h3>
        <Row>
          <Col md={3}>
            <Sidebar name= {dataSidebar.name} description = {dataSidebar.description} following = {dataSidebar.following} followers = {dataSidebar.followers} />
          </Col>
          <Col md={6}>
            {jwt && <CardInput />}
            {data && newData ? (
              reverseArray(newData).map((item: IArticle, i: number) => {
                return <CardPost data={item} key={i} />;
              })
            ) : (
              <></>
            )}
            <CardPost></CardPost>
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
