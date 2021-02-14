import styled from "styled-components";
import { DefaultInput } from "../../../styles/shared/DefaultInput";
import { SectionUnderHeader } from "../../../styles/shared/SectionUnderHeader";

export const Wrapper = styled(SectionUnderHeader)`
  display: flex;
  padding: 15px 10px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const Avatar = styled.img`
  height: 40px;
  margin-right: 10px;
`;

export const CreatePostInput = styled(DefaultInput)`
  flex: 1;
  padding: 5px 10px;
`;
