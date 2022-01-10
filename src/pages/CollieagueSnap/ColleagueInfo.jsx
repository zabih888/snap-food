import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { containerGlass, flexCenter, shadow, xLargeSize } from "../../styles";
import { useMediaQuery } from "@mui/material";
import { companyData } from "../../data";
import styled from "styled-components";

const ColleagueInfo = () => {
  const matchesXLarge = useMediaQuery(xLargeSize);
  return (
    <Menu>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={!matchesXLarge ? "auto" : 10}
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
        ...
      </Swiper>
    </Menu>
  );
};

export default ColleagueInfo;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  .item {
    ${flexCenter}
    img {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 50%;
    }
  }
`;
