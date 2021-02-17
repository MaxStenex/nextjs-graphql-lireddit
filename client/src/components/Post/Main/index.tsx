import React from "react";
import { Wrapper, MainContentWrapper } from "./styled";
import { Post } from "../../shared/Post";
import { VoteTypes } from "../../../generated/apollo";
import { Comments } from "../Comments";
import { CommentForm } from "../CommentForm";

export const Main = () => {
  return (
    <Wrapper>
      <MainContentWrapper>
        <Post
          id={2}
          creatorUsername={"Maxim"}
          title={"TEASTASTASTtas"}
          text={
            "ADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasdaADASDaSdsadasdasdasdadasda"
          }
          votesCount={10}
          voteType={VoteTypes.Up}
          isPostPage={true}
        />
        <CommentForm />
        <Comments />
      </MainContentWrapper>
    </Wrapper>
  );
};
