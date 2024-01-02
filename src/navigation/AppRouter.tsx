import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AUTHROUTE from "./AUTHROUTE";
import MAINROUTE from "./MAINROUTE";
import { RootState, useAppDispatch } from "../state/store";
import { fireAuth } from "../config/firebaseConfig";
import { updateAuthState } from "../state/slices/authSlice";

const AppRouter: React.FC = () => {



  
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.authSlice);
  useEffect(() => {
    const subscription = fireAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(updateAuthState(user));
       
      }
    });
    return () => subscription();
  }, [user]);

  return (
    <div>
      {/* {!user ? (
        <>
                <AUTHROUTE />


        </>
      ) : (
        <>
          <MAINROUTE />
        </>
      )} */}
    </div>
  );
};

export default AppRouter;