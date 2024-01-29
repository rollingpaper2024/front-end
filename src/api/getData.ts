import {
  collection,
  query,
  where,
  getDocs,
  limit,
  QueryDocumentSnapshot,
  startAfter,
  Firestore,
  doc,
  getDoc,
} from 'firebase/firestore'
import { db } from '@/database'

interface MessageType {
  id: string
  writer: string
  contents: string
  uid: string
  color: string
  date: string
  createdAt: string
  pocket: string
}

async function getUserMessages(
  userId: string,
  lastDoc?: QueryDocumentSnapshot | null,
  pageSize?: number,
) {
  try {
    // 기본 쿼리 설정
    let q = query(collection(db, 'Message'), where('uid', '==', userId))

    // 페이지 크기와 마지막 문서가 주어진 경우, 쿼리 수정
    if (pageSize) {
      q = lastDoc ? query(q, startAfter(lastDoc), limit(pageSize)) : query(q, limit(pageSize))
    }

    // 쿼리 실행 및 데이터 추출
    const querySnapshot = await getDocs(q)
    const messages: MessageType[] = []

    querySnapshot.forEach((doc) => {
      const messageData = doc.data() as MessageType
      messages.push({ ...messageData, id: doc.id })
    })

    // pageSize가 주어진 경우 lastVisible 반환, 아니면 messages만 반환
    return pageSize
      ? { messages, lastVisible: querySnapshot.docs[querySnapshot.docs.length - 1] }
      : messages
  } catch (err) {
    console.error('Error getting documents: ', err)
    return []
  }
}

async function getMessage(messageId: string) {
  try {
    const docRef = doc(db, 'Message', messageId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    } else {
      console.log('No such document!')
      return null
    }
  } catch (error) {
    console.error('Error getting message:', error)
    throw error
  }
}

export { getUserMessages, getMessage }
