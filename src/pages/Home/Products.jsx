import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../../components/Global/Container";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import {
  borderRadius,
  flexBetween,
  LargeSize,
  media,
  MediumSize,
  setColor,
  shadow,
  xLargeSize,
} from "../../styles";
import { Button, CircularProgress, Modal, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncProducts } from "../../store/products/productsSlice";
import { increment, showPreview } from "../../store/cart/cartSlice";

const Products = () => {
  const matchesMedium = useMediaQuery(MediumSize);
  const matchesLarge = useMediaQuery(LargeSize);
  const matchesXLarge = useMediaQuery(xLargeSize);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const { preview } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getAsyncProducts());
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = (item) => {
    setOpen(true);
    dispatch(showPreview(item));
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <Container spaceSection="5rem">
        {loading ? (
          <CircularProgress className="loading" />
        ) : error ? (
          <h1>{error.message}</h1>
        ) : (
          <Wrap>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={
                matchesXLarge
                  ? 4.5
                  : matchesLarge
                  ? 3.5
                  : matchesMedium
                  ? 2.5
                  : 1.5
              }
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {products.map((item) => (
                <>
                  <SwiperSlide>
                    <Card key={item.id} onClick={() => handleOpen(item)}>
                      <div className="wrapImg">
                        <img src={item.image} />
                        <span className="discount">
                          {+item.discount}%<small>تخفیف</small>
                        </span>
                      </div>
                      <p className="name">{item.name}</p>
                      <p className="price">{+item.price}</p>
                      <p className="offPrice">{+item.offPrice} تومان</p>
                    </Card>
                  </SwiperSlide>
                </>
              ))}
              <div style={{ margin: "3rem" }} />
            </Swiper>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box>
                <img src={preview.image} />
                <div className="top">
                  <h2>{preview.name}</h2>
                  <p>{+preview.offPrice} تومان</p>
                </div>
                <p>{preview.discription}</p>
                <div>
                  <Button
                    fullWidth
                    className="btn"
                    onClick={() =>
                      dispatch(increment({ ...preview, quantity: 1 }))
                    }
                  >
                    <AddShoppingCartOutlinedIcon className="icon" />
                    افزودن به سبد خرید
                  </Button>
                </div>
              </Box>
            </Modal>
          </Wrap>
        )}
      </Container>
    </>
  );
};

export default Products;
// =======================================================================
//                              STYLE
// =======================================================================
const Wrap = styled.div``;

const Card = styled.div`
  text-align: center;
  cursor: pointer;
  &:hover {
    ${shadow}
  }
  .wrapImg {
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .discount {
      color: ${setColor.primaryMain};
      border: 1px solid ${setColor.primaryMain};
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      width: 70px;
      height: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 10%;
      right: 10px;
    }
  }
  .name {
    color: ${setColor.blackMain};
  }
  .price {
    color: ${setColor.gray};
    text-decoration: line-through;
  }
  .offPrice {
    color: ${setColor.primaryMain};
  }

  button {
    margin-top: 0.5rem;
    vertical-align: middle;
    padding: 0.5rem 1rem;
    border-radius: 3.75rem;

    .icon {
      vertical-align: middle;
      width: 24px;
      height: 24px;
    }
  }
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  ${media.medium`
  width: 400px;
  `}
  background-color: ${setColor.background};
  padding: 2rem;
  border: 5px solid ${setColor.containerDark};
  border-radius: 1rem;

  img {
    width: 100%;
    border-radius: 1rem;
  }
  .top {
    ${flexBetween};
    margin: 0.5rem 0;
  }
  button {
    margin-top: 1rem;
    vertical-align: middle;
    padding: 0.5rem 1rem;
    ${borderRadius};

    .icon {
      margin-left: 1rem;
      vertical-align: middle;
      width: 24px;
      height: 24px;
    }
  }
`;
