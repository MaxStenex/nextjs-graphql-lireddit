import Link from "next/link";

const Hello = () => (
  <div>
    <h1>About</h1>
    <p>This is the hello page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </div>
);

export default Hello;
