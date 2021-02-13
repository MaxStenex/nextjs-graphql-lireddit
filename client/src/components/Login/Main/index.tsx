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
  ResponseError,
} from "./styled";
import { ErrorMessage, Formik } from "formik";
import { loginSchema } from "../../../utils/validaton/login";
import { useLoginMutation } from "../../../generated/apollo";
import { useRouter } from "next/router";

export const Main = () => {
  const [login] = useLoginMutation();
  const router = useRouter();

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
          onSubmit={async ({ username, password }, { setStatus, resetForm }) => {
            try {
              await login({ variables: { username, password } });
              router.push("/");
            } catch (error) {
              if (error.graphQLErrors.length > 0) {
                setStatus({ success: false, message: "Invalid username or password" });
              }
            }
          }}
        >
          {({ getFieldProps, status }) => (
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
              {status && !status.success && (
                <ResponseError>{status.message}</ResponseError>
              )}
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
