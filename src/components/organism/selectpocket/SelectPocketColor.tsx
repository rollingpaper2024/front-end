import MainItemLayout from '@/components/template/layout/MainItemLayout'
// import EmptyPocket from '@/img/EmptyPocket'
import PocketIcon from '@/components/atom/icon/pocket/PocketIcon'
import EmptyPocketIconImg from "@/assets/emptyPocket.webp"
import BtnArea from '@/components/molecule/layout/BtnArea'
import MainTitle from '@/components/molecule/title/MainTitle'
import { postData } from '@/api'
import { useState,useEffect } from 'react'
import { onAuthStateChanged,getAuth } from "firebase/auth";
import { app } from "@/database";
import * as Styled from "./selectpocket.styled"
import GreenPocketIcon from '@/img/GreenPocket'
import PinkPocketIcon from '@/img/PinkPocket'
import BluePocketIcon from '@/img/BluePocket'
import BlackPocketIcon from '@/img/BlackPocket'
import Pocket from "@/assets/복주머니.webp"

type PocketColor = 'black' | 'pink' | 'blue' | 'green' | '';

function SelectPocket() {
  const auth = getAuth(app);
  const [selectedPocket, setSelectedPocket] = useState({ pocket: '', uid: '' });

  const {pocket} =selectedPocket


  const pocketArr = [
    { component: <BlackPocketIcon />, color: 'black' },
    { component: <PinkPocketIcon />, color: 'pink' },
    { component: <BluePocketIcon />, color: 'blue' },
    { component: <GreenPocketIcon />, color: 'green' }
  ];

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSelectedPocket(prev => ({
          ...prev,
          uid: user.uid
        }));
      } else {
        setSelectedPocket(prev => ({
          ...prev,
          uid: ''
        }));
      }
    });
  

    return () => unsubscribe();
  }, []);

  function setColor({ color }: { color: string }) {
    console.log("color",color)
    setSelectedPocket((prev) => ({
      ...prev,
      pocket:color
    }))
      // postData('Pocket',  selectedPocket)    
  }

  const changePocket = () => {
    const mapper: { [key in PocketColor]: JSX.Element } = {
      'black': <PocketIcon icon={Pocket} />,
      'pink': <PocketIcon icon={Pocket} />,
      'blue': <PocketIcon icon={Pocket} />,
      'green': <PocketIcon icon={Pocket} />,
      '': <PocketIcon icon={EmptyPocketIconImg} />
    };
  
    return mapper[pocket as PocketColor];
  };
  
  return (
    <>
      <MainTitle title="복주머니 컬러를 선택하세요" desc='한번만 결정할 수 있으니 신중하게 선택하세요'/>
      <MainItemLayout>
        {changePocket()}
        <Styled.SSelectLayout>
          {
            pocketArr.map((item) => {
              return (
                <Styled.SSelectColorDiv onClick={()=>{setColor({ color: item.color })}}>
                  {item.component}
                 </Styled.SSelectColorDiv>
              )
            })
          }
          
        </Styled.SSelectLayout>
   
      </MainItemLayout>
       <BtnArea title='선택 완료' isDisabled={true}  />
      </>
  )
}

export default SelectPocket