import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.color.primary};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.bg.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  &:hover {
    transition: 0.2s;
    background-color: #1784ff;
  }
`;
