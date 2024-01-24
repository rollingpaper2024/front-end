import { useEffect, useState, ChangeEvent } from 'react'
import { postData } from '@/api'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { app } from '@/database'
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/toastui-editor.css'
import BtnArea from '@/components/molecule/layout/BtnArea'
import Input from '@/components/atom/input/MainInput'
import * as Styled from './writemessage.styled'
import SelectCoinBtn from '@/components/atom/buttons/SelectCoinBtn'

type Props = {
  editorRef: React.RefObject<Editor> | null
  imageHandler: (blob: File, callback: typeof Function) => void
  content?: string
}

const toolbar = [['heading', 'bold', 'italic', 'strike'], ['hr', 'quote', 'ul', 'ol'], ['image']]

function WriteMessage({ content, editorRef, imageHandler }: Props) {
  const auth = getAuth(app)
  const [userId, setUserId] = useState('')
  const [selectedCoinColor, setSelectedCoinColor] = useState('')
  const [writerInput, setWriterInput] = useState('')
  const [editorContent, setEditorContent] = useState(content ?? '')

  //코인 색상
  const handleColorSelected = (color: string) => {
    setSelectedCoinColor(color)
    console.log('color', color)
  }
  //이름
  const handleWriterInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWriterInput(event.target.value)
  }
  //에디터 컨텐츠
  const handleEditorChange = (value: string) => {
    setEditorContent(value)
  }

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
    var TodayDate = new Date()
    var formattedDate = TodayDate.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })
    postData('Message', {
      writer: writerInput,
      contents: editorContent,
      uid: userId,
      color: selectedCoinColor,
      date: formattedDate,
    })
  }

  return (
    <Styled.SLayout>
      <button
        onClick={() => {
          test()
        }}
      >
        test
      </button>
      <Input value={writerInput} onChange={handleWriterInputChange} />
      <Editor
        initialValue={editorContent}
        initialEditType="wysiwyg"
        autofocus={false}
        ref={editorRef}
        toolbarItems={toolbar}
        hideModeSwitch
        height="500px"
        onChange={(value) => handleEditorChange(value)}
        hooks={{ addImageBlobHook: imageHandler }}
      />
      <SelectCoinBtn onColorSelected={handleColorSelected} />
    </Styled.SLayout>
  )
}

export default WriteMessage
