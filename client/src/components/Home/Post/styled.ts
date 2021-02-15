import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 30px;
  min-height: 200px;
  background-color: #fff;
  cursor: pointer;
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
`;

export const VoteButton = styled.button`
  font-size: 10px;
  background-color: transparent;
`;

export const VoteUpImage = styled.img`
  height: 25px;
  padding: 4px;
  &:hover,
  &:focus {
    background-color: #fd4500;
    transition: 0.2s;
  }
`;

export const VoteDownImage = styled(VoteUpImage)`
  transform: rotate(180deg);
  &:hover,
  &:focus {
    background-color: #0079d3;
  }
`;

export const VoteCount = styled.div`
  font-weight: 700;
  margin: 5px 0px;
  text-align: center;
`;

export const MainSection = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div``;

export const PostedBy = styled.div`
  color: #838789;
  font-size: 13px;
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
`;

export const Footer = styled.div``;

export const Comments = styled.div`
  color: #838789;
  font-size: 12px;
  font-weight: 700;
`;
