import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { fireAuth } from "./config/FirebaseConfig";
import { useSelector } from "react-redux";
import { useAppDispatch } from "./state/store";
import { authInit } from "./state/slices/authSlice";
import { RootState } from "./state/store";
import { getUserList } from "./state/slices/userSlice";
import Landing from "./pages/Landing";
import Page404Found from "./pages/Page404Found";
import { Unsubscribe } from "firebase/firestore";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { AuthRoute, MainRoutes } from "./constants/Routes";
import Canser from "./pages/Canser";
import Theatre from "./pages/Theatre";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
const AppRouter: React.FC = () => {
  const dispatch = useAppDispatch();

  const { user } = useSelector((state: RootState) => state.authSlice);

  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    let roomsSub: Unsubscribe;
    const subscription = fireAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(authInit(user));
      }
      setLoading(false);
    });

    return () => {
      subscription();
      if (typeof roomsSub === "function") {
        roomsSub();
      }
    };
  }, [user]);
  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <div>
      {loading === true ? (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Page404Found />} />
        </Routes>
      ) : (
        <Routes>
          {!user ? (
            <Route>
              <Route />
              <Route path={AuthRoute.login} element={<Login />} />
              <Route path={AuthRoute.signup} element={<Signup />} />
              <Route path="*" element={<Page404Found />} />
            </Route>
          ) : (
            <>
              <Route element={<Navbar />}>
                <Route path="/" element={<Home />} />
                <Route path={MainRoutes.about} element={<About />} />
                <Route path={MainRoutes.cancer} element={<Canser />} />
                <Route path={MainRoutes.theatre} element={<Theatre />} />

                <Route path="*" element={<Page404Found />} />
              </Route>
            </>
          )}
        </Routes>
      )}
    </div>
  );
};

export default AppRouter;
