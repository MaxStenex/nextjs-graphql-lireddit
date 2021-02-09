import styled from "styled-components";
import { PrimaryButton } from "../../../styles/shared/PrimaryButton";
import { SecondaryButton } from "../../../styles/shared/SecondaryButton";
import { DefaultInput } from "../../../styles/shared/DefaultInput";

export const Wrapper = styled.header`
  padding: 4px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 18px;
  position: fixed;
  width: 100%;
  top: 0;
`;

export const Logo = styled.img`
  height: 100%;
  max-width: 120px;
  cursor: pointer;
  flex: 1;
  margin-right: 20px;
`;

export const SearchInput = styled(DefaultInput)`
  padding: 8px 8px 8px 13px;
  flex: 1;
  max-width: 550px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
`;

export const SignupButton = styled(PrimaryButton)`
  padding: 5px 20px;
`;

export const LoginButton = styled(SecondaryButton)`
  margin-right: 10px;
  padding: 5px 20px;
`;
