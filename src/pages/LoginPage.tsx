import React from 'react'
import { onClickSocialLogin } from '@/api'


declare global {
  interface Window {
    Kakao: any;
  }
}
  
const Login = () => {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
  }

  return (...);
}


const onLoginWithKakao = () => {
  const redirectUri = `${location.origin}/callback/kakaotalk`;
  const scope = [
    KAKAO_SCOPE_NICKNAME,

  ].join(",");

  window.Kakao.Auth.authorize({
    redirectUri,
    scope,
  });
};

function LoginPage() {
  return (
    <div><button name="google" onClick={onClickSocialLogin}>google</button></div>
    <button onClick={onLoginWithKakao}>카카오 로그인</button>
  )
}

export default LoginPage

