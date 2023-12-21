import { UserAccessibleRouterElement } from "@/types";
import LandingPage from "@/pages/Landing"
import Main from "@/pages/Main"
import MessageList from "@/pages/MessageList";
import SelectPocket from "@/pages/SelectPocket";
import SharePage from "@/pages/SharePage";
import WriteMessage from "@/pages/WriteMessage";
import LoginPage from "@/pages/LoginPage";
import Layout from "@/components/template/layout/Layout";


type RouterElement = UserAccessibleRouterElement

export const routerData: RouterElement[] = [
  {
    id: 0,
    path: '/',
    element: <Layout isUser={false}><LandingPage/></Layout>,
    withAuth: false
  },
  {
    id: 1,
    path: '/main',
    element: <Layout isUser={false}><Main/></Layout>,
    withAuth: false
  },
  {
    id: 2,
    path: '/messagelist',
    element: <Layout isUser={false}><MessageList/></Layout>,
    withAuth: false
  },
  {
    id: 3,
    path: '/selectpocket',
    element: <Layout isUser={true}><SelectPocket/></Layout>,
    withAuth: true
  },
  {
    id: 4,
    path: '/sharepage',
    element: <Layout isUser={true}><SharePage/></Layout>,
    withAuth: true
  },
  {
    id: 5,
    path: '/writemessage',
    element: <Layout isUser={true}><WriteMessage/></Layout>,
    withAuth: true
  },
  {
    id: 6,
    path: '/login',
    element: <Layout isUser={false}><LoginPage/></Layout>,
    withAuth: false
  },
];