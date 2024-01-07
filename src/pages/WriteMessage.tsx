import { useEffect, useState } from 'react';
import { postData } from '@/api'
import { onAuthStateChanged,getAuth,User } from "firebase/auth";
import { app } from "@/database";

function WriteMessage() {
     const auth = getAuth(app);
  const [userId, setUserId] = useState('');

    useEffect(() => {
    // 현재 로그인한 사용자 확인
    const unsubscribe = onAuthStateChanged(auth, (user: User )  => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId('');
      }
    });

    return () => unsubscribe(); 
    }, []);
  
  console.log("test",userId)
  
  function test() {
    postData('Message', { writer: '슈슈', contents:'갑진년 새해복 많이 받아',uid:userId,pocket:1})
    // post 요청할때 이렇게 공통 함수 import 해서 하면 됩니다. pocket은 pocket의 색상 번호 입니다.
    
  }
  return (
    <div>   <button
    onClick={() => {
      test()
    }}
  >
    test
  </button></div>
  )
}

export default WriteMessage