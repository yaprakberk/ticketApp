import { useFormik } from "formik";
import React from "react";
// import "../../style/loginStyle.css";
// import { loginSchema } from "../../helpers/validation";

import { RootState, useAppDispatch } from "../../state/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigation = useNavigate();
  const { login } = useSelector((state: RootState) => state.authSlice);
  const dispatch = useAppDispatch();
  const formikLogin = useFormik({
    initialValues: {
      email: "deneme@deneme.com",
      password: "123123",
    },

    onSubmit: async (values) => {
      await dispatch(login(values));
    },
    // validationSchema: loginSchema,
  });

//   React.useEffect(() => {
//     const { loading, error } = login;
//     if (loading === false && error !== null) {
//       toast.error("hatali giris yaptin hadiii");
//     }
//   }, [login]);

  return (
    <div className="loginContainer">
      {/* <Toaster /> */}
      <form className="form" onSubmit={formikLogin.handleSubmit}>
        <p id="heading">Login</p>
        <div className="field">
         
          <div className="inputContainer">
            <input
              id="email"
              placeholder="E-Mail"
              name="email"
              type="email"
              onChange={formikLogin.handleChange}
              value={formikLogin.values.email}
              autoCapitalize="off"
              className="input-field"
            />

            {formikLogin.touched.email && formikLogin.errors.email ? (
              <p className="error">{formikLogin.errors.email}</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className="field">
          <svg
            className="input-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
          </svg>
          <div className="inputContainer">
            <input
              className="input-field"
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              onChange={formikLogin.handleChange}
              value={formikLogin.values.password}
            />

            {formikLogin.touched.password && formikLogin.errors.password ? (
              <p className="error">{formikLogin.errors.password}</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className="btn">
          <button className="button1" type="submit">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
          <button onClick={() => navigation("signup")} className="button2">
            Sign Up
          </button>
        </div>
        <button
          className="button3"
          onClick={() => navigation("forgotPassword")}
        >
          Forgot Password
        </button>
      </form>
    </div>
  );
};

export default Login;