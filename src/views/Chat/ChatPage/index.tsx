import React, { useEffect } from 'react'
import './style.css'
import { useCookies } from 'react-cookie';
import { KakaoSignInRequest } from 'src/apis';
import { KakaoSignInRequestDto } from 'src/interfaces/request/auth';
import { useUserStore } from 'src/stores';

export default function ChatPage() {
     //!               state                //
     const [ cookies ] = useCookies();
     const { user } = useUserStore();

     //!             event handler              //
     const kakaoSignInResponseHandler = (code: string) => {
          if(code === 'NMI') alert('로그인한 사원번호와 일치하지않는 카카오 계정입니다.');
          if(code === 'SU') alert('성공');
          
          return;
     }
     const onOauthButtonClickHandler = (provider: string) => {
          window.location.href = `http://localhost:4040/auth/social/${provider}`;
     }

     //!                 effect                  //
     // description : 로그인 유저 정보가 바뀔 때마다 실행 //
     useEffect(()=>{
          const token = cookies.token;
          console.log(token);
          if(!user) return;

          const data : KakaoSignInRequestDto = {
               employeeCode : user?.employeeCode,
          }
          KakaoSignInRequest(data, token).then(kakaoSignInResponseHandler)
     }, [cookies])

     //!               render                  //
     return (
          <div id='chat-wrapper'>
               <div className="kakao-login" onClick={() => onOauthButtonClickHandler('kakao')}></div>
          </div>
     )
}
