import React, { useEffect } from 'react';
import { onClickSocialLogin } from '@/api'
import MainTitle from '@/components/molecule/title/MainTitle'
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/user'

function Login() {
  const router = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [user, setUser] = useAtom(userAtom);

    useEffect(() => {
      if (user.uid && user.uid !== 'no-user') {
        router(`/main/${user.uid}`)
      }
    }, [user, router]);

    const handleSocialLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = await onClickSocialLogin(e);
    if (result === false) {
      console.log("테스트",user)
      console.log("Login failed", result);
    } 
  };
  return (
    <>
      <MainTitle title="회원가입 하기" desc="소셜 로그인 및 이메일로 간편 가입할 수 있어요."/>
      <button name="google" onClick={handleSocialLogin}>google</button></>
  )
}

export default Login