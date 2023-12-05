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
    },
    {
      id: 1,
      path: '/main',
      element:<Main/>,
    },
    {
      id: 2,
      path: '/messagelist',
      element:<MessageList/>,
    },
    {
      id: 3,
      path: '/selectpocket',
      element:<SelectPocket/>,
    },
    {
      id: 4,
      path: '/sendlandingpage',
      element:<SendLandingPage/>,
    },
    {
      id: 5,
      path: '/sharepage',
      element:<SharePage/>,
    },
    {
      id: 6,
      path: '/writemessage',
      element:<WriteMessage/>,
    },
    {
      id: 6,
      path: '/login',
      element:<LoginPage/>,
    },
  ]
  