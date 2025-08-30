import { FC, lazy, ReactNode } from 'react'
import { NonIndexRouteObject } from 'react-router-dom'

export interface ExtendedRoute extends Omit<NonIndexRouteObject, 'children'> {
  name?: string
  layout?: FC<{ children: ReactNode }>
  children?: ExtendedRoute[]
}

/** Layouts */
const DashboardLayout: FC<{ children: ReactNode }> = lazy(() => import('@/layouts/DashboardLayout'))

/** Error Handle */
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

/** Pages */
const HomePage = lazy(() => import('@/pages/home/HomePage'))

// Routes 배열 (중첩 라우팅 포함)
const routes: ExtendedRoute[] = [
  {
    name: 'Index',
    path: '/',
    element: <HomePage />,
    layout: DashboardLayout,
  },
  {
    name: 'NotFound',
    path: '*',
    element: <NotFoundPage />,
    layout: DashboardLayout,
  },
]

export default routes
