import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { menuData } from "../../data";
import { useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { xLargeSize } from "../../styles";

const MenuSlider = () => {
  const matchesXLarge = useMediaQuery(xLargeSize);
  return (
    <Menu>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={!matchesXLarge ? 4 : 10}
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
    </Menu>
  );
};

export default MenuSlider;

const Menu = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
  .item {
    padding: 1.5rem 0;
    img {
      width: 40px;
      height: auto;
    }

    p {
      font-size: small;
    }
  }
`;
