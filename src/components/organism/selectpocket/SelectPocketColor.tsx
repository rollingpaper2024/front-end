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
import GreenPocket from '@/img/GreenPocket'
import PinkPocket from '@/img/PinkPocket'
import BluePocket from '@/img/BluePocket'
import BlackPocket from '@/img/BlackPocket'



function SelectPocket() {
  const auth = getAuth(app);
  const [selectedPocket, setSelectedPocket] = useState({ pocket: 'black', uid: '' });
  const pocketArr = [
    { component: <BlackPocket />, color: 'black' },
    { component: <PinkPocket />, color: 'pink' },
    { component: <BluePocket />, color: 'blue' },
    { component: <GreenPocket />, color: 'green' }
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
  
  return (
    <>
      <MainTitle title="복주머니 컬러를 선택하세요" desc='한번만 결정할 수 있으니 신중하게 선택하세요'/>
      <MainItemLayout>
        <PocketIcon icon={EmptyPocketIconImg} />
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