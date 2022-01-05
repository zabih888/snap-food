import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../../components/Global/Container";
import {
  SvgLoction,
  SvgLogin,
  SvgLogo,
  SvgShop,
  SvgSreach,
} from "../../components/Global/SvgWrapp";
import {
  containerGlass,
  flexAlign,
  flexBetween,
  LargeSize,
  media,
  MediumSize,
  setColor,
} from "../../styles";
import heroImg from "../../assets/images/main/hero-image.png";
import { menuData } from "../../data";
import { useMediaQuery } from "@mui/material";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroHome = () => {
  const matchesMedium = useMediaQuery(MediumSize);
  return (
    <Container bckColor={setColor.containerLight} bottomRadius="7.5rem">
      <Wrap>
        <img src={heroImg} className="hero" />
        <div className="head">
          <SvgLogo />
          <div className="leftWrap">
            {matchesMedium ? (
              <Link to="/" className="loginShop">
                <SvgShop />
                ثبت نام فروشندگان
              </Link>
            ) : undefined}
            {matchesMedium ? (
              <ButtonLogin to="/">
                ورود <span>یا</span> عضویت
              </ButtonLogin>
            ) : (
              <SvgLogin />
            )}
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
            <SvgLoction />
            <input placeholder="ابتدا آدرستان را انتخاب کنید." />
            <SvgSreach />
          </div>
        </div>

        <div className="menu">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={matchesMedium ? 6 : 3}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {menuData.map((item) => (
              <SwiperSlide>
                <div className="item">
                  <img src={item.image} />
                  <p>{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
            ...
          </Swiper>
        </div>
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
      .loginShop {
        ${flexAlign}
        margin-left: 1rem;
        padding-right: 1.5rem;
        color: ${setColor.blackMain};
      }
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
      input {
        width: 100%;
        height: 100%;
        border-radius: 5rem;
        box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
          rgba(0, 0, 0, 0.2) 0px 4px 16px -8px;
        border: none;
        padding-right: 3rem;

        &::placeholder {
          color: ${setColor.gray};
          font-weight: 700;
        }
      }
    }
  }

  .menu {
    text-align: center;
    ${containerGlass}
    display: flex;
    justify-content: space-around;
    margin-bottom: 3rem;
    border-radius: 1.5rem;
    .item {
      padding: 1.5rem 0;
      img {
        width: 50px;
        height: auto;
      }

      p {
        font-size: small;
      }
    }
  }
`;
const ButtonLogin = styled(Link)`
  background-color: ${setColor.primaryMain};
  color: ${setColor.whiteMain};
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.375rem;
  padding: 0.75rem 0.5rem;

  span {
    font-weight: 400;
  }
`;
