/* eslint-disable @typescript-eslint/no-unused-vars */
import  { useEffect, useState } from 'react';
import { getUserMessages } from '@/api';
import List from '@/components/template/list/List';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/user'

function MessageList() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [user] = useAtom(userAtom);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [messages, setMessages] = useState<any[]>([]);
  const [messageCount, setMessageCount] = useState(0);


  useEffect(() => {
    if (user) {
      fetchMessages();
    }
  }, [user]);

  async function fetchMessages() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = await getUserMessages('Message', user.uid);
    if (data) {
      setMessages(data);
      setMessageCount(data.length);
    }
  }

  return (
    <>
      <List messageCount={messageCount} />
    </>
  );
}

export default MessageList;