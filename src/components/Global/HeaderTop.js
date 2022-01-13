import { TextField, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  borderRadius,
  flexAlign,
  flexBetween,
  flexCenter,
  LargeSize,
  media,
  setColor,
  shadow,
} from "../../styles";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { ButtonLogin } from "./Buttons/ButtonLogin";
import { ButtonShopLogin } from "./Buttons/ButtonShopLogin";
import { SvgLogoSmall } from "./SvgWrapp";
import { useSelector } from "react-redux";

const HeaderTop = () => {
  const matchesLarge = useMediaQuery(LargeSize);
  const { cart } = useSelector((state) => state.cart);
  return (
    <Head>
      <div className="right">
        <SvgLogoSmall />
        {matchesLarge ? (
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
        ) : undefined}
      </div>
      {matchesLarge ? (
        <div className="inputWrap">
          <TextField
            fullWidth
            variant="filled"
            placeholder="جست و جو در اسنپ فود"
          />

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
      <div className="left">
        {matchesLarge ? <ButtonShopLogin /> : undefined}
        <ButtonLogin />
        <Link to="/cart" className="iconWrap">
          <LocalGroceryStoreOutlinedIcon className="icon" />
          <span className="badge">{cart.length}</span>
        </Link>
      </div>
    </Head>
  );
};

export default HeaderTop;
// =======================================================================
//                              STYLE
// =======================================================================
const Head = styled.header`
  position: fixed;
  width: 100%;
  z-index: 20;
  background-color: ${setColor.whiteMain};
  ${flexBetween}
  padding: 1rem;
  ${media.large`
  padding: 1rem 3rem;
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
    .iconWrap {
      margin-right: 1rem;
      position: relative;
      .icon {
        color: ${setColor.blackLight};
        font-size: 1.7rem;
      }
      .badge {
        position: absolute;
        ${flexCenter};
        font-size: 13px;
        font-weight: 700;
        top: 20px;
        left: 10px;
        width: 24px;
        height: 24px;
        background-color: ${setColor.primaryLight};
        border-radius: 50%;
        color: ${setColor.whiteMain};
        z-index: 10;
      }
    }
  }

  .inputWrap {
    width: 30%;
    position: relative;

    input {
      border-radius: 1rem;
      ${shadow};

      &::placeholder {
        letter-spacing: -1px;
        top: 50%;
        transform: translateY(-30%);
      }
    }
    .icon {
      color: ${setColor.gray};
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
