import React from 'react'
import { onClickSocialLogin } from '@/api'

function LoginPage() {
  return (
    <div><button name="google" onClick={onClickSocialLogin}>google</button></div>
  )
}

export default LoginPage