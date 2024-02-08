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

async function getUserMessages(collectionName: string, userId: string) {
  try {
    const q = query(collection(db, collectionName), where('uid', '==', userId))
    const querySnapshot = await getDocs(q)
    let messages: MessageType[] = []

    querySnapshot.forEach((doc) => {
      const messageData = doc.data() as MessageType
      messages.push({ ...messageData, id: doc.id })
    })
    messages = messages.sort((a, b) => {
      // Date 객체로 변환
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)

      // 최신 날짜가 먼저 오도록 정렬
      return dateB.getTime() - dateA.getTime()
    })

    return messages
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
