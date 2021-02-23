import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: 15px;
  position: relative;
`;

export const OpenOptionsButton = styled.button<{ isAuthed: boolean }>`
  background-color: transparent;
  display: flex;
  padding: 3px 15px;
  border: 1px solid transparent;
  border-radius: 3px;
  align-items: center;
  ${(props) => props.isAuthed && "min-width:180px;"}
  &:hover,
  &:focus {
    border: 1px solid #ccc;
    transition: 0.2s;
  }
`;

export const UserName = styled.div`
  font-size: 14px;
  margin-left: 5px;
  color: ${({ theme }) => theme.fontColor.primary};
`;

export const OpenOptionsImage = styled.img`
  height: 25px;
  background-color: #fff;
  padding: 3px;
  border-radius: 40%;
`;

export const Popup = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.block};
  min-width: 180px;
  width: 100%;
  right: 0;
  top: calc(100% + 5px);
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding-top: 3px;
`;

export const OptionsBlock = styled.div``;

export const OptionTitle = styled.h3`
  padding: 3px 10px;
  color: #968a8c;
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-top: 3px;
`;

export const OptionList = styled.ul`
  list-style: none;
`;

export const OptionItem = styled.li`
  &:hover {
    background-color: ${({ theme }) => theme.bg.primary};
    cursor: pointer;
  }
`;

export const OptionText = styled.span`
  font-size: 14px;
  padding: 12px 0px 12px 20px;
  display: block;
  color: ${({ theme }) => theme.fontColor.primary};
`;

export const PopupFooter = styled.div``;

export const PopupFooterLink = styled.a`
  padding: 10px;
  width: 100%;
  background-color: transparent;
  border-top: 1px solid #ccc;
  display: flex;
  color: ${({ theme }) => theme.fontColor.primary};
  &:hover {
    background-color: ${({ theme }) => theme.bg.primary};
  }
`;

export const PopupFooterText = styled.span`
  font-size: 16px;
`;

export const PopupFooterIcon = styled.img`
  height: 20px;
  margin-right: 5px;
`;

export const LogoutButton = styled.button`
  padding: 10px;
  width: 100%;
  background-color: transparent;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.fontColor.primary};
  &:hover {
    background-color: ${({ theme }) => theme.bg.primary};
  }
`;
