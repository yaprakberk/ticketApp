import React from "react";
import { useAppDispatch } from "../state/store";
import { appLogout } from "../state/slices/authSlice";
import { useNavigate } from "react-router-dom";
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
          logout();
        }}>
        Logout
      </button>
      a sdasdas
    </div>
  );
};

export default Home;
