import React from 'react'
import { getData } from '@/api'


function MessageList() {

  async function test(){

    const data = await getData('Message')
    console.log("Message",data)
  }
  return (
    <div><button onClick={()=>{test()}}>test</button></div>
  )
}

export default MessageList