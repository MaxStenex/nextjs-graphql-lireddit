import { Formik } from "formik";
import React from "react";
import { useMeQuery } from "../../../generated/apollo";
import {
  Wrapper,
  Title,
  TitleUsernameLink,
  StyledForm,
  TextOfComment,
  FormFooter,
  SubmitButton,
} from "./styled";

export const CommentForm = () => {
  const { data } = useMeQuery();

  return (
    <Wrapper>
      <Title>
        Comment as <TitleUsernameLink>{data?.me.username}</TitleUsernameLink>
      </Title>
      <Formik
        initialValues={{ text: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ getFieldProps }) => (
          <StyledForm>
            <TextOfComment
              {...getFieldProps("text")}
              placeholder="What are your thoughts?"
            />
            <FormFooter>
              <SubmitButton type="submit">Comment</SubmitButton>
            </FormFooter>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};
