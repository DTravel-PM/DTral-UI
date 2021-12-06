import type { NextPage } from "next";
import { server } from "../config";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useQuery, QueryClient, useQueryClient } from "react-query";

const RenderButton = () => {
  const [value, setValue] = useState(10);

  const handleDes = () => {
    setValue((value) => value - 1);
  };

  const handleInc = () => {
    setValue((value) => value + 1);
  };

  return (
    <div>
      <Button onClick={() => handleDes()}>Des</Button>
      {value}
      <Button onClick={() => handleInc()}>Inc</Button>
    </div>
  );
};

const RenderComponent = () => {
  const queryClient = useQueryClient();
  return <div>This is value of button: {1}</div>;
};

const Test: NextPage = ({ data }: any) => {
  return (
    <div className="mt-8 max-w-xl mx-auto px-8 m-auto">
      <p>haha {data.data}</p>
      <RenderButton />

      <RenderComponent />
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from API
  const res = await fetch(`${server}/api/test`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data: data } };
}

export default Test;
