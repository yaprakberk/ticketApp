import { IOperationResult } from "../models/commonModel";
import { UserModel } from "../models/userModel";

export interface ILoginSignupType {
  error: any;
  loading: boolean;
}

export interface IInitialStateAuthType {
  user: any;
  login: ILoginSignupType;
  signup: ILoginSignupType;
}

export interface IInitialUserType {
  userList: {
    data: IOperationResult<UserModel[]> | undefined | null;
    loading: boolean;
    error: string | undefined;
  };
}

export interface IUserData {
  firstName: string;
  lastName: string;
  id: string;
  online: boolean | undefined;
}

export interface IUserSignupType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IUserLoginType {
  email: string;
  password: string;
}

export interface IICreateRoomParam {
  to: string;
  from: string;
}

export interface IISendMessageParam {
  to: string | undefined;
  from: string;
  roomId: string | undefined;
  message: string;
}
