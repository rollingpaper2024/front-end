import React from 'react'
import * as Styled from "./main.styled"
import SendMessage from '@/components/molecule/main/SendMessage'
import Header from '@/components/template/header'

function index() {
  return (
    <Styled.SLayout>
        <Header/>
        <SendMessage/>
    </Styled.SLayout>
  )
}

export default index