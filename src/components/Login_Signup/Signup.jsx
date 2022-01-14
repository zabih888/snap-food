import { Button, CircularProgress, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postAsyncRegister } from "../../store/users/registerSlice";
import { ErrorHelper } from "../Global/ErrorHelper";
import SuccessToast from "../Global/SuccessToast";
import { useAuth, useAuthActions } from "../../store/users/auth";
import { closeModal } from "../../store/users/loginSlice";

const Signup = ({ onClose }) => {
  const setAuth = useAuthActions();
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const { success, error, loading } = useSelector((state) => state.register);

  const submitSignup = (values) => {
    dispatch(postAsyncRegister(values));
    setAuth(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitSignup)}>
      <TextField
        fullWidth
        placeholder="نام"
        className="inputSpace"
        type="text"
        name="firstName"
        id="firstName"
        error={errors.firstName && true}
        {...register("firstName", {
          required: "لطفا نام را وارد کنید",
        })}
      />
      {errors.firstName && (
        <ErrorHelper>{errors.firstName.message}</ErrorHelper>
      )}
      <TextField
        fullWidth
        placeholder="نام خانوادگی"
        className="inputSpace"
        type="text"
        name="lastName"
        id="lastName"
        error={errors.lastName && true}
        {...register("lastName", {
          required: "لطفا نام حانوادگی خود را وارد",
        })}
      />
      {errors.lastName && <ErrorHelper>{errors.lastName.message}</ErrorHelper>}
      <TextField
        fullWidth
        placeholder="نام کاربری"
        className="inputSpace"
        type="text"
        name="userName"
        id="userName"
        error={errors.userName && true}
        {...register("userName", {
          required: "لطفا نام کاربری را وارد کنید",
        })}
      />
      {errors.userName && <ErrorHelper>{errors.userName.message}</ErrorHelper>}
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
      {errors.email && <ErrorHelper>{errors.email.message}</ErrorHelper>}
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
        disabled={
          errors.firstName ||
          errors.lastName ||
          errors.userName ||
          errors.email ||
          errors.phoneNumber ||
          errors.password
        }
      >
        ثبت نام
      </Button>
      {success ? SuccessToast("ثبت نام با موفقیت انجام شد") : null}
      {success ? onClose() : null}
      {loading ? <CircularProgress className="loading" /> : null}
      {error ? <ErrorHelper>{error}</ErrorHelper> : null}
      {console.log(error)}
    </form>
  );
};

export default Signup;
