import Link from "next/link";

const HomePage = () => (
  <div>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/hello">
        <a>Hello world page</a>
      </Link>
    </p>
  </div>
);

export default HomePage;
