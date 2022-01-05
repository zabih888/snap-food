import { useMediaQuery } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {
  flexAlign,
  flexBetween,
  LargeSize,
  media,
  setColor,
} from "../../styles";
import { ButtonLogin, ButtonShopLogin } from "../Global/Buttons/ButtonLogin";
import MenuSlider from "../Global/MenuSlider";
import { SvgLogin, SvgLogoSmall } from "../Global/SvgWrapp";

const Header = () => {
  const matchesLarge = useMediaQuery(LargeSize);
  return (
    <HeaderWrap>
      <Head>
        <div className="right">
          {matchesLarge ? <SvgLogoSmall /> : undefined}
          <a className="choiceAddress">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                fill="currentColor"
                width={22}
              >
                <path d="M3.22582 9.83268H1.50008C1.03984 9.83268 0.666748 9.45959 0.666748 8.99935C0.666748 8.53911 1.03984 8.16602 1.50008 8.16602H3.22582C3.59125 5.61127 5.61201 3.59052 8.16675 3.22509V1.49935C8.16675 1.03911 8.53984 0.666016 9.00008 0.666016C9.46032 0.666016 9.83342 1.03911 9.83342 1.49935V3.22509C12.3882 3.59052 14.4089 5.61127 14.7743 8.16602H16.5001C16.9603 8.16602 17.3334 8.53911 17.3334 8.99935C17.3334 9.45959 16.9603 9.83268 16.5001 9.83268H14.7743C14.4089 12.3874 12.3882 14.4082 9.83342 14.7736V16.4993C9.83342 16.9596 9.46032 17.3327 9.00008 17.3327C8.53984 17.3327 8.16675 16.9596 8.16675 16.4993V14.7736C5.61201 14.4082 3.59125 12.3874 3.22582 9.83268ZM9.00008 13.166C11.3013 13.166 13.1667 11.3005 13.1667 8.99935C13.1667 6.69816 11.3013 4.83268 9.00008 4.83268C6.69889 4.83268 4.83342 6.69816 4.83342 8.99935C4.83342 11.3005 6.69889 13.166 9.00008 13.166ZM9.00008 10.666C8.07961 10.666 7.33342 9.91982 7.33342 8.99935C7.33342 8.07887 8.07961 7.33268 9.00008 7.33268C9.92056 7.33268 10.6667 8.07887 10.6667 8.99935C10.6667 9.91982 9.92056 10.666 9.00008 10.666Z" />
              </svg>
            </span>
            آدرس انتخابی
          </a>
        </div>
        {matchesLarge ? (
          <div className="inputWrap">
            <input placeholder="جست و جو در اسنپ فود" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17 17"
              fill="currentColor"
              width={17}
              className="icon"
            >
              <path d="M7.75008 0.666016C11.6621 0.666016 14.8334 3.83733 14.8334 7.74935C14.8334 9.40479 14.2655 10.9276 13.3139 12.1336L16.5477 15.3684C16.8731 15.6939 16.8731 16.2215 16.5477 16.5469C16.2222 16.8724 15.6946 16.8724 15.3692 16.5469L12.1343 13.3132C10.9283 14.2648 9.40552 14.8327 7.75008 14.8327C3.83806 14.8327 0.666748 11.6614 0.666748 7.74935C0.666748 3.83733 3.83806 0.666016 7.75008 0.666016ZM7.75008 2.33268C4.75854 2.33268 2.33341 4.75781 2.33341 7.74935C2.33341 10.7409 4.75854 13.166 7.75008 13.166C10.7416 13.166 13.1667 10.7409 13.1667 7.74935C13.1667 4.75781 10.7416 2.33268 7.75008 2.33268Z"></path>
            </svg>
          </div>
        ) : undefined}

        {matchesLarge ? (
          <div className="left">
            <ButtonShopLogin />
            <ButtonLogin />
          </div>
        ) : (
          <div className="leftSmall">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17 17"
              fill="currentColor"
              width={17}
              className="icon"
            >
              <path d="M7.75008 0.666016C11.6621 0.666016 14.8334 3.83733 14.8334 7.74935C14.8334 9.40479 14.2655 10.9276 13.3139 12.1336L16.5477 15.3684C16.8731 15.6939 16.8731 16.2215 16.5477 16.5469C16.2222 16.8724 15.6946 16.8724 15.3692 16.5469L12.1343 13.3132C10.9283 14.2648 9.40552 14.8327 7.75008 14.8327C3.83806 14.8327 0.666748 11.6614 0.666748 7.74935C0.666748 3.83733 3.83806 0.666016 7.75008 0.666016ZM7.75008 2.33268C4.75854 2.33268 2.33341 4.75781 2.33341 7.74935C2.33341 10.7409 4.75854 13.166 7.75008 13.166C10.7416 13.166 13.1667 10.7409 13.1667 7.74935C13.1667 4.75781 10.7416 2.33268 7.75008 2.33268Z"></path>
            </svg>
            <SvgLogin />
          </div>
        )}
      </Head>
      <div style={{ padding: "0 2rem" }}>
        <MenuSlider />
      </div>
    </HeaderWrap>
  );
};

export default Header;

// =======================================================================
//                              STYLE
// =======================================================================

const HeaderWrap = styled.div`
 position: fixed;
 width: 100%;
 background-color: ${setColor.background};
 z-index: 20;
`
const Head = styled.header`
  ${flexBetween}
  padding: 1rem 1rem 0 1rem;
  ${media.large`
  padding: 1rem 1rem 0 3rem;
  `}

  .right {
    display: flex;
    .choiceAddress {
      ${media.large`
        margin-right: 1.5rem;
        `}
      font-weight: 600;
      cursor: pointer;
      position: relative;
      padding-right: 2rem;
      ${flexAlign}
      .icon {
        color: ${setColor.gray};
        position: absolute;
        right: 0;
        top: 60%;
        transform: translateY(-50%);
      }
    }
  }

  .left {
    display: flex;
  }
  .leftSmall {
    display: flex;
    .icon {
      margin-left: 1.5rem;
      cursor: pointer;
    }
  }

  .inputWrap {
    width: 30%;
    position: relative;

    input {
      background-color: ${setColor.containerDark};
      width: 100%;
      height: 2.75rem;
      border-radius: 0.375rem;
      border: none;

      &::placeholder {
        letter-spacing: -1px;
        color: ${setColor.gray};
        padding-right: 3rem;
        font-size: 16px;
      }
    }
    .icon {
      color: ${setColor.gray};
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
