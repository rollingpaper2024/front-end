import { onClickSocialLogin } from '@/api'

function Login() {
  return (
    <div>
      <button name="google" onClick={onClickSocialLogin}>
        google
      </button>
    </div>
  )
}

export default Login
