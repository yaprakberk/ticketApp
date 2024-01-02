import { User } from 'firebase/auth';

export enum OperationResultAction {
    login = 'login',
    logout = 'logout',
    reload = 'reload'
  }
  export interface IOperationResult<T = void> {
    success: boolean;
    data?: T;
    error?: string;
    action?: OperationResultAction;
  }


export interface IAuthState {
  initializing: boolean;
  user?: User;
  errorMessage?: string;
  editProfileModalState: IEditProfileModalState;
}

export interface IEditProfileModalState {
  open: boolean;
  data?: string;
}


export class OperationResult<T = void> implements IOperationResult<T> {
  success: boolean = true;
  error?: string;
  message?: string;
  data?: T;
  action?: OperationResultAction;
  constructor(params?: {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
    action?: OperationResultAction;
  }) {
    if (params) {
      Object.assign(this, { ...params });
    }
  }
}


