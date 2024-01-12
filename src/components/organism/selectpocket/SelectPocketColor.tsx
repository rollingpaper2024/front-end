import MainItemLayout from '@/components/template/layout/MainItemLayout'
// import EmptyPocket from '@/img/EmptyPocket'
import PocketIcon from '@/components/atom/icon/pocket/PocketIcon'
import EmptyPocketIconImg from '@/assets/emptyPocket.webp'
import BtnArea from '@/components/molecule/layout/BtnArea'
import MainTitle from '@/components/molecule/title/MainTitle'
import { postData } from '@/api'
import { useState, useEffect } from 'react'
import * as Styled from './selectpocket.styled'
import GreenPocketIcon from '@/img/GreenPocket'
import PinkPocketIcon from '@/img/PinkPocket'
import BluePocketIcon from '@/img/BluePocket'
import BlackPocketIcon from '@/img/BlackPocket'
import Pocket from '@/assets/복주머니.webp'
import MainModal from '../modal/MainModal'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/user'

type PocketColor = 'black' | 'pink' | 'blue' | 'green' | ''

function SelectPocket() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useAtom(userAtom);
  const [selectedPocket, setSelectedPocket] = useState({ pocket: '', uid: '' })
  const [isModalOpen, setIsModalOpen] = useState(false)


  const { pocket } = selectedPocket
 
  const pocketArr = [
    { component: <BlackPocketIcon />, color: 'black' },
    { component: <PinkPocketIcon />, color: 'pink' },
    { component: <BluePocketIcon />, color: 'blue' },
    { component: <GreenPocketIcon />, color: 'green' },
  ]

  useEffect(() => {
      if (user) {
        setSelectedPocket((prev) => ({
          ...prev,
          uid: user.uid,
        }))
      } else {
        setSelectedPocket((prev) => ({
          ...prev,
          uid: '',
        }))
      }
  }, [user])


  function setColor({ color }: { color: string }) {
    setSelectedPocket((prev) => ({
      ...prev,
      pocket: color,
    }))
  }

  const PostPocket = async () => {
    try {
      await postData('Pocket', selectedPocket);
    } catch (error) {
      console.error(error);
    }
  };

  const changePocket = () => {
    const mapper: { [key in PocketColor]: JSX.Element } = {
      black: <PocketIcon icon={Pocket} />,
      pink: <PocketIcon icon={Pocket} />,
      blue: <PocketIcon icon={Pocket} />,
      green: <PocketIcon icon={Pocket} />,
      '': <PocketIcon icon={EmptyPocketIconImg} />,
    }

    return mapper[pocket as PocketColor]
  }
  const selectPocket = () => {
    if (pocket.length > 0) {
      setIsModalOpen(true)
    } else {
      toast.error('포켓이 선택되지 않았습니다!')
    }
  }
  return (
    <>
        <MainModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        PostPocket={PostPocket}
      />
      <MainTitle
        title="복주머니 컬러를 선택하세요"
        desc="한번만 결정할 수 있으니 신중하게 선택하세요"
      />
      <MainItemLayout>
        {changePocket()}
        <Styled.SSelectLayout>
          {pocketArr.map((item) => {
            return (
              <Styled.SSelectColorDiv
                key={uuidv4()}
                onClick={() => {
                  setColor({ color: item.color })
                }}
              >
                {item.component}
              </Styled.SSelectColorDiv>
            )
          })}
        </Styled.SSelectLayout>
      </MainItemLayout>
      <BtnArea
        onClick={() => {
          selectPocket()
        }}
        title="선택 완료"
        isDisabled={pocket.length > 0 ? false : true}
      />

    </>
  )
}

export default SelectPocket
