import { postData } from '@/api'
import { v4 as uuidv4 } from 'uuid'

function WriteMessage() {
  function test() {
    postData('Message', { writer: '슈짱', contents: '새해복 많이 받아', uid: uuidv4(), pocket: 1 })
    // post 요청할때 이렇게 공통 함수 import 해서 하면 됩니다. pocket은 pocket의 색상 번호 입니다.
  }
  return (
    <div>
      {' '}
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
