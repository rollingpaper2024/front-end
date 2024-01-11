import { onClickSocialLogin } from '@/api'
import MainTitle from '@/components/molecule/title/MainTitle'
import { useNavigate } from 'react-router-dom';

function Login() {
  const router = useNavigate();
    const handleSocialLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = await onClickSocialLogin(e);
    if (result === true) {
      router(-1)
      // 포켓이 있는유저는 list페이지로, 포켓이 없는 유저는 /selectpocket페이지로 이동하게끔 바꿔야됨
    } else {
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