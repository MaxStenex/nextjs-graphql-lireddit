import styled from "styled-components";

export const Wrapper = styled.article<{ isPostPage?: boolean }>`
  display: flex;
  border-radius: 5px;
  margin-top: 30px;
  min-height: ${(props) => (props.isPostPage ? "300px" : "200px")};
  background-color: ${({ theme }) => theme.block};
  border: 1px solid ${({ theme }) => theme.borderColor};

  &:hover,
  &:focus {
    border: 1px solid #767676;
  }
`;

export const VotesSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 40px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 5px 0px 0px 5px;
  background-color: ${({ theme }) => theme.block};
`;

export const VoteUpButton = styled.button<{ voted: boolean }>`
  height: 25px;
  font-size: 10px;
  background-color: ${(props) => (props.voted ? "#fd4500" : "transparent")};
  user-select: none;
  padding: 4px;
  &:hover,
  &:focus {
    &:not(:disabled) {
      background-color: #fd4500;
      transition: 0.2s;
    }
  }
`;

export const VoteDownButton = styled(VoteUpButton)`
  background-color: ${(props) => (props.voted ? "#0079d3" : "transparent")};
  &:hover,
  &:focus {
    &:not(:disabled) {
      background-color: #0079d3;
      transition: 0.2s;
    }
  }
`;

export const VoteUpImage = styled.img`
  height: 100%;
`;

export const VoteDownImage = styled(VoteUpImage)`
  transform: rotate(180deg);
`;

export const VoteCount = styled.div`
  font-weight: 700;
  margin: 5px 0px;
  text-align: center;
  color: ${({ theme }) => theme.fontColor.primary};
`;

export const MainSection = styled.div<{ isPostPage?: boolean }>`
  cursor: ${(props) => (props.isPostPage ? "auto" : "pointer")};
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.fontColor.primary};
`;

export const Header = styled.div``;

export const PostedBy = styled.div`
  color: #838789;
  font-size: 13px;
`;

export const Username = styled.span`
  cursor: pointer;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-top: 10px;
`;

export const TextAndFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
`;

export const Text = styled.p`
  flex: 1;
  margin-top: 10px;
  word-break: break-all;
  line-height: 1.3;
`;

export const Footer = styled.div``;

export const Comments = styled.div`
  color: #838789;
  font-size: 12px;
  font-weight: 700;
  margin-top: 20px;
`;
