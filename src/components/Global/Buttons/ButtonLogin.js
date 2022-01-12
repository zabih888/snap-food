import { Button, Modal, TextField, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { LargeSize, setColor } from "../../../styles";
import { SvgLogo } from "../SvgWrapp";
import { useForm } from "react-hook-form";
import { ErrorHelper } from "../ErrorHelper";

export const ButtonLogin = () => {
  const matchesLarge = useMediaQuery(LargeSize);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const submitForm = (values) => {
    console.log(values);
    reset();
  };

  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const handleShowLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };
  const handleShowSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };
  return (
    <>
      {matchesLarge ? (
        <Button className="btn" onClick={handleOpen}>
          ورود <small>یا</small> عضویت
        </Button>
      ) : (
        <span onClick={handleOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 18"
            fill="currentColor"
            width={17}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.49992 10.666C11.8011 10.666 13.6666 12.5315 13.6666 14.8327V16.4993C13.6666 16.9596 13.2935 17.3327 12.8333 17.3327C12.373 17.3327 11.9999 16.9596 11.9999 16.4993V14.8327C11.9999 13.452 10.8806 12.3327 9.49992 12.3327H4.49992C3.11921 12.3327 1.99992 13.452 1.99992 14.8327V16.4993C1.99992 16.9596 1.62682 17.3327 1.16659 17.3327C0.706348 17.3327 0.333252 16.9596 0.333252 16.4993V14.8327C0.333252 12.5315 2.19873 10.666 4.49992 10.666H9.49992ZM6.99992 0.666016C9.3011 0.666016 11.1666 2.5315 11.1666 4.83268C11.1666 7.13387 9.3011 8.99935 6.99992 8.99935C4.69873 8.99935 2.83325 7.13387 2.83325 4.83268C2.83325 2.5315 4.69873 0.666016 6.99992 0.666016ZM6.99992 2.33268C5.61921 2.33268 4.49992 3.45197 4.49992 4.83268C4.49992 6.21339 5.61921 7.33268 6.99992 7.33268C8.38063 7.33268 9.49992 6.21339 9.49992 4.83268C9.49992 3.45197 8.38063 2.33268 6.99992 2.33268Z"
            ></path>
          </svg>
        </span>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxE>
          <div className="top">
            <SvgLogo />
          </div>
          <div className="filtersWrap">
            <Button
              onClick={handleShowLogin}
              className="filter"
              style={{ border: showLogin ? "1px solid" : undefined }}
            >
              ورود
            </Button>
            <Button
              onClick={handleShowSignup}
              className="filter"
              style={{ border: showSignup ? "1px solid" : undefined }}
            >
              عضویت
            </Button>
          </div>
          <form onSubmit={handleSubmit(submitForm)}>
            {showLogin ? (
              <div>
                <TextField
                  fullWidth
                  placeholder="ایمیل"
                  className="inputSpace"
                  type="email"
                  name="email"
                  id="email"
                  error={errors.email && true}
                  {...register("email", {
                    required: "لطفا ایمیل خود را وارد کنید ",
                  })}
                />
                {errors.email && (
                  <ErrorHelper>{errors.email.message}</ErrorHelper>
                )}
                <TextField
                  fullWidth
                  placeholder="رمز عبور"
                  className="inputSpace"
                  type="password"
                  name="password"
                  id="password"
                  error={errors.password && true}
                  {...register("password", {
                    required: "لطفا رمز عبور را وارد کنید",
                  })}
                />
                {errors.password && (
                  <ErrorHelper>{errors.password.message}</ErrorHelper>
                )}
              </div>
            ) : undefined}
            {showSignup ? (
              <div>
                <TextField
                  fullWidth
                  placeholder="نام کاربری"
                  className="inputSpace"
                  type="text"
                  name="name"
                  id="name"
                  error={errors.name && true}
                  {...register("name", {
                    required: "لطفا نام کاربری را وارد کنید",
                  })}
                />
                {errors.name && (
                  <ErrorHelper>{errors.name.message}</ErrorHelper>
                )}
                <TextField
                  fullWidth
                  placeholder="ایمیل"
                  className="inputSpace"
                  type="email"
                  name="email"
                  id="email"
                  error={errors.email && true}
                  {...register("email", {
                    required: "لطفا ایمیل خود را وارد کنید",
                  })}
                />
                {errors.email && (
                  <ErrorHelper>{errors.email.message}</ErrorHelper>
                )}
                <TextField
                  fullWidth
                  placeholder="رمز عبور"
                  className="inputSpace"
                  type="password"
                  name="password"
                  id="password"
                  error={errors.password && true}
                  {...register("password", {
                    required: "لطفا رمز عبور را وارد کنید",
                  })}
                />
                {errors.password && (
                  <ErrorHelper>{errors.password.message}</ErrorHelper>
                )}
                <TextField
                  fullWidth
                  placeholder="شماره تلفن"
                  className="inputSpace"
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  error={errors.phoneNumber && true}
                  {...register("phoneNumber", {
                    required: "لطفا شماره تلفن را وارد کنید",
                  })}
                />
                {errors.phoneNumber && (
                  <ErrorHelper>{errors.phoneNumber.message}</ErrorHelper>
                )}
              </div>
            ) : undefined}
            <Button
              fullWidth
              className="btn"
              type="submit"
              disabled={errors.email || errors.password}
            >
              ورود به سایت
            </Button>
          </form>
        </BoxE>
      </Modal>
    </>
  );
};
// =======================================================================
//                              STYLE
// =======================================================================
const BoxE = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: ${setColor.background};
  padding: 2rem;
  border: 5px solid ${setColor.containerDark};
  .top {
    text-align: center;
    transform: translateX(5%);
  }

  .filtersWrap {
    border-bottom: 1px solid ${setColor.gray};
    margin: 1rem 0;
    .filter {
      color: ${setColor.gray};
    }
  }
`;
