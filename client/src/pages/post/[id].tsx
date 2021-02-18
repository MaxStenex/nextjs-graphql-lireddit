import React from "react";
import { Header } from "../../components/shared/Header";
import { Main } from "../../components/Post/Main";
import { GetServerSideProps } from "next";
import { initializeApollo } from "../../lib/apollo";
import { PostDocument, PostQuery } from "../../generated/apollo";

type Props = {
  postQuery: PostQuery | undefined;
};

const Post: React.FC<Props> = ({ postQuery }) => {
  return (
    <>
      <Header />
      <Main postQuery={postQuery} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const postIdFromQuery = context.query.id as string;

    const apolloClient = initializeApollo({}, context);
    const response = await apolloClient.query<PostQuery>({
      query: PostDocument,
      variables: {
        postId: parseInt(postIdFromQuery),
      },
    });

    return {
      props: {
        postQuery: response.data,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};

export default Post;
