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
  SuccessMessage,
} from "./styled";
import { Formik, ErrorMessage } from "formik";
import { registerSchema } from "../../../utils/validaton/register";
import { useRegisterMutation } from "../../../generated/apollo";
import { graphqlErrorToMap } from "../../../utils/validaton/graphqlErrorToMap";

export const Main = () => {
  const [register] = useRegisterMutation();

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
          onSubmit={async (
            { email, username, password },
            { setErrors, setStatus, resetForm }
          ) => {
            try {
              setStatus();
              await register({
                variables: { input: { email, username, password } },
              });
              resetForm();
              setStatus({ success: "Registrated successfully" });
            } catch (error) {
              const isValidationErrors = error.graphQLErrors[0].message.match(
                /Validation/i
              );

              if (isValidationErrors) {
                const errors = graphqlErrorToMap(error.graphQLErrors[0]);
                setErrors(errors);
              }
            }
          }}
        >
          {({ getFieldProps, status }) => (
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
              {status && status.success && (
                <SuccessMessage>{status.success}</SuccessMessage>
              )}
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
