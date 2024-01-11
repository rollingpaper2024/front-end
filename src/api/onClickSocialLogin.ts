import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";

import { app } from "@/database";

const onClickSocialLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { currentTarget: { name } } = e;
    let provider;
    const auth = getAuth(app);

    if (name === "google") {
        provider = new GoogleAuthProvider();
    } else {
        console.error("지원되지 않는 프로바이더");
        return false;
    }
    
    try {
        await signInWithPopup(auth, provider);
        return true;
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error message:", error.message); // Error 타입으로 캐스팅
            return false;
        }
        console.log("An unknown error occurred");
        return false;
    }
};

export { onClickSocialLogin };