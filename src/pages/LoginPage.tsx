import Login from '@/components/template/login/Login'
import { onClickSocialLogin } from '@/api'
import KakaoLogin from 'react-kakao-login'

declare global {
  interface Window {
    Kakao: any
  }
}

function LoginPage() {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_APP_KAKAO_JAVASCRIPT_KEY)
  }

  const kakaoClientId = import.meta.env.VITE_APP_KAKAO_JAVASCRIPT_KEY
  const kakaoOnSuccess = async (data: any) => {
    console.log(data)
    const idToken = data.response.access_token // 엑세스 토큰 백엔드로 전달
  }
  const kakaoOnFailure = (error: any) => {
    console.log(error)
  }

  return (
    <>
      <div>
        <Login />
      </div>
      <div>
        <button name="google" onClick={onClickSocialLogin}>
          google
        </button>
      </div>
      <KakaoLogin token={kakaoClientId} onSuccess={kakaoOnSuccess} onFail={kakaoOnFailure} />
    </>
  )
}

export default LoginPage
