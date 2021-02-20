import { Formik, ErrorMessage } from "formik";
import React from "react";
import { useCreateCommentMutation, useMeQuery } from "../../../generated/apollo";
import { createCommentSchema } from "../../../utils/validaton/createComment";
import {
  Wrapper,
  Title,
  TitleUsernameLink,
  StyledForm,
  TextOfComment,
  FormFooter,
  SubmitButton,
  Error,
} from "./styled";

type Props = {
  postId: number;
};

export const CommentForm: React.FC<Props> = ({ postId }) => {
  const { data } = useMeQuery();
  const [createComment] = useCreateCommentMutation();

  return (
    <Wrapper>
      <Title>
        Comment as <TitleUsernameLink>{data?.me.username}</TitleUsernameLink>
      </Title>
      <Formik
        initialValues={{ text: "" }}
        validationSchema={createCommentSchema}
        onSubmit={async ({ text }, { resetForm }) => {
          try {
            await createComment({
              variables: {
                text,
                postId,
              },
            });
            resetForm();
          } catch {}
        }}
      >
        {({ getFieldProps }) => (
          <StyledForm>
            <TextOfComment
              {...getFieldProps("text")}
              placeholder="What are your thoughts?"
            />
            <FormFooter>
              <ErrorMessage name="text">{(err) => <Error>{err}</Error>}</ErrorMessage>
              <SubmitButton type="submit">Comment</SubmitButton>
            </FormFooter>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};
