import React from "react";
import {
  Section,
  Container,
  Title,
  Sutbitle,
  Form,
  Input,
  SubmitButton,
  ToLogin,
  Error,
} from "./styled";
import { Formik, ErrorMessage } from "formik";
import { registerSchema } from "../../../utils/validaton/register";

export const Main = () => {
  return (
    <Section>
      <Container>
        <Title>Sign up</Title>
        <Sutbitle>
          By continuing, you agree to our User Agreement and Privacy Policy.
        </Sutbitle>
        <Formik
          initialValues={{ email: "", username: "", password: "", confirmPassword: "" }}
          validationSchema={registerSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ getFieldProps }) => (
            <Form>
              <Input {...getFieldProps("email")} type="email" placeholder="email" />
              <ErrorMessage name="email">{(msg) => <Error>{msg}</Error>}</ErrorMessage>
              <Input {...getFieldProps("username")} type="text" placeholder="username" />
              <ErrorMessage name="username">{(msg) => <Error>{msg}</Error>}</ErrorMessage>
              <Input
                {...getFieldProps("password")}
                type="password"
                placeholder="password"
              />
              <ErrorMessage name="password">{(msg) => <Error>{msg}</Error>}</ErrorMessage>
              <Input
                {...getFieldProps("confirmPassword")}
                type="password"
                placeholder="confirm password"
              />
              <ErrorMessage name="confirmPassword">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
              <SubmitButton type="submit">Sign up</SubmitButton>
            </Form>
          )}
        </Formik>
        <ToLogin>
          Already a redditor? <a href="/login">LOG IN</a>
        </ToLogin>
      </Container>
    </Section>
  );
};
