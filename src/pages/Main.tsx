import React from 'react'
import MainBtn from '@/components/atom/buttons/MainBtn'
import ModalCard from '@/components/atom/card/ModalCard'

function main() {
  return (
    <>
      <div>main</div>
      <MainBtn title="로그인" isDisabled={false} />
      <ModalCard />
    </>
  )
}

export default main
