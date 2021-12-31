import type { NextPage } from "next";
import { server } from "../config";
import { useState, useEffect } from "react";
import { useQuery, QueryClient, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { OnlyHeaderLayout } from "../layout";
import { Header } from "../components/common";
import { searchPost } from "./api/posts/[id]";
import { Button, Row, Col, Container } from "react-bootstrap";
import { CardPost, Sidebar, Hashtag, CardInput } from "../components";

function reverseArray(arr: any) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

const Search: NextPage = () => {
  const router = useRouter();
  const { text } = router.query;

  const { data } = useQuery(["all-articles", text], searchPost);
  const [newData, setNewData] = useState(data);
  useEffect(() => {
    if (data && data.length) {
      setNewData(data);
    }
  }, [data]);
  return (
    <OnlyHeaderLayout header={<Header />}>
      <Container>
        {" "}
        <h3 style={{ marginBottom: "40px" }}>
          Bài viết liên quan đến từ khóa: {text}
        </h3>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={6}>
            {/* <CardInput /> */}
            {data && newData && data.length ? (
              reverseArray(newData).map((item: IArticle, i: number) => {
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

export async function getServerSideProps(context: any) {
  const { text } = context.query;

  //   const res = await fetch(`${server}/api/test`);
  //   const data = await res.json();

  // Pass data to the page via props
  return { props: { data: text } };
}

export default Search;
