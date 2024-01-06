
import  { User, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { fireAuth } from '../config/firebaseConfig';
import { IOperationResult, OperationResult } from '../models/commenModels';


class AuthService {
  async login(email: string, password: string): Promise<IOperationResult<User>> {
    try {
      const { user } = await signInWithEmailAndPassword(fireAuth, email, password);
      return new OperationResult({
        success: true,
        data: user,
      });
    } catch (error: any) {
      return new OperationResult({
        success: false,
        error: error.message,
      });
    }
  }
  async logout(): Promise<IOperationResult> {
    try {
      await signOut(fireAuth);
      return new OperationResult({
        success: true,
      });
    } catch (error: any) {
      return new OperationResult({
        success: false,
        message: error.message,
      });
    }
  }

  // TODO Sign add metod
  // async signup(email:string,password:string):Promise


  async updateProfile(name: string): Promise<IOperationResult> {
    try {
      await updateProfile(fireAuth.currentUser as User, {
        displayName: name,
      });
      return new OperationResult({
        success: true,
      });
    } catch (error: any) {
      return new OperationResult({
        success: false,
        message: error.message,
      });
    }
  }
}

const authService = new AuthService();
export default authService;