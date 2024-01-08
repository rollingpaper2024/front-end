export const onLoginWithKakao = () => {
  const redirectUri = `${location.origin}/kakaologin`;
  const scope = [
'profile_nickname',
'account_email',
  ].join(",");

  window.Kakao.Auth.authorize({
    redirectUri,
    scope,
  });
};
