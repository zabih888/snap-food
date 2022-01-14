import { Button, Modal, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { LargeSize, media, setColor } from "../../../styles";
import { SvgLogo } from "../SvgWrapp";
import Login from "../../Login_Signup/Login";
import Signup from "../../Login_Signup/Signup";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../store/users/loginSlice";
import { useAuth, useAuthActions } from "../../../store/users/auth";

export const ButtonLogin = () => {
  const matchesLarge = useMediaQuery(LargeSize);

  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const { showModal } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(openModal(false));
  };

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };
  const handleShowSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };
  const setAuth = useAuthActions();
  const auth = useAuth();

  return (
    <>
      {auth ? undefined : matchesLarge ? (
        <Button className="btn" onClick={() => dispatch(openModal(true))}>
          ورود <small>یا</small> عضویت
        </Button>
      ) : (
        <span onClick={() => dispatch(openModal(true))}>
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
      {console.log(showModal)}
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
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
          <section>
            {showLogin ? <Login onClose={handleClose} /> : undefined}
            {showSignup ? <Signup onClose={handleClose} /> : undefined}
          </section>
        </Box>
      </Modal>
    </>
  );
};
// =======================================================================
//                              STYLE
// =======================================================================
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
