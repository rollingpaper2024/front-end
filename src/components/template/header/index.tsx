import { useState, useEffect } from 'react'
import * as Styled from './header.styled'
import SelectIcon from '@/components/molecule/header/SelectIcon'
import { useAtom } from 'jotai'
import { userAtom } from '@/store/user.ts'
import { coachMarkAtom } from '@/store/coachmark'

function index() {
  const [user] = useAtom(userAtom)
  const [isDisableCoachmark] = useAtom(coachMarkAtom)
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    if (user.uid !== 'no-user') {
      setIsUser(true)
    } else {
      setIsUser(false)
    }
  }, [user])
  console.log('test', isDisableCoachmark)
  return (
    <Styled.SLayout>
      <SelectIcon isUser={isUser} isDisableCoachmark={isDisableCoachmark} />
    </Styled.SLayout>
  )
}

export default index
