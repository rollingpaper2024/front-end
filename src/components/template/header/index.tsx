import { useState,useEffect} from 'react'
import * as Styled from "./header.styled"
import SelectIcon from '@/components/molecule/header/SelectIcon'
import { useAtom } from 'jotai'
import { userAtom } from '@/store/user.ts'

function index() {
  const [user] = useAtom(userAtom)
  const [isUser, setIsUser] = useState(false)
  
  useEffect(() => {
    if (user.uid !== 'no-user') {
     setIsUser(true)
    } else {
        setIsUser(false)
   }
  }, [user])

  
  return (
    <Styled.SLayout>
      <SelectIcon isUser={isUser } />
    </Styled.SLayout>

  )
}

export default index