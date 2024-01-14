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
  lastDoc?: null,
  pageSize?: number,
) {
  try {
    let q

    if (pageSize) {
      if (lastDoc) {
        q = query(
          collection(db, collectionName),
          where('uid', '==', userId),
          startAfter(lastDoc),
          limit(pageSize),
        )
      } else {
        q = query(collection(db, collectionName), where('uid', '==', userId), limit(pageSize))
      }
      const querySnapshot = await getDocs(q)
      const messages: messageType[] = []

      querySnapshot.forEach((doc) => {
        const messageData = doc.data() as messageType
        messages.push(messageData)
      })

      return { messages, lastVisible: querySnapshot.docs[querySnapshot.docs.length - 1] }
    } else {
      // pageSize가 제공되지 않은 경우, 모든 항목 반환
      q = query(collection(db, collectionName), where('uid', '==', userId))
      const querySnapshot = await getDocs(q)
      const messages: messageType[] = []

      querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
        const messageData = doc.data() as messageType
        messages.push(messageData)
      })

      return messages
    }
  } catch (err) {
    console.error('Error getting documents: ', err)
    return []
  }
}

export { getUserMessages }
