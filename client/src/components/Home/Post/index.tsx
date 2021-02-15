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
  creator: string;
  title: string;
  shortText: string;
};

export const Post: React.FC<Props> = ({ creator, title, shortText }) => {
  return (
    <Wrapper>
      <VotesSection>
        <VoteButton>
          <VoteUpImage src={require("../../../images/Home/vote-arrow.svg")} />
        </VoteButton>
        <VoteCount>175</VoteCount>
        <VoteButton>
          <VoteDownImage src={require("../../../images/Home/vote-arrow.svg")} />
        </VoteButton>
      </VotesSection>
      <MainSection>
        <Header>
          <PostedBy>Posted by {creator} 17 hours ago</PostedBy>
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
