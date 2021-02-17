import { Formik } from "formik";
import React from "react";
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
  return (
    <Wrapper>
      <Title>
        Comment as <TitleUsernameLink>stenex1337</TitleUsernameLink>
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
