import React, { ChangeEvent, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { getSignInUserRequest, signInRequest } from 'src/apis';
import { HOME_PATH, SYSTEM_COMPANY_INFO } from 'src/constants';
import { SignInRequestDto } from 'src/interfaces/request/auth';
import { SignInResponseDto } from 'src/interfaces/response/auth';
import ResponseDto from 'src/interfaces/response/response.dto';
import GetLoginUserResponseDto from 'src/interfaces/response/user/get-login-user.response.dto';
import { useUserStore } from 'src/stores';

export default function Main() {
  //!               state                //
  
  // description : 로그인 유저 정보 상태 //
  const { user, setUser } = useUserStore();
  // description : Cookie 상태 //
  const [cookies, setCookie] = useCookies();
  // description : 로그인 상태 //
  const [login, setLogin] = useState<boolean>(false);
  // description : 이메일 입력값 상태 //
  const [employeeCode, setEmployeeCode] = useState<number>(0);
  // description : 비밀번호 입력값 상태 //
  const [password, setPassword] = useState<string>('');
  // description : 로그인 Error 상태 //
  const [error, setError] = useState<boolean>(false);


  //!              function            //
  // description : 페이지 이동을 위한 네비게이트 함수 //
  const navigator = useNavigate();

  // description : 로그인 응답 처리 함수 //
  const signInResponseHandler = (result: SignInResponseDto | ResponseDto) => {
    const { code } = result;
    if (code === 'DM') setError(true);
    if (code === 'DE') alert('데이터베이스 에러입니다.');
    if (code !== 'SU') return;

    const { token, expiredTime } = result as SignInResponseDto;

    const now = new Date().getTime();
    const expires = new Date(now + expiredTime * 1000);

    setCookie('accessToken', token, { expires, path: HOME_PATH });
    console.log(token);
    getSignInUserRequest(token).then(getSignInUserResponseHandler);
    navigator(HOME_PATH);
  }
  const getSignInUserResponseHandler = (result: GetLoginUserResponseDto | ResponseDto) => {
    const { code } = result;
    if (code === 'NU') alert('토큰 정보가 잘못됐습니다.');
    if (code === 'DE') alert('데이터베이스 에러입니다.');
    if (code === 'SF') alert('로그인 실패');
    if (code !== 'SU') return;

    setUser({...result as GetLoginUserResponseDto});
  }

  //!             event handler              //
  // description : 로그인 버튼 클릭 이벤트 //
  const onSignInButtonClickHandler = async () => {
    const data: SignInRequestDto = {
      employeeCode : employeeCode,
      password : password
    }
    signInRequest(data).then(signInResponseHandler);
    setEmployeeCode(0)
    setPassword('');
  }
  // description : 사원번호 입력 이벤트 //
  const onEmployeeCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = /^[0-9]*$/;
    const value = event.target.value;
    const isNumber = reg.test(value);
    if (isNumber) setEmployeeCode(Number(value));
  }
  // description : 비밀번호 입력 이벤트 //
  const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }


  //!                 effect                  //
  // description : 로그인 유저 정보가 바뀔 때마다 실행 //
  useEffect(()=>{
    setLogin(user !== null);
  }, [user])

  //!               render                  //
  return (
    <div>
      { user ? ( <div> {user.employeeName} 님 환영합니다.</div> ) : 
        (<div className='main-login-box'>
          사원번호 <input type="text" placeholder='사원번호를 입력해주세요' value={employeeCode} onChange={onEmployeeCodeChangeHandler} />
          비밀번호 <input type="password" value={password} onChange={onPasswordChangeHandler}/>
          <button onClick={onSignInButtonClickHandler}>로그인</button>
        </div>) 
      }
      
    </div>
  )
}
