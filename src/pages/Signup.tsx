import React, { useState } from "react";
import { useAppDispatch, RootState } from "../state/store";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { appSignup } from "../state/slices/authSlice";
import { useSelector } from "react-redux";
import { signupSchema } from "../helpers/validation";
import { AuthRoute } from "../constants/Routes";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useAppDispatch();
  const navi = useNavigate();

  const { signup } = useSelector((state: RootState) => state.authSlice);

  const formikSignup = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      toast("hayirli olsun kankk");
      const { email, password, firstName, lastName } = values;
      dispatch(appSignup({ email, password, firstName, lastName }));
    },
    validationSchema: signupSchema,
  });

  React.useEffect(() => {
    const { loading, error } = signup;
    if (loading === false && error !== null) {
      alert(error);
    }
  }, [signup]);

  return (
    <div className="container">
      <Toaster />

      <form onSubmit={formikSignup.handleSubmit}>
        <input
          placeholder="first Name"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formikSignup.handleChange}
          value={formikSignup.values.firstName}
        />
        <input
          placeholder="Last Name"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formikSignup.handleChange}
          value={formikSignup.values.lastName}
        />
        <input
          placeholder="E-Mail"
          id="email"
          name="email"
          type="email"
          onChange={formikSignup.handleChange}
          value={formikSignup.values.email}
        />
        <input
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          onChange={formikSignup.handleChange}
          value={formikSignup.values.password}
        />
        <button disabled={signup.loading} type="submit">
          {signup.loading ? "Loading..." : "Signup"}
        </button>{" "}
        <p
          onClick={() => {
            navi(AuthRoute.login);
          }}>
          Login for click
        </p>
      </form>
    </div>
  );
};

export default Signup;
