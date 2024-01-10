import MainItemLayout from '@/components/template/layout/MainItemLayout'
// import EmptyPocket from '@/img/EmptyPocket'
import PocketIcon from '@/components/atom/icon/pocket/PocketIcon'
import EmptyPocketIconImg from "@/assets/emptyPocket.png"
import BtnArea from '@/components/molecule/layout/BtnArea'
import MainTitle from '@/components/molecule/title/MainTitle'
import { postData } from '@/api'
import { useState,useEffect } from 'react'
import { onAuthStateChanged,getAuth } from "firebase/auth";
import { app } from "@/database";


function SelectPocket() {
  const auth = getAuth(app);
  const [selectedPocket,setSelectedPocket] =useState({pocket:'black',uid:''});

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
  
    // Clean up the subscription on component unmount
    return () => unsubscribe();
  }, []);

    function test() {
      postData('Pocket',  selectedPocket)
      
      
    }
  return (
    <>
      <MainTitle title="복주머니 컬러를 선택하세요" desc='한번만 결정할 수 있으니 신중하게 선택하세요'/>
      <MainItemLayout>
        <PocketIcon icon={EmptyPocketIconImg} />
        <button onClick={()=>test()}>컬러선택 테스트용 버튼</button>
      </MainItemLayout>
       <BtnArea title='선택 완료' isDisabled={true}  />
      </>
  )
}

export default SelectPocket