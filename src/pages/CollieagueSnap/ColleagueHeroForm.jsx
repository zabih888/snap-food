import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ErrorHelper } from "../../components/Global/ErrorHelper";
import { borderRadius, media, setColor } from "../../styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const typeJobs = [
  "رستوران",
  "کافه",
  "شیرینی",
  "نانوایی",
  "میوه",
  "آجیل",
  "آب‌میوه‌‌ بستنی",
  "پروتئین",
  "بگیر و بپز",
  "سایر",
];
const citys = ["تهران", "اصفهان", "مشهد", "شیراز", "شیراز", "کرج", "تبریز"];
const ColleagueHeroForm = () => {
  const [typeJob, setTypeJob] = useState("");
  const [city, setCity] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm();

  const submitForm = (values) => {
    console.log(values);
    reset();
  };

  return (
    <Wrap>
      <h1 className="title">ثبت‌نام فروشندگان</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormControl
          fullWidth
          className="inputSpace"
          {...register("typeJob", {
            required: "نوع کسب و کارتان را انتخاب کنید",
          })}
        >
          <Select
            value={typeJob}
            onChange={(e) => setTypeJob(e.target.value)}
            variant="outlined"
            MenuProps={MenuProps}
            displayEmpty
            name="typeJob"
            id="typeJob"
            error={errors.typeJob && true}
          >
            <MenuItem value="" disabled>
              انتخاب نوع کسب و کار
            </MenuItem>
            {typeJobs.map((item) => (
              <MenuItem
                key={item}
                value={item}
                onClick={() => clearErrors("typeJob")}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
          {errors.typeJob && (
            <ErrorHelper>{errors.typeJob.message}</ErrorHelper>
          )}
        </FormControl>

        <FormControl
          fullWidth
          className="inputSpace"
          {...register("city", {
            required: "شهرتان را انتخاب کنید",
          })}
        >
          <Select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            variant="outlined"
            MenuProps={MenuProps}
            displayEmpty
            name="city"
            id="city"
            error={errors.city && true}
          >
            <MenuItem disabled value="">
              انتخاب شهر
            </MenuItem>
            {citys.map((item) => (
              <MenuItem
                key={item}
                value={item}
                onClick={() => clearErrors("city")}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
          {errors.city && <ErrorHelper>{errors.city.message}</ErrorHelper>}
        </FormControl>
        <TextField
          fullWidth
          className="inputSpace"
          placeholder="نام فروشگاه"
          type="text"
          name="storeName"
          id="storeName"
          error={errors.storeName && true}
          {...register("storeName", {
            required: "نام فروشگاه الزامی است",
            minLength: { value: 3, message: "حداقل 3 کاراکتر وارد کنید" },
          })}
        />
        {errors.storeName && (
          <ErrorHelper>{errors.storeName.message}</ErrorHelper>
        )}
        <TextField
          fullWidth
          className="inputSpace"
          placeholder="نام مالک فروشگاه"
          type="text"
          name="ownerName"
          id="ownerName"
          error={errors.ownerName && true}
          {...register("ownerName", {
            required: "نام مالک فروشگاه الزامی است",
            minLength: { value: 3, message: "حداقل 3 کاراکتر وارد کنید" },
          })}
        />
        {errors.ownerName && (
          <ErrorHelper>{errors.ownerName.message}</ErrorHelper>
        )}
        <TextField
          fullWidth
          className="inputSpace"
          placeholder="تلفن"
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          error={errors.phoneNumber && true}
          {...register("phoneNumber", {
            required: "شماره تلفن الزامی است",
          })}
        />
        {errors.phoneNumber && (
          <ErrorHelper>{errors.phoneNumber.message}</ErrorHelper>
        )}
        <Button
          className="btn"
          fullWidth
          type="submit"
          disabled={
            errors.typeJob ||
            errors.city ||
            errors.storeName ||
            errors.ownerName ||
            errors.phoneNumber
          }
        >
          ثبت نام
        </Button>
      </form>
    </Wrap>
  );
};

export default ColleagueHeroForm;
// =======================================================================
//                              STYLE
// =======================================================================
const Wrap = styled.div`
  background-color: ${setColor.containerLight};
  ${borderRadius}
  ${media.large`
  width: 400px;
  `}
  padding: 1.5rem 1.5rem 3rem 1.5rem;
`;
