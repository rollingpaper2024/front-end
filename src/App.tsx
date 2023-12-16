
import { RouterProvider } from 'react-router-dom'
import { routers } from './router/router.ts'
import { GlobalStyle } from './style/GlobalStyle'


function App() {


  return (
    <>
    <GlobalStyle/>
     <RouterProvider router={routers} /> 
    </>
  )
}

export default App