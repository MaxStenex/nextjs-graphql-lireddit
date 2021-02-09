import React from "react";
import {
  Section,
  Container,
  Title,
  Sutbitle,
  Form,
  Input,
  SubmitButton,
  ToRegister,
  Error,
} from "./styled";
import { ErrorMessage, Formik } from "formik";
import { loginSchema } from "../../../utils/validaton/login";

export const Main = () => {
  return (
    <Section>
      <Container>
        <Title>Login</Title>
        <Sutbitle>
          By continuing, you agree to our User Agreement and Privacy Policy.
        </Sutbitle>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ getFieldProps }) => (
            <Form>
              <Input {...getFieldProps("username")} type="text" placeholder="username" />
              <ErrorMessage name="username">{(msg) => <Error>{msg}</Error>}</ErrorMessage>
              <Input
                {...getFieldProps("password")}
                type="password"
                placeholder="password"
              />
              <ErrorMessage name="password">{(msg) => <Error>{msg}</Error>}</ErrorMessage>
              <SubmitButton type="submit">log in</SubmitButton>
            </Form>
          )}
        </Formik>
        <ToRegister>
          New to Reddit? <a href="/register">SIGN UP</a>
        </ToRegister>
      </Container>
    </Section>
  );
};
