import Link from "next/link";
import Header from "../components/shared/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/hello">
          <a>Hello world page</a>
        </Link>
      </p>
    </div>
  );
};

export default HomePage;
