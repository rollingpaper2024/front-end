// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterProvider } from 'react-router-dom'
import { routers } from './router/router'
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
