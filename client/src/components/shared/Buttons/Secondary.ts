import styled from "styled-components";

export const SecondaryButton = styled.a`
  background-color: ${(props) => props.theme.bg.secondary};
  color: ${(props) => props.theme.color.secondary};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.bg.primary};
  display: flex;
  align-items: center;
  &:hover {
    transition: 0.2s;
    background-color: #d6e6ff;
  }
`;
