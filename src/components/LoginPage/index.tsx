import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import LoginPageImage from "../../assets/images/loginPageImage.svg";
import CardTitleLogo from "../../assets/images/cardTitleLogo.svg";
import Header from "../Header";
import { useDispatch } from "react-redux";
import { loginApi } from "./loginPageSlice";
import { AppDispatch } from "../../store";
export const validationSchema = Yup.object({
  email: Yup.string().email().required("please enter your   email"),
  password: Yup.string().min(4).max(25).required("please enter your password"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("values", values);
      await dispatch(
        loginApi({ username: values.email, password: values.password })
      );
      navigate("/home");
    },
  });
  console.log(formik);
  return (
    <div>
      <Header />
      <div className="loginPage_container">
        <div className="loginpage_content">
          <div className="loginPage_bgImage">
            <img src={LoginPageImage} alt="Login Page Image" />
          </div>
          <div className="loginPage_form">
            <Card sx={{ minWidth: 475 }}>
              <CardContent>
                <div className="loginPage_cardHeader">
                  <img src={CardTitleLogo} alt="Card Header Logo" />
                  <Typography variant="h3">Broker Portal</Typography>
                </div>
                <div className="loginPage_account_header">
                  <Typography variant="h3">Login</Typography>
                  <Typography variant="subtitle1">
                    Don’t have an account?
                  </Typography>
                </div>
                <form
                  onSubmit={formik.handleSubmit}
                  // variant="standard"
                  className="loginPage_loginInput"
                >
                  <TextField
                    label="Email address"
                    variant="outlined"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  <div className="loginPage_forgotPass">
                    <Typography variant="subtitle1">
                      Forgot Password?
                    </Typography>
                  </div>
                  <div className="loginPage_loginButton">
                    <Button type="submit" variant="outlined">
                      Login
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
