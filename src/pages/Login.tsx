import React, { useState } from "react";
import { useAppDispatch, RootState } from "../state/store";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { appLogin, appSignup } from "../state/slices/authSlice";
import { useSelector } from "react-redux";
import { loginSchema, signupSchema } from "../helpers/validation";
import { useNavigate, useNavigation } from "react-router-dom";
import { AuthRoute } from "../constants/Routes";

const Login = () => {
  const dispatch = useAppDispatch();
  const navi = useNavigate();
  const { login } = useSelector((state: RootState) => state.authSlice);
  const formikLogin = useFormik({
    initialValues: {
      email: "deneme@deneme.com",
      password: "1231231ßß",
    },

    onSubmit: async (values) => {
      toast("kanka hbb");
      dispatch(appLogin(values));
    },
    validationSchema: loginSchema,
  });

  React.useEffect(() => {
    const { loading, error } = login;
    if (loading === false && error !== null) {
      alert(error);
    }
  }, [login]);

  return (
    <div className="container">
      <Toaster />
      <form onSubmit={formikLogin.handleSubmit}>
        <input
          style={{ borderWidth: 2 }}
          className="sdsd"
          id="email"
          placeholder="E-Mail"
          name="email"
          type="email"
          onChange={formikLogin.handleChange}
          value={formikLogin.values.email}
        />
        <input
          id="password"
          placeholder="Password"
          name="password"
          type="password"
          onChange={formikLogin.handleChange}
          value={formikLogin.values.password}
        />
        <button disabled={login.loading} type="submit">
          {login.loading ? "Loading..." : "Login"}
        </button>
        <p
          onClick={() => {
            navi(AuthRoute.signup);
          }}>
          Singn up for click
        </p>
      </form>
    </div>
  );
};

export default Login;
