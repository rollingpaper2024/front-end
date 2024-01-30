import React, { useEffect } from 'react'
import { onClickSocialLogin } from '@/api'
import MainTitle from '@/components/molecule/title/MainTitle'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { userAtom } from '@/store/user'
import KakaoLogin from 'react-kakao-login'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FirebaseError,
} from 'firebase/auth'
import { app } from '@/database'
import { onLoginWithKakao } from '@/api/onClickKakaologin'
import * as Styled from './login.styled'

function Login() {
  const router = useNavigate()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useAtom(userAtom)

  const kakaoClientId = import.meta.env.VITE_APP_KAKAO_JAVASCRIPT_KEY
  const auth = getAuth(app)
  const kakaoOnFailure = (error: any) => {
    console.log('kakaoOnFailure', error)
  }
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_APP_KAKAO_JAVASCRIPT_KEY)
    }
  }, [])

  const kakaoOnSuccess = async (data: any) => {
    try {
      await createUserWithEmailAndPassword(auth, data.profile.kakao_account.email, data.profile.id)
    } catch (error: FirebaseError) {
      const errorMessage = error?.message
      console.log('errorMessage', errorMessage)
      if (errorMessage.includes('(auth/email-already-in-use)')) {
        try {
          await signInWithEmailAndPassword(auth, data.profile.kakao_account.email, data.profile.id)
        } catch (loginError) {
          console.log(loginError)
          // 추가적인 오류 처리
        }
      }
    }
  }

  useEffect(() => {
    if (user.uid && user.uid !== 'no-user') {
      router(`/main/${user.uid}`)
    }
  }, [user, router])

  const handleSocialLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = await onClickSocialLogin(e)
    if (result === false) {
      console.log('테스트', user)
      console.log('Login failed', result)
    }
  }
  return (
    <>
      <MainTitle title="회원가입 하기" desc="소셜 로그인 및 이메일로 간편 가입할 수 있어요." />
      <Styled.SBtnLayout>
        <KakaoLogin
          style={{
            width: '472px',
            height: '52px',
            backgroundColor: '#fee500',
            fontSize: '12px',
            fontWeight: '600',
            borderRadius: '10px',
          }}
          name="kakao"
          onClick={onLoginWithKakao}
          token={kakaoClientId}
          onSuccess={kakaoOnSuccess}
          onFail={kakaoOnFailure}
        />
        <Styled.SBtn name="google" onClick={handleSocialLogin}>
          <h3>Google 로그인</h3>
        </Styled.SBtn>
      </Styled.SBtnLayout>
    </>
  )
}

export default Login
