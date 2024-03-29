import { useState, useEffect } from 'react'
import * as Styled from './header.styled'
import SelectIcon from '@/components/molecule/header/SelectIcon'
import { useAtom } from 'jotai'
import { userAtom } from '@/store/user.ts'
import { coachMarkAtom } from '@/store/coachmark'
import { useLocation } from 'react-router-dom'
import { sharedParameterAtom } from '@/store/sharedParameter.ts'
import { useParams } from 'react-router-dom'

function index() {
  const [user] = useAtom(userAtom)
  const [isDisableCoachmark] = useAtom(coachMarkAtom)
  const [isUser, setIsUser] = useState(false)
  const location = useLocation()
  const pathParts = location.pathname.split('/')
  const targetPart = pathParts[1]
  const [sharedParameter, setSharedParameter] = useAtom(sharedParameterAtom)
  const { id } = useParams()
  console.log('sharedParameter', sharedParameter)

  useEffect(() => {
    if (targetPart.includes('main') && user.uid !== 'no-user' && id) {
      setSharedParameter(id)
    }
  }, [id])

  useEffect(() => {
    if (user.uid !== 'no-user') {
      setIsUser(true)
    } else {
      setIsUser(false)
    }
  }, [user])

  return (
    <Styled.SLayout>
      <SelectIcon isUser={isUser} isDisableCoachmark={isDisableCoachmark} path={targetPart} />
    </Styled.SLayout>
  )
}

export default index
