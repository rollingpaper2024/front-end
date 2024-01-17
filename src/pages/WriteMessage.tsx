import { useEffect, useState } from 'react'
import { postData } from '@/api'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { app } from '@/database'

function WriteMessage() {
  const auth = getAuth(app)
  const [userId, setUserId] = useState('')

  useEffect(() => {
    // 현재 로그인한 사용자 확인
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid)
      } else {
        setUserId('')
      }
    })

    return () => unsubscribe()
  }, [])

  console.log('test', userId)

  function test() {
    postData('Message', {
      writer: '날짜 테스트',
      contents: '갑진년 새해복 많이 받아',
      uid: userId,
      color: '금',
      date: new Date().toString(),
    })
  }

  return (
    <div>
      <button
        onClick={() => {
          test()
        }}
      >
        test
      </button>
    </div>
  )
}

export default WriteMessage
