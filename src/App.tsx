// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routers } from './router/router'

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
