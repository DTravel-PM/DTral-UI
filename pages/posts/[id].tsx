import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { Card, Button } from "react-bootstrap";
import { BlankLayout } from "../../layout";
interface IPosts {
  data?: any;
  children?: any;
}

const Posts: NextPage = ({ children, data }: IPosts) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <BlankLayout>
      <div className="mt-8 max-w-xl mx-auto px-8">
        <h1 className="text-center">
          <span className="block text-xl text-gray-600 leading-tight">
            Welcome to this {id}
          </span>
        </h1>
        <div
          className="mt-12 text-center"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        >
          {data &&
            data.length &&
            data.map((item: any) => {
              return (
                <Card style={{ width: "18rem" }} key={item.anime_id}>
                  <Card.Body>
                    <Card.Img
                      style={{ height: "300px", objectFit: "cover" }}
                      variant="top"
                      src={item.anime_img}
                    />
                    <Card.Title>{item.anime_name}</Card.Title>

                    <Card.Link href={`/post/${item.anime_id}`}>
                      Go to detail
                    </Card.Link>
                  </Card.Body>
                </Card>
              );
            })}
        </div>
      </div>
    </BlankLayout>
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
