import { createBrowserRouter } from 'react-router-dom'
import { Router as RemixRouter } from '@remix-run/router/dist/router'
import { routerData } from './routerData'


export const routers: RemixRouter = createBrowserRouter(

    routerData.map((router) => {
        return {
          path: router.path,
          element: router.element
        }
    })
  )