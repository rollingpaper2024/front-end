import {
    getAuth,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup
} from "firebase/auth";

import { app } from "@/database";

const onClickSocialLogin = async (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
        const {
            currentTarget: { name },
        } = e;

        let provider;
        const auth = getAuth(app);

        if (name === "google") {
            provider = new GoogleAuthProvider();
        }else {
            // 지원되지 않는 프로바이더인 경우 처리
            console.error("지원되지 않는 프로바이더");
            return;
        }
        
        await signInWithPopup(
            auth,
            provider as GithubAuthProvider | GoogleAuthProvider
        ).then(() => {
            alert("로그인 성공"); 
            // 추후 toastify로 변경 예정
        }).catch((error) => { 
            console.log(error);
            const errorMessage = error?.message;
            console.log("errorMessage",errorMessage);
            // 추후 토스티파이로 세팅예정
        });



};

export { onClickSocialLogin }