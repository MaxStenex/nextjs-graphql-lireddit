import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  Wrapper,
  OpenOptionsButton,
  OpenOptionsImage,
  Popup,
  OptionsBlock,
  OptionTitle,
  OptionList,
  OptionItem,
  PopupFooter,
  PopupFooterLink,
  OptionText,
  PopupFooterText,
  PopupFooterIcon,
  UserName,
} from "./styled";

type Props = {
  username: string | null;
};

export const Options: React.FC<Props> = ({ username }) => {
  const [popupOpened, setPopupOpened] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = (evt: any) => {
      if (popupOpened && !evt.path.includes(popupRef.current)) {
        setPopupOpened(false);
      }
    };
    window.addEventListener("click", clickHandler);

    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, [popupOpened]);

  return (
    <Wrapper>
      <OpenOptionsButton
        isAuthed={!!username}
        onClick={() => setPopupOpened(!popupOpened)}
      >
        {username ? (
          <>
            <OpenOptionsImage src={require("../../../../images/Header/user.svg")} />
            <UserName>{username}</UserName>
          </>
        ) : (
          <OpenOptionsImage
            src={require("../../../../images/Header/settings.svg")}
            alt="Options"
          />
        )}
      </OpenOptionsButton>
      {popupOpened && (
        <Popup ref={popupRef}>
          <OptionsBlock>
            <OptionTitle>Mode</OptionTitle>
            <OptionList>
              <OptionItem>
                <OptionText>Night mode</OptionText>
              </OptionItem>
            </OptionList>
          </OptionsBlock>
          <OptionsBlock>
            <OptionTitle>More Stuff</OptionTitle>
            <OptionList>
              <OptionItem>
                <OptionText>Just Text :D</OptionText>
              </OptionItem>
            </OptionList>
          </OptionsBlock>
          <PopupFooter>
            <Link href="/register">
              <PopupFooterLink>
                <PopupFooterIcon
                  src={require("../../../../images/Header/signup.svg")}
                ></PopupFooterIcon>
                <PopupFooterText>Sign up</PopupFooterText>
              </PopupFooterLink>
            </Link>
          </PopupFooter>
        </Popup>
      )}
    </Wrapper>
  );
};
