import axios from 'axios';
import { SignInRequestDto } from 'src/interfaces/request/auth';
import { SignInResponseDto } from 'src/interfaces/response/auth';
import ResponseDto from 'src/interfaces/response/response.dto';

const API_DOMAIN = 'http://localhost:4040/';

const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;

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