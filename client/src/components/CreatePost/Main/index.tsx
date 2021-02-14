import React from "react";
import {
  Wrapper,
  Section,
  Title,
  Input,
  TextField,
  StyledForm,
  SubmitButton,
  Error,
} from "./styled";
import { Formik, ErrorMessage } from "formik";
import { createPostSchema } from "../../../utils/validaton/createPost";

export const Main = () => {
  return (
    <Wrapper>
      <Section>
        <Title>Create a post</Title>
        <Formik
          initialValues={{ title: "", text: "" }}
          validationSchema={createPostSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ getFieldProps }) => (
            <StyledForm>
              <Input {...getFieldProps("title")} type="text" placeholder="Title" />
              <ErrorMessage name="title">{(msg) => <Error>{msg}</Error>}</ErrorMessage>
              <TextField {...getFieldProps("text")} placeholder="Text" />
              <ErrorMessage name="text">{(msg) => <Error>{msg}</Error>}</ErrorMessage>
              <SubmitButton type="submit">Post</SubmitButton>
            </StyledForm>
          )}
        </Formik>
      </Section>
    </Wrapper>
  );
};
