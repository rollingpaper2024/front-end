import { toast } from 'react-toastify';
import { doc, deleteDoc } from "firebase/firestore"; 
import { db } from '@/database'

async function deleteUserMessage(collectionName: string, messageId: string,) {
  try {
    // 문서 참조 생성
    const messageRef = doc(db, collectionName, messageId);
    // 문서 삭제
    await deleteDoc(messageRef);
    toast.success("덕담을 삭제 했습니다.")
    return true;
  } catch (err) {
    console.error("Error removing document: ", err);
    return false;
  }
}

export { deleteUserMessage }