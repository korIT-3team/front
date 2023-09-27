import axios from 'axios';
import { SignInRequestDto } from 'src/interfaces/request/auth';
import { SignInResponseDto } from 'src/interfaces/response/auth';
import ResponseDto from 'src/interfaces/response/response.dto';
import GetLoginUserResponseDto from 'src/interfaces/response/user/get-login-user.response.dto';

const API_DOMAIN = 'http://localhost:4040';

const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;
const GET_SIGN_IN_USER_URL = () => `${API_DOMAIN}/auth/user`;

export const signInRequest = async (data: SignInRequestDto) => {
     const result = 
     await axios.post(SIGN_IN_URL(), data)
     .then((response) => {
       const responseBody: SignInResponseDto = response.data;
       return responseBody;
     })
     .catch((error) => {
       const responseBody: ResponseDto = error.response.data;
       return responseBody;
     });

     return result;
}

export const getSignInUserRequest = async (token: string) => {
  const headers = { headers: { 'Authorization': `Bearer ${token}` } };
  const result = await axios.get(GET_SIGN_IN_USER_URL(), headers)
  .then((response) => {
       const responseBody: GetLoginUserResponseDto = response.data;
       return responseBody;
  }).catch((error) => {
       const responseBody: ResponseDto = error.response.data;
       return responseBody;
  });

  return result;
}