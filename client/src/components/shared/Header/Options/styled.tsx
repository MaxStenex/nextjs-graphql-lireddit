import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: 15px;
  position: relative;
`;

export const OpenOptionsButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 3px 15px;
  border: 1px solid transparent;
  border-radius: 3px;
  &:hover {
    border: 1px solid #ccc;
    transition: 0.2s;
  }
`;

export const OpenOptionsImage = styled.img`
  height: 25px;
`;

export const Popup = styled.div`
  position: absolute;
  background-color: #fff;
  min-width: 200px;
  width: 100%;
  right: 0;
  top: calc(100% + 5px);
  border-radius: 3px;
  border: 1px solid #ccc;
  padding-top: 3px;
  border-bottom: none;
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
    background-color: #0079d3;
    cursor: pointer;
    & span {
      color: #fff;
    }
  }
`;

export const OptionText = styled.span`
  font-size: 14px;
  padding: 12px 0px 12px 20px;
  display: block;
`;

export const PopupFooter = styled.div``;

export const PopupFooterLink = styled.a`
  padding: 7px 10px;
  width: 100%;
  background-color: transparent;
  border-top: 1px solid #ccc;
  display: flex;
  &:hover {
    background-color: #0079d3;
    color: #fff;
  }
`;

export const PopupFooterText = styled.span`
  font-size: 17px;
`;

export const PopupFooterIcon = styled.img`
  height: 20px;
  margin-right: 5px;
`;
