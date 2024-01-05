import { RouterProvider } from 'react-router-dom'
import { routers } from './router/router.ts'
import { GlobalStyle } from './style/GlobalStyle'
import { useEffect } from 'react'

/*global Kakao*/
function App() {
  useEffect(() => {
    console.log(Kakao.isInitialized())
  }, [])
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </>
  )
}

export default App
