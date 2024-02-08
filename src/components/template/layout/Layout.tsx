import React, { useEffect, useState } from 'react'
import * as Styled from './layout.styled'
import { useRouter } from '@/hooks/useRouter'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { app } from '@/database'
import Loader from '@/components/atom/loader/Loader'
import Header from '@/components/template/header'

interface GeneralLayoutProps {
  children: React.ReactNode
  isUser?: boolean
}

const Layout: React.FC<GeneralLayoutProps> = ({ children, isUser }) => {
  const auth = getAuth(app)
  const [init, setInit] = useState<boolean>(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { routeTo } = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setIsAuthenticated(!!user)
      setInit(true)
    })
    return () => unsubscribe()
  }, [auth])

  //키보드 밀림 현상 방지
  useEffect(() => {
    const handleVisualViewportResize = () => {
      const { visualViewport, document } = window
      if (visualViewport) {
        const { height } = visualViewport
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        if (vh - height > 100) {
          const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
          const scrollTop = scrollHeight - vh
          window.scrollTo(0, scrollTop)
        }
      }
    }

    window.addEventListener('resize', handleVisualViewportResize)
    return () => window.removeEventListener('resize', handleVisualViewportResize)
  }, [])

  if (!init) return <Loader />

  if (isUser && !isAuthenticated) {
    routeTo('/login')
    return null
  }

  return (
    <Styled.SLayout>
      <Header />
      {children}
    </Styled.SLayout>
  )
}
export default Layout
