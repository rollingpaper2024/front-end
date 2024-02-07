import { UserAccessibleRouterElement } from '@/types'
import LandingPage from '@/pages/Landing'
import Main from '@/pages/Main'
import MessageList from '@/pages/MessageList'
import SelectPocket from '@/pages/SelectPocket'
import SharePage from '@/pages/SharePage'
import WriteMessage from '@/pages/WriteMessage'
import LoginPage from '@/pages/LoginPage'
import Layout from '@/components/template/layout/Layout'
import Components from '@/pages/Components'
import CompletePocketPage from '@/pages/CompletePocketPage'
import CompleteMessage from '@/pages/CompleteMessage'
import ViewMessage from '@/pages/ViewMessage'

type RouterElement = UserAccessibleRouterElement

export const routerData: RouterElement[] = [
  {
    id: 0,
    path: '/',
    element: (
      <Layout isUser={false}>
        <LandingPage />
      </Layout>
    ),
    withAuth: false,
  },
  {
    id: 1,
    path: '/main/:id',
    element: (
      <Layout isUser={true}>
        <Main />
      </Layout>
    ),
    withAuth: false,
  },
  {
    id: 2,
    path: '/messagelist/:id',
    element: (
      <Layout isUser={false}>
        <MessageList />
      </Layout>
    ),
    withAuth: false,
  },
  {
    id: 3,
    path: '/selectpocket',
    element: (
      <Layout isUser={true}>
        <SelectPocket />
      </Layout>
    ),
    withAuth: true,
  },
  {
    id: 5,
    path: '/writemessage/:id',
    element: (
      <Layout isUser={true}>
        <WriteMessage />
      </Layout>
    ),
    withAuth: true,
  },
  {
    id: 6,
    path: '/login',
    element: (
      <Layout isUser={false}>
        <LoginPage />
      </Layout>
    ),
    withAuth: false,
  },
  {
    id: 7,
    path: '/components',
    element: (
      <Layout isUser={false}>
        <Components />
      </Layout>
    ),
    withAuth: false,
  },
  {
    id: 8,
    path: '/completepocket',
    element: (
      <Layout isUser={true}>
        <CompletePocketPage />
      </Layout>
    ),
    withAuth: false,
  },
  {
    id: 9,
    path: '/completemessage',
    element: (
      <Layout isUser={true}>
        <CompleteMessage />
      </Layout>
    ),
    withAuth: false,
  },
  {
    id: 10,
    path: '/messagelist/:id/:messageId',
    element: (
      <Layout isUser={true}>
        <ViewMessage />
      </Layout>
    ),
    withAuth: false,
  },
]
