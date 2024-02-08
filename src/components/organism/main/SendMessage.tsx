import PocketIcon from '@/components/atom/icon/pocket/PocketIcon'
// import PocketIconImg from '@/img/PocketIcon';
import PocketIconImg from '@/assets/복주머니.webp'
import ActivePocketImg from '@/assets/pocket_active.webp'
import BtnArea from '@/components/molecule/layout/BtnArea'
import { useRouter } from '@/hooks/useRouter'
import MainItemLayout from '@/components/template/layout/MainItemLayout'
import MainTitle from '@/components/molecule/title/MainTitle'
import { useEffect, useState } from 'react'
import { getUserMessages } from '@/api'
import { useParams } from 'react-router-dom'
import { useAtom } from 'jotai'
import { userAtom } from '@/store/user.ts'
import { coachMarkAtom } from '@/store/coachmark.ts'
import CoachMark from '@/components/organism/coachmark'
import { sharedParameterAtom } from '@/store/sharedParameter'
import ActiveBluePocket from '@/assets/activebluepocket.webp'
import BluePocket from '@/assets/bluePocket.webp'

type PocketColor = 'black' | 'pink' | 'blue' | 'green' | ''

function SendMessage() {
  const { routeTo } = useRouter()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [messageCount, setMessageCount] = useState(0)
  const [isvalidUser, setIsValidUser] = useState(false)
  const [isPocket, setIsPocket] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user] = useAtom(userAtom)
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)
  const [btnMessage, setBtnMessage] = useState('')
  const [parameter, setParameter] = useState('')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [isDisableCoachmark, setIsDisableCoachmark] = useAtom(coachMarkAtom)
  const [sharedParameter] = useAtom(sharedParameterAtom)
  const [pocketName, setPocketName] = useState('')

 

  useEffect(() => {
    // 로컬 스토리지에서 값 확인
    const hideCoachMark = localStorage.getItem('hideCoachMark')
    if (!hideCoachMark) {
      setIsDisableCoachmark(false)
    }
  }, [])

  const handleHideCoachMark = () => {
    // 로컬 스토리지에 값 저장
    localStorage.setItem('hideCoachMark', 'true')
    setIsDisableCoachmark(true)
  }

  const { id } = useParams()

  useEffect(() => {
    generateBtnText()
    if (id && id !== 'no-user') {
      setIsValidUser(true)
      fetchMessages(id)
    } else {
      return
    }
  }, [id, isPocket])

  async function fetchMessages(userId: string) {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const messageData = await getUserMessages('Message', userId)
    const pocketData = await getUserMessages('Pocket', user.uid)
    if (messageData) {
      setMessageCount(messageData.length)
    }
    if (pocketData && pocketData.length > 0) {
      setIsPocket(true)
      setPocketName(pocketData[0].pocket)
    }
  }
  const generateBtnText = () => {
    console.log('1')
    if (user.uid !== 'no-user') {
      console.log('2')
      if (user.uid !== id) {
        console.log('3')
        setBtnMessage('덕담 쓰기')
        setParameter(`/writemessage/${id}`)
      } else {
        if (!isPocket) {
          console.log('4')
          setTitle('나만의 복주머니를 만들어보세요.')
          setDesc('복주머니를 만들어 따뜻한 덕담을 주고 받아볼까요?')
          setBtnMessage('시작하기')
          setParameter('/selectpocket')
        } else {
          if (messageCount === 0) {
            console.log('5')
            setTitle('도착한 덕담이 없습니다.')
            setDesc('친구에게 공유하여 덕담을 확인해 보세요.')
            setBtnMessage('덕담 읽기')
            setParameter(`/messagelist/${id}`)
            setIsBtnDisabled(true)
          } else {
            console.log('6')
            // 타이틀 desc 아직 미정
            setTitle(`${messageCount}개의 덕담 도착!`)
            setDesc('')
            setBtnMessage('덕담 읽기')
            setParameter(`/messagelist/${id}`)
            setIsBtnDisabled(false)
          }
        }
      }
    } else {
      console.log('7')
      // setTitle('나만의 복주머니를 만들어보세요.')
      // setDesc('복주머니를 만들어 따뜻한 덕담을 주고 받아볼까요?')
      setBtnMessage('덕담 쓰기')
      setParameter(`/writemessage/${id}`)
      // 로그인 안했을떄 b유저가 a유저의 링크를 공유받았을때
    }
  }

  const generateParameter = () => {
    routeTo(parameter)
  }

  // jotai의 user의 id값이 no-user가 아닐때 (로그인 되있을때)
  // >   jotai의 user의 id값과 파라미터의 id값이 같은지 판별하고 다르다면,  =>  덕담 쓰기
  // >  jotai의 user의 id값과 파라미터의 id값이 일치 하다면
  //     - 복주머니가 없을때 (isPocket이 false) => text ='시작하기'
  //     - 복주머니도 있는데 덕담 없을때 ( isPocket이 true인데 messageCount가 0일때) =>text = '덕담 읽기' 버튼 disable => true toastify
  //    - 복주머니도 있는데 덕담 있을때 ( isPocket이 true인데 messageCount가 0이상일때 ) => text = '덕담 읽기' 버튼 disable=>false

  // jotai의 user의 id값이 no-user일때 (로그인 안되있을떄)
  // text = '시작하기'

  const PocketRenderer = () => {
    const mapper: { [key in PocketColor]: JSX.Element } = {
      black: (
        <PocketIcon
          icon={isvalidUser === true && messageCount > 0 ? ActivePocketImg : PocketIconImg}
        />
      ),
      blue: (
        <PocketIcon
          icon={isvalidUser === true && messageCount > 0 ? ActiveBluePocket : BluePocket}
        />
      ),
      pink: (
        <PocketIcon
          icon={isvalidUser === true && messageCount > 0 ? ActivePocketImg : PocketIconImg}
        />
      ),
      green: (
        <PocketIcon
          icon={isvalidUser === true && messageCount > 0 ? ActivePocketImg : PocketIconImg}
        />
      ),
      '': <PocketIcon icon={PocketIconImg} />,
    }
    return mapper[pocketName as PocketColor]
  }

  return (
    <>
      <CoachMark handleHideCoachMark={handleHideCoachMark} showCoachMark={!isDisableCoachmark} />
      <MainTitle title={title} desc={desc} />
      <MainItemLayout>
        {PocketRenderer()}
        {/* <PocketIcon
          icon={isvalidUser === true && messageCount > 0 ? ActivePocketImg : PocketIconImg}
        /> */}
      </MainItemLayout>
      <BtnArea
        title={btnMessage}
        isDisabled={isBtnDisabled}
        onClick={() => {
          generateParameter()
        }}
      />
    </>
  )
}

export default SendMessage
