import React from 'react'
import BtnArea from '@/components/molecule/button/BtnArea'
import {useRouter} from "@/hooks/useRouter"

function Landing() {
  const { routeTo } = useRouter()
  return (
    <div>
      <div style={{width:"100%",height:"527.41px"}}>Landing</div>
      <BtnArea title='시작하기' isDisabled={false} onClick={() => routeTo('/main')}/>
    </div>
  )
}

export default Landing