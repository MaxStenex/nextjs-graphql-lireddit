import Link from "next/link";
import { useHelloQuery } from "../generated/apollo";

const Hello = () => {
  const { data } = useHelloQuery();

  return (
    <div>
      <h1>Hello {`:)`}</h1>
      <p>This is the hello page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
      {data && <div>{data.helloWorld}</div>}
    </div>
  );
};

export default Hello;
