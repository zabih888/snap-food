import React from "react";
import Container from "../../components/Global/Container";
import {
  borderRadius,
  flexBetween,
  LargeSize,
  media,
  paddingContainer,
  setColor,
  shadow,
} from "../../styles";
import svgGoogplePlay from "../../assets/images/svg/GooglePlay.svg";
import svgBazar from "../../assets/images/svg/Bazar.svg";
import svgSeab from "../../assets/images/svg/Seab.svg";
import svgIApps from "../../assets/images/svg/IApps.svg";
import imgApp from "../../assets/images/main/img_app.png";
import styled from "styled-components";
import { Button, useMediaQuery, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import { ErrorHelper } from "../../components/Global/ErrorHelper";

const AppHome = () => {
  const matchesLarge = useMediaQuery(LargeSize);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitForm = (values) => {
    console.log(values);
  };
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
          <Box component="form" onSubmit={handleSubmit(submitForm)}>
            <TextField
              fullWidth
              placeholder="مثلا 09126050333"
              type="tel"
              id="linkApp"
              name="linkApp"
              error={errors.linkApp && true}
              {...register("linkApp", {
                required: "لطفا شماره تلفن تان را وارد کنید",
                minLength: {
                  value: 11,
                  message: "لطفا شماره تلفن معتبر وارد کنید",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "لطفلا عدد وارد کنید",
                },
              })}
            />
            <Button className="btn" type="submit" disabled={errors.linkApp}>
              دریافت لینک
            </Button>
          </Box>
          {errors.linkApp && (
            <ErrorHelper>{errors.linkApp.message}</ErrorHelper>
          )}
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
  ${paddingContainer}
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
    .desc{
      margin-bottom: 2rem;
    }
    .inputInfo {
      font-size: 13px;
      font-weight: 500;
      color: ${setColor.blackDark};
    }
    form {
      position: relative;
      input {
        background-color: ${setColor.whiteMain};
        ${borderRadius}
        ${shadow};
      }
      button {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 0.25rem 0.75rem;
        margin-left: 0.75rem;
      }
    }
    .linksApp {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr;
      margin-top: 1rem;
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
