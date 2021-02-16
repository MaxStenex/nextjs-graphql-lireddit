import React from "react";
import { useVoteMutation, VoteTypes } from "../../../generated/apollo";
import {
  Wrapper,
  VotesSection,
  VoteUpButton,
  VoteCount,
  Header,
  MainSection,
  PostedBy,
  Title,
  Text,
  Footer,
  Comments,
  TextAndFooterWrapper,
  VoteUpImage,
  VoteDownImage,
  VoteDownButton,
} from "./styled";

type Props = {
  id: number;
  creatorUsername: string;
  title: string;
  shortText: string;
  votesCount: number;
};

export const Post: React.FC<Props> = ({
  id,
  creatorUsername,
  title,
  shortText,
  votesCount,
}) => {
  const [voteMutation, { loading, data }] = useVoteMutation();
  const vote = async (postId: number, voteType: VoteTypes) => {
    try {
      await voteMutation({ variables: { postId, voteType } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <VotesSection>
        <VoteUpButton disabled={loading} onClick={() => vote(id, VoteTypes.Up)}>
          <VoteUpImage src={require("../../../images/Home/vote-arrow.svg")} />
        </VoteUpButton>
        <VoteCount>
          {(loading && "...") || (data?.vote && +data.vote) || votesCount}
        </VoteCount>
        <VoteDownButton disabled={loading} onClick={() => vote(id, VoteTypes.Down)}>
          <VoteDownImage src={require("../../../images/Home/vote-arrow.svg")} />
        </VoteDownButton>
      </VotesSection>
      <MainSection>
        <Header>
          <PostedBy>Posted by {creatorUsername} 17 hours ago</PostedBy>
          <Title>{title}</Title>
        </Header>
        <TextAndFooterWrapper>
          <Text>{shortText}</Text>
          <Footer>
            <Comments>153 comments</Comments>
          </Footer>
        </TextAndFooterWrapper>
      </MainSection>
    </Wrapper>
  );
};
