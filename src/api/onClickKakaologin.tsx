export const onLoginWithKakao = () => {
  const redirectUri = `${location.origin}/kakaologin`;
  const getCodeFromUrl = (): string | null => {
    const params = new URLSearchParams(window.location.search);
    return params.get('code');
  };
  
  const code = getCodeFromUrl();
  if (code) {
    const scope = [
      'profile_nickname',
      'account_email',
    ].join(",");

    window.Kakao.Auth.authorize({
      redirectUri,
      scope,
    });
  } else {
    window.location.href = '/login';
  }
};