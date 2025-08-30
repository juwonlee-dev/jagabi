import './App.css'
import { FC, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes, { ExtendedRoute } from './router/routes'

const createRoutesWithLayout = (routes: ExtendedRoute[]): ExtendedRoute[] => {
  return routes.map((route) => {
    const { layout: Layout, children, ...rest } = route

    const element = <>{route.element}</>
    return {
      ...rest,
      element: Layout ? <Layout>{element}</Layout> : element,
      children: children ? createRoutesWithLayout(children) : undefined,
    }
  })
}

const App: FC = () => {
  const element = useRoutes(createRoutesWithLayout(routes))

  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
}

export default App
