import styled from "styled-components";
import { Form as FormikForm } from "formik";
import { PrimaryButton } from "../../../styles/shared/PrimaryButton";
import { DefaultInput } from "../../../styles/shared/DefaultInput";

export const Section = styled.section`
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
  max-width: 500px;
  padding-top: 60px;
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 6px;
  border: 2px solid #ccc;
  padding: 20px 20px 15px 20px;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  font-size: 23px;
`;

export const Sutbitle = styled.h3`
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 14px;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled(DefaultInput)`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const SubmitButton = styled(PrimaryButton)`
  border-radius: 3px;
  text-align: center;
  padding: 5px 20px;
  text-transform: uppercase;
`;

export const ToRegister = styled.div`
  font-size: 14px;
  & a {
    &:hover {
      text-decoration: underline;
    }
  }
`;
