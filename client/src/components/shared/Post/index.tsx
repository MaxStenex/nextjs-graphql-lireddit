import React, { useState } from "react";
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
  Username,
} from "./styled";
import { useRouter } from "next/router";

type Props = {
  id: number;
  creatorUsername: string;
  title: string;
  shortText?: string;
  text?: string;
  votesCount: number;
  voteType: VoteTypes;
  isPostPage?: boolean;
};

export const Post: React.FC<Props> = ({
  id,
  creatorUsername,
  title,
  shortText,
  votesCount,
  voteType,
  text,
  isPostPage,
}) => {
  const router = useRouter();
  const [voteMutation, { loading, data }] = useVoteMutation();
  const [currentVoteType, setCurrentVoteType] = useState(voteType);

  const vote = async (postId: number, voteType: VoteTypes) => {
    try {
      await voteMutation({ variables: { postId, voteType } });
      // if user unvote
      if (currentVoteType !== voteType) {
        return setCurrentVoteType(voteType);
      }
      setCurrentVoteType(VoteTypes.None);
    } catch (error) {
      if (error.message === "Not authenticated") {
        router.push("/login");
      }
    }
  };

  const redirectToPostPage = (postId: number) => {
    if (!isPostPage) {
      router.push(`/post/${postId}`);
    }
  };

  return (
    <Wrapper isPostPage={isPostPage}>
      <VotesSection>
        <VoteUpButton
          voted={currentVoteType === VoteTypes.Up}
          disabled={loading}
          onClick={() => vote(id, VoteTypes.Up)}
        >
          <VoteUpImage src={require("../../../images/Home/vote-arrow.svg")} />
        </VoteUpButton>
        <VoteCount>
          {(loading && "...") ||
            (typeof data?.vote === "number" && `${data.vote}`) ||
            votesCount}
        </VoteCount>
        <VoteDownButton
          voted={currentVoteType === VoteTypes.Down}
          disabled={loading}
          onClick={() => vote(id, VoteTypes.Down)}
        >
          <VoteDownImage src={require("../../../images/Home/vote-arrow.svg")} />
        </VoteDownButton>
      </VotesSection>
      <MainSection isPostPage={isPostPage} onClick={() => redirectToPostPage(id)}>
        <Header>
          <PostedBy>
            Posted by <Username>{creatorUsername}</Username> 17 hours ago
          </PostedBy>
          <Title>{title}</Title>
        </Header>
        <TextAndFooterWrapper>
          <Text>{shortText || text}</Text>
          <Footer>
            <Comments>153 comments</Comments>
          </Footer>
        </TextAndFooterWrapper>
      </MainSection>
    </Wrapper>
  );
};
