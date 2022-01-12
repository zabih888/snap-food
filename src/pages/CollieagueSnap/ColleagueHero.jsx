import { Button, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hero from "../../assets/images/main/imgDesktop.jpg";
import heroMobile from "../../assets/images/main/imgMobile.png";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { SvgLogoSmall } from "../../components/Global/SvgWrapp";
import {
  flexBetween,
  LargeSize,
  media,
  paddingBottom,
  paddingTop,
  setColor,
} from "../../styles";
import ColleagueHeroForm from "./ColleagueHeroForm";

const ColleagueHero = () => {
  const matchesLarge = useMediaQuery(LargeSize);
  return (
    <Background>
      <img src={matchesLarge ? hero : heroMobile} />
      <LinearGradient>
        <Wrap className="containerXL">
          <section className="header">
            {matchesLarge ? (
              <div className="right">
                <Link to="/" style={{ marginLeft: "1rem" }}>
                  تماس با اسنپ‌فود
                </Link>
                <Link to="/">قوانین و مقررات</Link>
              </div>
            ) : undefined}
            <div className="left">
              <Button className="btn">
                <CloudDownloadIcon className="icon" />
                نرم‌افزار دخل فروشندگان
              </Button>
              <span className="logo">
                <SvgLogoSmall />
              </span>
            </div>
          </section>

          <section className="main">
            <div className="info">
              <h1 className="title">همکار اسنپ‌فود شوید!</h1>
              <p className="subTitle">
                کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید
              </p>
            </div>
            <div className="formWrap">
              <ColleagueHeroForm />
            </div>
          </section>
        </Wrap>
      </LinearGradient>
    </Background>
  );
};

export default ColleagueHero;
// =======================================================================
//                              STYLE
// =======================================================================
const Background = styled.main`
  position: relative;
  img {
    width: 100%;
    ${media.large`
    height: 100%;
    object-fit: cover;
    `}
    position: absolute;
    z-index: -1;
  }

  &::before {
    content: "";
    position: absolute;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    ${media.large`
    background-color: black;
    `}
  }
`;
const LinearGradient = styled.main`
  background: linear-gradient(360deg, #000, #000, #000, rgba(0, 0, 0, 0.2));
  ${media.small`
  background: linear-gradient(360deg, #000, #000, rgba(0, 0, 0, 0.2));
  `}
  ${media.medium`
  background: linear-gradient(360deg, #000, rgba(0, 0, 0, 0.2));
  `}
  position: relative;
  ${media.large`
  background: none;
  `}
`;
const Wrap = styled.div`
  ${paddingTop}
  .header {
    position: relative;
    display: flex;
    justify-content: space-between;
    .right {
      a {
        color: ${setColor.whiteMain};
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
      }
    }
    .left {
      width: 100%;
      display: flex;
      justify-content: space-between;
      ${media.large`
      justify-content: flex-end;
      width: auto;
      `}

      button {
        margin-left: 1rem;
        .icon {
          margin-left: 0.5rem;
        }
      }
    }
  }

  .main {
    margin-top: 10rem;
    align-items: center;
    ${media.large`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `}
    .info {
      margin-bottom: 5rem;
      .title {
        color: ${setColor.whiteMain};
        font-weight: 800;
        font-size: 2.5rem;
        ${media.large`
        font-size: 4rem;
        `}
      }
      .subTitle {
        color: ${setColor.whiteMain};
      }
    }

    .formWrap {
      width: 100%;
      ${paddingBottom}
      ${media.large`
      width: 400px;
      margin-bottom: 0;
      `}
    }
  }
`;
