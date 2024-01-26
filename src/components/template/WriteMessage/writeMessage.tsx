import { useEffect, useState } from 'react'
import { postData } from '@/api'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { app } from '@/database'
import { Editor } from '@toast-ui/react-editor'
// import '@toast-ui/editor/toastui-editor.css'
import BtnArea from '@/components/molecule/layout/BtnArea'
import Input from '@/components/atom/input/MainInput'
import * as Styled from './writemessage.styled'
import SelectCoinBtn from '@/components/atom/buttons/SelectCoinBtn'
import TextArea from '@/components/atom/text/TextArea'
import { useRouter } from '@/hooks/useRouter'

type Props = {
  editorRef: React.RefObject<Editor> | null
  content?: string
}

function WriteMessage({ content }: Props) {
  const { routeTo } = useRouter()

  const auth = getAuth(app)
  const [userId, setUserId] = useState('')
  const [selectedCoinColor, setSelectedCoinColor] = useState('')
  const [writerInput, setWriterInput] = useState('')
  const [error, setError] = useState('')
  const [texterror, setTextError] = useState('')
  const [colorerror, setColorError] = useState('')
  const [editorContent, setEditorContent] = useState(content ?? '')

  //코인 색상
  const handleColorSelected = (color: string) => {
    setSelectedCoinColor(color)
    if (color === '') {
      setColorError('코인 색상을 선택해주세요.')
    } else {
      setColorError('')
    }
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
  console.log('editorContent', editorContent)

  //에디터 컨텐츠
  const handleEditorChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const editorValue = event.target.value
    setEditorContent(editorValue)
    console.log('editorValue', editorValue)

    if (editorValue.length === 0) {
      setTextError('내용을 입력해주세요.')
    } else {
      setTextError('')
    }
  }
  console.log('content', editorContent)

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

  function postUpload() {
    if (selectedCoinColor === '') {
      setColorError('코인 색상을 선택해주세요.')
      return
    }
    if (writerInput.length > maxInputLength) {
      setError(`최대 ${maxInputLength}글자까지 입력 가능합니다.`)
      return
    } else if (writerInput.length === 0) {
      setError('이름을 입력해주세요.')
      return
    }

    if (editorContent.length === 0) {
      setTextError('내용을 입력해주세요.')
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
      contents: editorContent,
      uid: userId,
      color: selectedCoinColor,
      date: formattedDate,
    })
    routeTo(`/completemessage`)
  }

  // 모든 필드가 입력되었는지 확인
  const isFormValid = () => {
    return selectedCoinColor !== '' && writerInput !== '' && editorContent !== ''
  }

  return (
    <>
      <Styled.SLayout>
        <SelectCoinBtn
          selectedCoinColor={selectedCoinColor}
          setSelectedCoinColor={setSelectedCoinColor}
          onColorSelected={handleColorSelected}
        />
        {colorerror && <p style={{ color: 'red' }}>{colorerror}</p>}
        <Input value={writerInput} onChange={handleWriterInputChange} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <TextArea value={editorContent} onChange={handleEditorChange} />
        {texterror && <p style={{ color: 'red' }}>{texterror}</p>}
      </Styled.SLayout>
      <BtnArea
        title={'덕담 작성하기'}
        isDisabled={!isFormValid()}
        onClick={() => {
          postUpload()
          routeTo(`/completemessage`)
        }}
      />
    </>
  )
}

export default WriteMessage
