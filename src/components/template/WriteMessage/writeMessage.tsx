import { useEffect, useState, ChangeEvent,useRef  } from 'react'
import { postData } from '@/api'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { app } from '@/database'
import { Editor } from '@toast-ui/react-editor'
// import '@toast-ui/editor/toastui-editor.css'
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

function WriteMessage({ content, imageHandler }: Props) {
  const auth = getAuth(app)
  const [userId, setUserId] = useState('')
  const [selectedCoinColor, setSelectedCoinColor] = useState('')
  const [writerInput, setWriterInput] = useState('')
  const [error, setError] = useState('')
  const [editorContent, setEditorContent] = useState(content ?? '')
  const editorRef = useRef<Editor | null>(null);
  //코인 색상
  const handleColorSelected = (color: string) => {
    setSelectedCoinColor(color)
    console.log('color', color)
  }
  //이름
  const maxInputLength = 13
  const handleWriterInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value

    if (inputValue.length <= maxInputLength) {
      setWriterInput(inputValue)
      setError('')
    } else {
      setError(`최대 ${maxInputLength}글자까지 입력 가능합니다.`)
    }
    if (inputValue.length === 0) {
      setError('이름을 입력해주세요.')
    }
  }
  console.log("editorContent",editorContent)
  //에디터 컨텐츠
  const handleEditorChange = (value: string) => {
    setEditorContent(editorRef.current.getInstance().getHTML())

    if (value.length === 0) {
      setError('내용을 입력해주세요.')
    }
  }
 console.log("content",editorContent)
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

  let htmlContent = `<html>
    <head>
    <link rel="icon" href="/favicon.ico">
    <body>
    ${editorContent}
    </body>
    </html>`;

  function postUpload() {
    if (writerInput.length > maxInputLength) {
      setError(`최대 ${maxInputLength}글자까지 입력 가능합니다.`)
      return
    } else if (writerInput.length === 0) {
      setError('이름을 입력해주세요.')
      return
    }

    var TodayDate = new Date()
    var formattedDate = TodayDate.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })
    postData('Message', {
      writer: writerInput,
      contents: htmlContent,
      uid: userId,
      color: selectedCoinColor,
      date: formattedDate,
    })
  }
  return (
    <>
      <Styled.SLayout>
        <SelectCoinBtn selectedCoinColor={selectedCoinColor} setSelectedCoinColor={setSelectedCoinColor}onColorSelected={handleColorSelected} />
        <Input value={writerInput} onChange={handleWriterInputChange} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Editor
          initialValue={editorContent}
          initialEditType="wysiwyg"
          autofocus={false}
          ref={editorRef}
          toolbarItems={toolbar}
          hideModeSwitch
          height="40vh"
          onChange={(value) => handleEditorChange(value)}
          hooks={{ addImageBlobHook: imageHandler }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Styled.SLayout>
      <BtnArea title={'덕담 작성하기'} isDisabled={false} onClick={postUpload} />
    </>
  )
}

export default WriteMessage
