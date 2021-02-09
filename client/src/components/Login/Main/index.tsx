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
} from "./styled";
import { Formik } from "formik";

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
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ getFieldProps }) => (
            <Form>
              <Input {...getFieldProps("username")} type="text" placeholder="username" />
              <Input
                {...getFieldProps("password")}
                type="password"
                placeholder="password"
              />
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
