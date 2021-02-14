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
  Success,
} from "./styled";
import { Formik, ErrorMessage } from "formik";
import { createPostSchema } from "../../../utils/validaton/createPost";
import { useCreatePostMutation } from "../../../generated/apollo";

export const Main = () => {
  const [createPost] = useCreatePostMutation();

  return (
    <Wrapper>
      <Section>
        <Title>Create a post</Title>
        <Formik
          initialValues={{ title: "", text: "" }}
          validationSchema={createPostSchema}
          onSubmit={async ({ title, text }, { resetForm, setStatus }) => {
            try {
              setStatus({});
              await createPost({ variables: { title, text } });
              resetForm();
              setStatus({ isSuccess: true, message: "Post successfully created" });
            } catch (error) {
              setStatus({ isSuccess: false, message: "Server error" });
            }
          }}
        >
          {({ getFieldProps, status, isSubmitting }) => (
            <StyledForm>
              <Input {...getFieldProps("title")} type="text" placeholder="Title" />
              <ErrorMessage name="title">{(msg) => <Error>{msg}</Error>}</ErrorMessage>
              <TextField {...getFieldProps("text")} placeholder="Text" />
              <ErrorMessage name="text">{(msg) => <Error>{msg}</Error>}</ErrorMessage>
              {status &&
                (status.isSuccess === true ? (
                  <Success>{status.message}</Success>
                ) : (
                  <Error>{status.message}</Error>
                ))}
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Post"}
              </SubmitButton>
            </StyledForm>
          )}
        </Formik>
      </Section>
    </Wrapper>
  );
};
