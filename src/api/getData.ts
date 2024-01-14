import { collection, query, where, getDocs, limit, QueryDocumentSnapshot } from 'firebase/firestore'
import { db } from '@/database'

interface messageType {
  writer: string
  contents: string
  uid: string
  createdAt: string
  pocket: string
}
// lastVisible은 마지막 데이터일때
// 특정 사용자의 방명록만 가져오는 함수
async function getUserMessages(collectionName: string, userId: string, pageSize?: number) {
  try {
    let q = query(collection(db, collectionName), where('uid', '==', userId))
    if (pageSize) {
      q = query(q, limit(pageSize))
    }

    const querySnapshot = await getDocs(q)
    const messages: messageType[] = []

    querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
      const messageData = doc.data() as messageType // 타입 단언 사용
      messages.push(messageData)
    })

    return messages
  } catch (err) {
    console.error('Error getting documents: ', err)
  }
}

export { getUserMessages }
