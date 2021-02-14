import styled from "styled-components";
import { SectionUnderHeader } from "../../../styles/shared/SectionUnderHeader";
import { Form } from "formik";
import { DefaultInput } from "../../../styles/shared/DefaultInput";
import { PrimaryButton } from "../../../styles/shared/PrimaryButton";
import { FormErrorMessage } from "../../../styles/shared/FormErrorMessage";

export const Wrapper = styled.main`
  max-width: 700px;
  margin: 0 auto;
`;

export const Section = styled(SectionUnderHeader)``;

export const Title = styled.h2`
  padding-bottom: 20px;
  border-bottom: 1px solid #fff;
  font-size: 20px;
`;

export const StyledForm = styled(Form)`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(DefaultInput)`
  padding: 10px 15px;
  margin-bottom: 10px;
`;

export const TextField = styled.textarea`
  padding: 10px 15px;
  resize: vertical;
  background-color: #fafafa;
  border-radius: 5px;
  border: 1px solid #ccc;
  min-height: 150px;
  max-height: 300px;
  margin-bottom: 10px;

  &:hover,
  &:focus {
    border: 1px solid blue;
    transition: 0.2s;
  }
`;

export const SubmitButton = styled(PrimaryButton)`
  flex: 0;
  width: 150px;
  padding: 7px 20px;
  border-radius: 3px;
  margin-top: 5px;
`;

export const Error = styled(FormErrorMessage)`
  margin-bottom: 10px;
  margin-left: 5px;
`;
