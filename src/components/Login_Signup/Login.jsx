import { Button, CircularProgress, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  openModal,
  postAsyncLogin,
} from "../../store/users/loginSlice";
import { ErrorHelper } from "../Global/ErrorHelper";
import SuccessToast from "../Global/SuccessToast";
import { useAuth, useAuthActions } from "../../store/users/auth";

const Login = ({ onClose }) => {
  const setAuth = useAuthActions();
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const { success, loading, error } = useSelector((state) => state.login);
  const submitLogin = (values) => {
    dispatch(postAsyncLogin(values));
    setAuth(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitLogin)}>
      <TextField
        fullWidth
        placeholder="نام کاربری"
        className="inputSpace"
        type="text"
        name="userName"
        id="userName"
        error={errors.userName && true}
        {...register("userName", {
          required: "لطفا ایمیل خود را وارد کنید ",
        })}
      />
      {errors.userName && <ErrorHelper>{errors.userName.message}</ErrorHelper>}
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
      {errors.password && <ErrorHelper>{errors.password.message}</ErrorHelper>}
      <Button
        fullWidth
        className="btn"
        type="submit"
        disabled={errors.email || errors.password}
      >
        ورود به سایت
      </Button>
      {success ? SuccessToast("ورود با موفقیت انجام شد") : null}
      {success ? onClose() : null}
      {loading ? <CircularProgress className="loading" /> : null}
      {error ? <ErrorHelper>{error}</ErrorHelper> : null}
    </form>
  );
};

export default Login;
