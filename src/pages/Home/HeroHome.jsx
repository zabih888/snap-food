import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../../components/Global/Container";
import {
  SvgLoction,
  SvgLogin,
  SvgLogo,
  SvgSreach,
} from "../../components/Global/SvgWrapp";
import {
  flexAlign,
  flexBetween,
  flexCenter,
  media,
  MediumSize,
  setColor,
  shadow,
} from "../../styles";
import heroImg from "../../assets/images/main/hero-image.png";
import { useMediaQuery } from "@mui/material";
import {
  ButtonLogin,
  ButtonShopLogin,
} from "../../components/Global/Buttons/ButtonLogin";
import MenuSlider from "../../components/Global/MenuSlider";

const HeroHome = () => {
  const matchesMedium = useMediaQuery(MediumSize);
  return (
    <Container bckColor={setColor.containerLight} bottomRadius="7.5rem">
      <Wrap>
        <img src={heroImg} className="hero" />
        <div className="head">
          <SvgLogo />
          <div className="leftWrap">
            {matchesMedium ? <ButtonShopLogin /> : undefined}
            {matchesMedium ? <ButtonLogin /> : <SvgLogin />}
          </div>
        </div>

        <div className="main">
          <h1>
            سفارش آنلاین <span>غذا</span>
          </h1>
          <p>
            سفارش آنلاین از رستوران‌ها،‌شیرینی‌فروشی‌ها، کافی‌شاپ‌ها،
            <br /> سوپرمارکت‌ها،‌ نانوایی‌ها و ...
          </p>
          <div className="inputWrap">
            <span className="iconLocation">
              <svg
                viewBox="0 0 12 14"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.11216 9.2305C10.8115 7.50007 10.8115 4.7073 9.11216 2.97687C7.39661 1.22993 4.60338 1.22993 2.88783 2.97687C1.18849 4.7073 1.18849 7.50007 2.88783 9.2305L5.89303 12.2907C5.91798 12.3161 5.95396 12.3333 5.99999 12.3333C6.04603 12.3333 6.08201 12.3161 6.10696 12.2907L9.11216 9.2305ZM10.0069 10.1839C12.2199 7.93048 12.2199 4.27689 10.0069 2.02343C7.79396 -0.230038 4.20603 -0.230038 1.99306 2.02343C-0.219915 4.27689 -0.219915 7.93048 1.99306 10.1839L4.99826 13.2441C5.5515 13.8075 6.44849 13.8075 7.00173 13.2441L10.0069 10.1839Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.99999 4.89127C5.29867 4.89127 4.77999 5.46244 4.77999 6.10368C4.77999 6.74492 5.29867 7.3161 5.99999 7.3161C6.70132 7.3161 7.22 6.74492 7.22 6.10368C7.22 5.46244 6.70132 4.89127 5.99999 4.89127ZM5.99999 3.55794C4.61928 3.55794 3.49999 4.69771 3.49999 6.10368C3.49999 7.50966 4.61928 8.64943 5.99999 8.64943C7.38071 8.64943 8.5 7.50966 8.5 6.10368C8.5 4.69771 7.38071 3.55794 5.99999 3.55794Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <input placeholder="ابتدا آدرستان را انتخاب کنید." />
            <span className="iconSearch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17 17"
                fill="currentColor"
                width={17}
              >
                <path d="M7.75008 0.666016C11.6621 0.666016 14.8334 3.83733 14.8334 7.74935C14.8334 9.40479 14.2655 10.9276 13.3139 12.1336L16.5477 15.3684C16.8731 15.6939 16.8731 16.2215 16.5477 16.5469C16.2222 16.8724 15.6946 16.8724 15.3692 16.5469L12.1343 13.3132C10.9283 14.2648 9.40552 14.8327 7.75008 14.8327C3.83806 14.8327 0.666748 11.6614 0.666748 7.74935C0.666748 3.83733 3.83806 0.666016 7.75008 0.666016ZM7.75008 2.33268C4.75854 2.33268 2.33341 4.75781 2.33341 7.74935C2.33341 10.7409 4.75854 13.166 7.75008 13.166C10.7416 13.166 13.1667 10.7409 13.1667 7.74935C13.1667 4.75781 10.7416 2.33268 7.75008 2.33268Z"></path>
              </svg>
            </span>
          </div>
        </div>
        <MenuSlider />
      </Wrap>
    </Container>
  );
};

export default HeroHome;

// =======================================================================
//                              STYLE
// =======================================================================
const Wrap = styled.div`
  overflow: hidden;
  position: relative;
  padding: 0 1rem;
  ${media.large`
    padding: 0 3rem;
  `}
  .hero {
    position: absolute;
    transform: translate(-20%, 20%);
    ${media.large`
    transform: translate(-60%, 20%);
    `}
  }

  .head {
    ${flexBetween}
    padding: 2rem 0 10rem 0;
    padding: 2rem 0 4rem 0;
    .leftWrap {
      ${flexAlign}
    }
  }

  .main {
    h1 {
      color: ${setColor.blackMain};
      font-size: 1.75rem;
      ${media.large`
      font-size: 3rem;
      `}
      font-weight: 500;
      span {
        color: ${setColor.primaryMain};
      }
    }
    p {
      color: ${setColor.blackLight};
    }
    .inputWrap {
      margin: 3rem 0;
      position: relative;
      width: 90%;
      ${media.small`
        width: 70%;
      `}
      ${media.large`
        width: 45%
      `}
      height: 56px;
      margin-bottom: 10rem;

      .iconLocation {
        color: ${setColor.gray};
        position: absolute;
        right: 15px;
        top: 60%;
        transform: translateY(-50%);
      }
      input {
        width: 100%;
        height: 100%;
        border-radius: 5rem;
        ${shadow};
        border: none;
        padding-right: 3rem;

        &::placeholder {
          color: ${setColor.gray};
          font-weight: 700;
        }
      }
      .iconSearch {
        width: 1rem;
        color: ${setColor.whiteMain};
        background-color: ${setColor.primaryLight};
        height: 3rem;
        width: 3rem;
        ${flexCenter}
        border-radius: 50%;
        position: absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`;
