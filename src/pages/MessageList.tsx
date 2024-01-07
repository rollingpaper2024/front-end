import React, { useEffect, useState } from 'react';
import { getUserMessages } from '@/api';
import List from '@/components/template/list/List';
import { onAuthStateChanged,getAuth,User } from "firebase/auth";
import { app } from "@/database";

function MessageList() {
   const auth = getAuth(app);
  const [messages, setMessages] = useState([]);
  const [messageCount, setMessageCount] = useState(0);
  const [userId, setUserId] = useState(''); // 현재 로그인한 사용자의 ID 상태

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

  useEffect(() => {
    if (userId) {
      fetchMessages();
    }
  }, [userId]);

  async function fetchMessages() {
    const data = await getUserMessages('Message', userId);
    if (data) {
      setMessages(data);
      setMessageCount(data.length);
    }
  }
  console.log("test",userId,messages)

  return (
    <div>
      <List messageCount={messageCount} />
    </div>
  );
}

export default MessageList;