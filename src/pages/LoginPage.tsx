import Login from '@/components/template/login/Login'
import { onClickSocialLogin } from '@/api'
import KakaoLogin from 'react-kakao-login'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithCustomToken,
  FirebaseError,
} from 'firebase/auth'
import { app } from '@/database'

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
  const kakaoOnFailure = (error: any) => {
    console.log(error)
  }
  /*
  const kakaoOnSuccess = async (data: any) => {
    console.log(data)
    console.log(data.profile.kakao_account.email)
    console.log(data.response.access_token)
    const idToken = data.response.access_token // 엑세스 토큰 백엔드로 전달
  }
  */

  const kakaoOnSuccess = async (data: any) => {
    console.log(data)
    console.log(data.profile.kakao_account.email)
    console.log(data.response.access_token)
    // const idToken = data.response.access_token // 엑세스 토큰 백엔드로 전달
    try {
      const auth = getAuth(app)
      await createUserWithEmailAndPassword(auth, data.profile.kakao_account.email, data.profile.id)
      //const customToken = await getCustomToken()
      //await signInWithCustomToken(auth, customToken)
      //toast.success('성공적으로 회원가입이 완료 되었습니다.')
      alert('회원가입 성공')
    } catch (error: FirebaseError) {
      console.log(error)
      const errorMessage = error?.message
      console.log('errorMessage', errorMessage)
    }
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
      {/*<button name="kakao" onClick={onClickKakaoLogin}>
        kakao
  </button>*/}
    </>
  )
}

export default LoginPage
