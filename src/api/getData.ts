import {
  collection,
  query,
  where,
  getDocs,
  limit,
  QueryDocumentSnapshot,
  startAfter,
} from 'firebase/firestore'
import { db } from '@/database'

interface messageType {
  writer: string
  contents: string
  uid: string
  createdAt: string
  pocket: string
}

async function getUserMessages(
  collectionName: string,
  userId: string,
  lastDoc?: QueryDocumentSnapshot | null,
  pageSize?: number,
) {
  try {
    // 기본 쿼리 설정
    let q = query(collection(db, collectionName), where('uid', '==', userId))

    // 페이지 크기와 마지막 문서가 주어진 경우, 쿼리 수정
    if (pageSize) {
      q = lastDoc ? query(q, startAfter(lastDoc), limit(pageSize)) : query(q, limit(pageSize))
    }

    // 쿼리 실행 및 데이터 추출
    const querySnapshot = await getDocs(q)
    const messages: messageType[] = []

    querySnapshot.forEach((doc) => {
      const messageData = doc.data() as messageType
      messages.push(messageData)
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

export { getUserMessages }
