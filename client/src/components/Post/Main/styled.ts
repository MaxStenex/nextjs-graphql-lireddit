import styled from "styled-components";

export const Wrapper = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.body};
  padding-top: 100px;
`;

export const MainContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
