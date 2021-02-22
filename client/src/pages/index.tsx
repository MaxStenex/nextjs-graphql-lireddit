import { GetServerSideProps } from "next";
import { Main } from "../components/Home/Main";
import { Header } from "../components/shared/Header";
import { PostsDocument, PostsQuery } from "../generated/apollo";
import { initializeApollo } from "../lib/apollo";

type Props = {
  postsQuery: PostsQuery;
};

const Home: React.FC<Props> = ({ postsQuery }) => {
  return (
    <>
      <Header />
      <Main postsQuery={postsQuery} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const apolloClient = initializeApollo({}, context);
    const response = await apolloClient.query<PostsQuery>({
      query: PostsDocument,
      variables: { cursor: null, limit: 5 },
    });

    return {
      props: {
        postsQuery: response.data,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default Home;
