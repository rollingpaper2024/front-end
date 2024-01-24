import  { useEffect } from 'react'
import { useAtom } from 'jotai'
import { userAtom } from './store/user.ts'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { app } from '@/database'
import { RouterProvider } from 'react-router-dom'
import { routers } from './router/router.ts'
import { GlobalStyle } from './style/GlobalStyle'
import '@toast-ui/editor/dist/toastui-editor.css';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useAtom(userAtom)
  const auth = getAuth(app)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: { uid: string }) => {
      if (firebaseUser) {
        setUser({ uid: firebaseUser.uid })
      } else {
        setUser({ uid: 'no-user' })
      }
    })
    

    return () => unsubscribe()
  }, [auth, setUser])

  return (
    <>
      <GlobalStyle/>
      <RouterProvider router={routers} /> 
    </>
  )
}

export default App