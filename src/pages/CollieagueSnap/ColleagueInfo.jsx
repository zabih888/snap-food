import React from "react";
import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import NorthEastOutlinedIcon from "@mui/icons-material/NorthEastOutlined";
import PersonalVideoOutlinedIcon from "@mui/icons-material/PersonalVideoOutlined";
import clickSvg from "../../assets/images/svg/click.svg";
import docSvg from "../../assets/images/svg/doc-search.svg";
import cameraSvg from "../../assets/images/svg/viewfinder.svg";
import arowCurve from "../../assets/images/colleague/arrow-curve.png";
import { colleaagueCategoryData, companyData } from "../../data";
import {
  borderRadius,
  flexCenter,
  media,
  paddingTop,
  setColor,
  shadow,
  shadowDark,
  xLargeSize,
} from "../../styles";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useMediaQuery } from "@mui/material";

const ColleagueInfo = () => {
  const matchesXLarge = useMediaQuery(xLargeSize);
  return (
    <main className="containerXL">
      <Company>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={!matchesXLarge ? 4 : 10}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {companyData.map((item) => (
            <SwiperSlide>
              <div className="item">
                <img src={item.img} />
              </div>
            </SwiperSlide>
          ))}
          <div style={{ margin: "3rem" }} />
        </Swiper>
      </Company>
      <One>
        <div>
          <PersonOutlineOutlinedIcon className="icon" />
          <h4>‌میلیون‌ها مشتری</h4>
          <p>در سامانه اسنپ‌فود</p>
        </div>
        <div>
          <LocalOfferOutlinedIcon className="icon" />
          <h4>۲۰,۰۰۰+</h4>
          <p>فروشگاه همکار</p>
        </div>
        <div>
          <AccessTimeOutlinedIcon className="icon" />
          <h4>۱۲ سال</h4>
          <p>سابقه فعالیت از سال ۸۸</p>
        </div>
      </One>

      <Two>
        <h1 className="title">مزایای فروش در اسنپ‌فود</h1>
        <div className="wrap">
          <div>
            <LocalOfferOutlinedIcon className="icon" />
            <h4>بزرگترین سامانه آنلاین فروش مایحتاج روزانه</h4>
            <p>اسنپ‌فود اولین و بزرگترین سیستم فروش آنلاین در ایران</p>
          </div>
          <div>
            <PersonalVideoOutlinedIcon className="icon" />
            <h4>امکان تحویل با سرویس اکسپرس</h4>
            <p>
              درصورت تمایل می‌توانید برای ارسال از سرویس اکسپرس استفاده نمایید
            </p>
          </div>
          <div>
            <NorthEastOutlinedIcon className="icon" />
            <h4>تا ۳ برابر امکان افزایش فروش</h4>
            <p>ارائه خدمات باکیفیت با شما، افزایش فروش با ما</p>
          </div>
          <div>
            <HeadsetMicOutlinedIcon className="icon" />
            <h4>پشتیبانی کامل مشتریان و فروشگاه‌ها</h4>
            <p>با پشتیبانی ویژه در خدمت شما و مشتریان هستیم</p>
          </div>
        </div>
      </Two>
      <Three>
        <h1 className="title">در ۳ مرحله آسان به اسنپ‌فود بپیوندید!</h1>
        <div className="wrap">
          <div>
            <img src={clickSvg} />
            <h4>تکمیل فرم ثبت‌نام</h4>
          </div>
          <img src={arowCurve} />
          <div>
            <img src={docSvg} />
            <h4>دانلود نرم‌افزار دخل و تکمیل مدارک</h4>
          </div>
          <img src={arowCurve} />
          <div>
            <img src={cameraSvg} />
            <h4>آپلود منو و دریافت سفارش</h4>
          </div>
        </div>
      </Three>

      <Category>
        <h1 className="title">دسته‌بندی فروشندگان</h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={!matchesXLarge ? 3 : 5}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {colleaagueCategoryData.map((item) => (
            <SwiperSlide>
              <div className="item">
                <img src={item.img} />
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
          <div style={{ margin: "1rem" }} />
        </Swiper>
      </Category>
    </main>
  );
};

export default ColleagueInfo;
// =======================================================================
//                              STYLE
// =======================================================================
const Company = styled.section`
  margin-top: 5rem;
  .item {
    ${flexCenter}
    img {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 50%;
    }
  }
`;

const One = styled.section`
  margin-top: 5rem;
  padding: 2rem 0;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  ${media.medium`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  `}
  text-align: center;
  ${paddingTop};
  ${shadowDark};
  ${borderRadius}
  .icon {
    color: ${setColor.primaryMain};
    background-color: ${setColor.primaryVeryLight};
    width: 60px;
    height: auto;
    padding: 0.75rem;
    border-radius: 50%;
  }

  h4 {
    color: ${setColor.primaryMain};
    font-size: 2rem;
  }
`;

const Two = styled.section`
  margin-top: 5rem;
  padding: 2rem 0;
  text-align: center;
  .wrap {
    gap: 2rem;
    display: flex;
    flex-direction: column;
    ${media.large`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    `}

    .icon {
      color: ${setColor.primaryMain};
      width: 40px;
      height: auto;
    }
  }
`;

const Three = styled.section`
  margin-top: 5rem;
  padding: 2rem 0;
  text-align: center;
  .wrap {
    gap: 2rem;
    display: flex;
    flex-direction: column;
    ${media.large`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `}
  }
`;

const Category = styled.section`
  margin-top: 5rem;
  padding: 2rem 0;
  .item {
    height: 160px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.6;
      border-bottom-right-radius: 2rem;
    }
    img {
      border-bottom-right-radius: 2rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    p {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      color: ${setColor.whiteMain};
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
`;
