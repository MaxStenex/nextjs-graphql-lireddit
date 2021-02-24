import styled from "styled-components";
import { Form } from "formik";
import { FormErrorMessage } from "../../../styles/shared/FormErrorMessage";

export const Wrapper = styled.div`
  max-width: 90%;
  margin: 0px auto;
  margin-top: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.fontColor.primary};
`;

export const TitleUsernameLink = styled.a`
  color: #ce6262;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const TextOfComment = styled.textarea`
  border: 1px solid #ccc;
  border-bottom: 1px solid transparent;
  border-radius: 5px 5px 0px 0px;
  padding: 6px 10px;
  resize: vertical;
  min-height: 125px;
  max-height: 200px;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e8e8e8;
  align-items: center;
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-top: none;
`;

export const SubmitButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #be2f2f;
  color: #fff;
  font-size: 15px;
  margin-left: auto;
  &:hover,
  &:focus {
    background-color: #ff7c7c;
    transition: 0.2s;
  }
`;

export const Error = styled(FormErrorMessage)``;
