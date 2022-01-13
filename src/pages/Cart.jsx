import { Button, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import HeaderTop from "../components/Global/HeaderTop";
import Container from "../components/Global/Container";
import {
  flexAlign,
  flexBetween,
  LargeSize,
  media,
  MediumSize,
  paddingContainerWithTop,
  setColor,
  shadow,
} from "../styles";
import CloseIcon from "@mui/icons-material/Close";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useDispatch } from "react-redux";
import { remove, increment, decrement } from "../store/cart/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
const Cart = () => {
  const matchesLarge = useMediaQuery(LargeSize);
  const matchesMedium = useMediaQuery(MediumSize);
  const { cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handlerRemove = (item) => {
    dispatch(decrement(item));
    if (item.quantity === 1) {
      dispatch(remove(item));
    }
  };

  return (
    <>
      <HeaderTop />
      <Container>
        <Wrap>
          <section className="cartList">
            <h3>سبد خرید</h3>
            {cart.map((item) => (
              <>
                <main>
                  <span onClick={() => dispatch(remove(item))}>
                    <CloseIcon className="close" />
                  </span>
                  <img src={item.image} />

                  {matchesMedium ? (
                    <div>
                      <h5>{item.name}</h5>
                      <div className="guarantee">
                        <AddTaskIcon className="icon" />
                        گارانتی اصالت و سلامت فیزیکی کالا
                      </div>
                    </div>
                  ) : null}

                  {matchesLarge ? (
                    <div className="counter">
                      <button onClick={() => handlerRemove(item)}>
                        <RemoveIcon className="icon mines" />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increment(item))}>
                        <AddIcon className="icon" />
                      </button>
                    </div>
                  ) : undefined}

                  <div>
                    <h5 className="price">{item.price} تومن</h5>
                    <h4 className="off">
                      {item.offPrice * item.quantity} تومن
                    </h4>
                  </div>
                </main>
                {!matchesLarge ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "1rem 0",
                    }}
                  >
                    <div className="counter">
                      <button onClick={() => handlerRemove(item)}>
                        <RemoveIcon className="icon mines" />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increment(item))}>
                        <AddIcon className="icon" />
                      </button>
                    </div>
                    {!matchesMedium ? <h5>{item.name}</h5> : undefined}
                  </div>
                ) : undefined}
                <div className="borderBottom" />
              </>
            ))}
          </section>
          <section className="summary">
            <h3>جزئیات خرید</h3>
            <main>
              <div>
                <p>تعداد کالا</p>
                <span>{cart.length} عدد</span>
              </div>

              <div>
                <p>جمع کل بعد از تخفیف</p>
                <span>{total} تومن</span>
              </div>
              <Button fullWidth className="btn">
                ادامه فرایند خرید
              </Button>
            </main>
          </section>
          <Link to="/" className="backToShop">
            بازگشت به سایت و خرید بیشتر
          </Link>
        </Wrap>
      </Container>
    </>
  );
};

export default Cart;
// =======================================================================
//                              STYLE
// =======================================================================
const Wrap = styled.div`
  ${paddingContainerWithTop};
  display: flex;
  flex-direction: column;
  ${media.large`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  `};

  .cartList {
    position: relative;

    .borderBottom {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      bottom: 0px;
      background-color: ${setColor.gray};
    }
    main {
      ${flexBetween};
      position: relative;
    }
    .close {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      width: 25px;
      height: 25px;
      cursor: pointer;
      color: ${setColor.primaryMain};
    }
    img {
      margin-right: 1.5rem;
      width: 120px;
      border-radius: 1rem;
    }
    .guarantee {
      margin-top: 1rem;
      ${flexAlign};
      .icon {
        margin-left: 0.5rem;
        color: ${setColor.primaryMain};
        font-size: 1.2rem;
      }
    }
    .price {
      color: ${setColor.gray};
      text-decoration: line-through;
    }
    .off {
      color: ${setColor.primaryMain};
    }

    .counter {
      width: 150px;
      border: 1px solid ${setColor.gray};
      border-radius: 30px;
      ${flexBetween};
      button {
        border: none;
        background-color: ${setColor.containerLight};
        border-radius: 50%;
        padding: 0.5rem;
        cursor: pointer;
        .icon {
          font-weight: 800;
          font-size: 1rem;
          display: flex;
          color: ${setColor.blackDark};
        }
      }
    }
  }

  .summary {
    main {
      padding: 1rem;
      border-radius: 20px;
      ${shadow};

      div {
        ${flexBetween};
        margin: 1rem 0;
      }
    }
  }

  .backToShop {
    margin-top: 1rem;
    color: ${setColor.blackMain};
    font-weight: 600;
    font-size: 16px;
  }
`;
