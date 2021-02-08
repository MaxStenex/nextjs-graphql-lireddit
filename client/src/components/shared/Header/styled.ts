import styled from "styled-components";
import { PrimaryButton } from "../Buttons/Primary";
import { SecondaryButton } from "../Buttons/Secondary";

export const Wrapper = styled.header`
  padding: 4px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 18px;
`;

export const Logo = styled.img`
  height: 100%;
  max-width: 120px;
  cursor: pointer;
  flex: 1;
  margin-right: 20px;
`;

export const SearchInput = styled.input`
  background-color: #fafafa;
  border-radius: 5px;
  padding: 8px 8px 8px 13px;
  display: block;
  flex: 1;
  max-width: 550px;
  border: 1px solid #ccc;
  &:hover {
    border: 1px solid blue;
    transition: 0.2s;
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
`;

export const SignupLink = styled(PrimaryButton)`
  padding: 5px 20px;
`;

export const LoginLink = styled(SecondaryButton)`
  margin-right: 10px;
  padding: 5px 20px;
`;
