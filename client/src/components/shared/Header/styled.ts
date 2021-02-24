import styled from "styled-components";
import { PrimaryButton } from "../../../styles/shared/PrimaryButton";
import { SecondaryButton } from "../../../styles/shared/SecondaryButton";

export const Wrapper = styled.header`
  padding: 4px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.block};
  font-size: 18px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const Logo = styled.img`
  height: 100%;
  max-width: 120px;
  cursor: pointer;
  flex: 1;
  margin-right: 20px;
  background-color: #fff;
  border-radius: 20px;
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
