import React from 'react'
import { onClickSocialLogin } from '@/api'
import MainTitle from '@/components/molecule/title/MainTitle'

function Login() {
  return (
    <>
      <MainTitle title="회원가입 하기" desc="소셜 로그인 및 이메일로 간편 가입할 수 있어요."/>
      <button name="google" onClick={onClickSocialLogin}>google</button></>
  )
}

export default Login