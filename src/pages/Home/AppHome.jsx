import React from "react";
import Container from "../../components/Global/Container";
import { flexBetween, LargeSize, media, setColor, shadow } from "../../styles";
import svgGoogplePlay from "../../assets/images/svg/GooglePlay.svg";
import svgBazar from "../../assets/images/svg/Bazar.svg";
import svgSeab from "../../assets/images/svg/Seab.svg";
import svgIApps from "../../assets/images/svg/IApps.svg";
import imgApp from "../../assets/images/main/img_app.png";
import styled from "styled-components";
import { Button, useMediaQuery } from "@mui/material";

const AppHome = () => {
  const matchesLarge = useMediaQuery(LargeSize);
  return (
    <Container
      bckColor={setColor.containerDark}
      bottomRadius="7.5rem"
      spaceSection="8rem"
    >
      <Wrap>
        <div className="right">
          <h1 className="title">اپلیکیشن اسنپ‌فود</h1>
          <p className="desc">
            با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید
            رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را
            جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.
          </p>
          <p className="inputInfo">
            برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید
          </p>
          <div className="inputWrap">
            <input placeholder="مثلا 09907030335" />
            <Button className="btn">دریافت لینک</Button>
          </div>
          <div className="linksApp">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.zoodfood.android.play&hl=en"
            >
              <img src={svgGoogplePlay} />
            </a>
            <a
              target="_blank"
              href="https://cafebazaar.ir/app/com.zoodfood.android/?l=fa"
            >
              <img src={svgBazar} />
            </a>
            <a
              target="_blank"
              href="https://sibapp.com/applications/zoodfood-1"
            >
              <img src={svgSeab} />
            </a>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.zoodfood.android.play&hl=en"
            >
              <img src={svgIApps} />
            </a>
          </div>
        </div>
        {matchesLarge ? (
          <div className="left">
            <img src={imgApp} />
          </div>
        ) : undefined}
      </Wrap>
    </Container>
  );
};

export default AppHome;
// =======================================================================
//                              STYLE
// =======================================================================

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 1rem;
  ${media.large`
  grid-template-columns: 3fr 2fr;
  padding: 0 9rem 0 3rem;
  `}

  .left {
    margin-top: -30%;
    img {
      width: 100%;
      height: auto;
    }
  }

  .right {
    ${media.large`
      padding-left: 4rem;
    `}

    .title {
      font-size: 1.75rem;
      ${media.large`
      font-size: 3rem;
      `}
      font-weight: 500;
      margin: 2rem 0;
    }
    .desc {
      color: ${setColor.blackLight};
      line-height: 2;
      margin-bottom: 2rem;
    }

    .inputInfo {
      font-size: 13px;
      font-weight: 500;
      color: ${setColor.blackDark};
    }
    .inputWrap {
      margin: 0.5rem 0 2rem 0;
      width: 100%;
      position: relative;
      input {
        border-radius: 0.375rem;
        width: 100%;
        height: 3rem;
        border: none;
        ${shadow};
        &::placeholder {
          padding-right: 0.5rem;
        }
      }
      button {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 0.25rem 0.75rem;
        margin-left: 0.5rem;
      }
    }
    .linksApp {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr;
      ${media.medium`
      grid-template-columns: repeat(4, 1fr);
      `}
      ${media.large`
      gap: .5rem;
      grid-template-columns: 1fr 1fr;
      `}
      img {
        ${media.large`
        height: 50px;
        `}
      }
    }
  }
`;
