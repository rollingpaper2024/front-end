import React from 'react'
import { getData } from '@/api'
import List from '@/components/template/list/List'


function MessageList() {

  async function test(){

    const data = await getData('Message')
    console.log("Message",data)
  }
  return (
    <div>
      <List/>
      <button onClick={() => { test() }}>test</button></div>
  )
}

export default MessageList