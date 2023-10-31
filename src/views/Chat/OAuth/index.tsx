import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import { CHAT_PATH } from 'src/constants';

export default function OAuth() {
     const { token } = useParams();
     const [cookies, setCookie] = useCookies();

     const navigator = useNavigate();

     useEffect(() => {
          if(!token) return;
          setCookie('token', token, { path: '/' });
          navigator(CHAT_PATH);
     }, [token]);

     return (
          <div>Oauth : {token}</div>
     )
}
