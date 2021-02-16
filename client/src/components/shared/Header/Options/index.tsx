import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useLogoutMutation } from "../../../../generated/apollo";
import { initializeApollo } from "../../../../lib/apollo";
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
  LogoutButton,
} from "./styled";

type Props = {
  username: string | null;
};

export const Options: React.FC<Props> = ({ username }) => {
  const [popupOpened, setPopupOpened] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const [logoutMutation] = useLogoutMutation();
  const apolloClient = initializeApollo();

  const onLogoutButtonClick = async () => {
    try {
      await logoutMutation();
      await apolloClient.cache.reset();
      setPopupOpened(false);
    } catch (error) {
      console.error(error);
    }
  };

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
            <OpenOptionsImage src={require("../../../../images/user.svg")} />
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
            {username ? (
              <LogoutButton onClick={onLogoutButtonClick}>
                <PopupFooterIcon
                  src={require("../../../../images/Header/signup.svg")}
                ></PopupFooterIcon>
                <PopupFooterText>Logout</PopupFooterText>
              </LogoutButton>
            ) : (
              <Link href="/login">
                <PopupFooterLink>
                  <PopupFooterIcon
                    src={require("../../../../images/Header/signup.svg")}
                  />
                  <PopupFooterText>Login / Sign up</PopupFooterText>
                </PopupFooterLink>
              </Link>
            )}
          </PopupFooter>
        </Popup>
      )}
    </Wrapper>
  );
};
