import React from 'react'
import * as Styled from "./selectpocket.styled"
import MainItemLayout from '@/components/template/layout/MainItemLayout'
// import EmptyPocket from '@/img/EmptyPocket'
import PocketIcon from '@/components/atom/icon/pocket/PocketIcon'
import EmptyPocketIconImg from "@/assets/emptyPocket.png"
import BtnArea from '@/components/molecule/layout/BtnArea'
import MainTitle from '@/components/molecule/title/MainTitle'


function SelectPocket() {
  return (
    <>
      <MainTitle title="복주머니 컬러를 선택하세요" desc='한번만 결정할 수 있으니 신중하게 선택하세요'/>
      {/* <div style={{height:"118px"}}></div> */}
      <MainItemLayout>
        <PocketIcon icon={EmptyPocketIconImg} />
      </MainItemLayout>
       <BtnArea title='선택 완료' isDisabled={true}  />
      </>
  )
}

export default SelectPocket