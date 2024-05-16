import { createBrowserRouter,Navigate } from 'react-router-dom'
import Main from '@/render/main'
import Home from '@/render/pages/home';
import {lazy} from 'react';
const Collect = lazy(() => import('@/render/pages/collection'))
const Online = lazy(() => import('@/render/pages/online'))
import ListIcon from '@/render/router/icon/list-icon';
import CollectionIcon from '@/render/router/icon/collection-icon';
import OnlineIcon from '@/render/router/icon/online-icon';
export const urlConfig = [
  {
    path: '/home',
    title:'图片列表',
    element: <Home/>,
    icon:<ListIcon/>
  },
  {
    path: '/collect',
    title:'我的收藏',
    element: <Collect/>,
    icon:<CollectionIcon/>
  },
  {
    path: '/online',
    title:'远程获取',
    element: <Online/>,
    icon:<OnlineIcon/>
  },
]
const routes = [
  {
    path:'/',
    element: <Navigate to="/home"/>,
  },
  {
    path:'/',
    element: <Main />,
    children: urlConfig,
  }
]
export default createBrowserRouter(routes)