import React from "react";
import { useAppDispatch } from "../state/store";
import { appLogout } from "../state/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { AuthRoute } from "../constants/Routes";
const Home: React.FC = () => {
  const navi = useNavigate();

  const dispatch = useAppDispatch();
  const logout = async () => {
    await dispatch(appLogout());
  };

  return (
    <div>
      Home
      <button
        onClick={async () => {
          await logout();
          await navi(AuthRoute.signup);
          console.log("asd");
        }}>
        Logout
      </button>
      <p>asdas</p>
    </div>
  );
};

export default Home;
