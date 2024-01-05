import React from 'react'
import PocketIcon from '@/components/atom/icon/pocket/PocketIcon'
import MainBtn from '@/components/atom/buttons/MainBtn'
import PocketIconImg from "@/assets/pocket_active.png"
import { useNavigate } from 'react-router-dom';

function SendMessage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/selectpocket'); // '/selectpocket' 경로로 이동
      };
  return (
    <>
        <PocketIcon icon={PocketIconImg}/>
        <MainBtn title='덕담 보내기' isDisabled={false}  onClick={handleButtonClick} />
    </>
  )
}

export default SendMessage