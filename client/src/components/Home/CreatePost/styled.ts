import styled from "styled-components";
import { DefaultInput } from "../../../styles/shared/DefaultInput";
import { SectionUnderHeader } from "../../../styles/shared/SectionUnderHeader";

export const Wrapper = styled(SectionUnderHeader)`
  display: flex;
  padding: 15px 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.block};
`;

export const Avatar = styled.img`
  height: 40px;
  margin-right: 10px;
  background-color: #fff;
  padding: 5px;
  border-radius: 30%;
`;

export const CreatePostInput = styled(DefaultInput)`
  flex: 1;
  padding: 5px 10px;
`;
