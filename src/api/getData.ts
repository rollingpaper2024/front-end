import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/database";

interface messageType{
  writer:string;
  contents:string;
  uid:string;
  createdAt:string;
  pocket:string;
}

// 특정 사용자의 방명록만 가져오는 함수
async function getUserMessages(collectionName:string, userId:string) {
  try {
    const q = query(collection(db, collectionName), where("uid", "==", userId));
    const querySnapshot = await getDocs(q);
    const messages: messageType[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    querySnapshot.forEach((doc: { data: () => any; }) => {
      messages.push(doc.data());
    });
    return messages;
  } catch (err) {
    console.error("Error getting documents: ", err);
  }
}

export {getUserMessages}