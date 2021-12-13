import type { NextPage } from "next";
import { server } from "../config";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useQuery, QueryClient, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { OnlyHeaderLayout } from "../layout";
import { Header } from "../components/common";

const Search: NextPage = ({ data }: any) => {
  const router = useRouter();
  const { text } = router.query;

  return (
    <OnlyHeaderLayout header={<Header />}>
      <Container>
        {" "}
        <h3>Bài viết liên quan đến từ khóa: {text}</h3>
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
