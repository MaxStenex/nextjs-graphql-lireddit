import React from "react";
import {
  Wrapper,
  VotesSection,
  VoteButton,
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
} from "./styled";

type Props = {
  creatorUsername: string;
  title: string;
  shortText: string;
  votesCount: number;
};

export const Post: React.FC<Props> = ({
  creatorUsername,
  title,
  shortText,
  votesCount,
}) => {
  return (
    <Wrapper>
      <VotesSection>
        <VoteButton>
          <VoteUpImage src={require("../../../images/Home/vote-arrow.svg")} />
        </VoteButton>
        <VoteCount>{votesCount}</VoteCount>
        <VoteButton>
          <VoteDownImage src={require("../../../images/Home/vote-arrow.svg")} />
        </VoteButton>
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
