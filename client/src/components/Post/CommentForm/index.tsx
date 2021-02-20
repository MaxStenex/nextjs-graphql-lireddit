import { Formik, ErrorMessage } from "formik";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { data } = useMeQuery();
  const [createComment] = useCreateCommentMutation();

  return (
    <Wrapper>
      <Title>
        {data?.me.username ? (
          <>
            Comment as <TitleUsernameLink>{data?.me.username}</TitleUsernameLink>
          </>
        ) : (
          <div>Login for commenting.</div>
        )}
      </Title>
      <Formik
        initialValues={{ text: "" }}
        validationSchema={createCommentSchema}
        onSubmit={async ({ text }, { resetForm, setErrors }) => {
          try {
            if (!data?.me.username) {
              setErrors({ text: "Login for paste comment" });
            }
            await createComment({
              variables: {
                text,
                postId,
              },
            });
            resetForm();
            router.replace(router.asPath);
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
