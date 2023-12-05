import { UserAccessibleRouterElement } from "@/types";
import LandingPage from "@/pages/Landing"
import Main from "@/pages/Main"
import MessageList from "@/pages/MessageList";
import SelectPocket from "@/pages/SelectPocket";
import SendLandingPage from "@/pages/SendLanding";
import SharePage from "@/pages/SharePage";
import WriteMessage from "@/pages/WriteMessage";
import LoginPage from "@/pages/LoginPage";

type RouterElement = UserAccessibleRouterElement

export const routerData: RouterElement[] = [
    {
      id: 0,
      path: '/',
      element: <LandingPage/>,
      withAuth:false
    },
    {
      id: 1,
      path: '/main',
      element:<Main/>,
      withAuth:false
    },
    {
      id: 2,
      path: '/messagelist',
      element:<MessageList/>,
      withAuth:false
    },
    {
      id: 3,
      path: '/selectpocket',
      element:<SelectPocket/>,
      withAuth:true
    },
    {
      id: 4,
      path: '/sendlandingpage',
      element:<SendLandingPage/>,
      withAuth:true
    },
    {
      id: 5,
      path: '/sharepage',
      element:<SharePage/>,
      withAuth:true
    },
    {
      id: 6,
      path: '/writemessage',
      element:<WriteMessage/>,
      withAuth:true
    },
    {
      id: 6,
      path: '/login',
      element:<LoginPage/>,
      withAuth:false
    },
  ]
  