import Login from "../component/Login";
import { USERNAME } from "../queries/username.queries";
import client from "../lib/sanity";

export default function Home({ data }) {
  return (
    <>
      <Login data={data} />
    </>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(USERNAME);
  return {
    props: {
      data,
    },
  };
}
