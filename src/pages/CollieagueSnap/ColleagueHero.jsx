import { Button, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hero from "../../assets/images/main/imgDesktop.jpg";
import heroMobile from "../../assets/images/main/imgMobile.png";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { SvgLogoSmall } from "../../components/Global/SvgWrapp";
import { flexBetween, LargeSize, media, setColor } from "../../styles";
import ColleagueHeroForm from "./ColleagueHeroForm";

const ColleagueHero = () => {
  const matchesLarge = useMediaQuery(LargeSize);
  return (
    <Background>
      <BackgroundT>
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
      </BackgroundT>
    </Background>
  );
};

export default ColleagueHero;
// =======================================================================
//                              STYLE
// =======================================================================
const Background = styled.main`
  background-image: url(${heroMobile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 60vh;
  z-index: -1;
  ${media.large`
  background-image: url(${hero});
  height: 100vh;
  `}
  &::before {
    content: "";
    width: 100%;
    height: 60vh;
    ${media.large`
    height: 100vh;
    `}
    position: absolute;
    background-color: black;
    opacity: 0.5;
  }
`;
const BackgroundT = styled.main`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), #000);
`;
const Wrap = styled.div`
  padding: 2rem 1rem 0 1rem;
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
    margin-top: 9rem;
    position: relative;
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
    align-items: center;
    .info {
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
        font-weight: 500;
      }
    }
  }
`;
