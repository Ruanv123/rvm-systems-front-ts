import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Error } from '../pages/error/Error'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { Login } from '../pages/login/Login'
import { Clientes } from '../pages/clientes/Clientes'
import { Register } from '../pages/register/Register'

const DashboardLayout = () => {
  return <Outlet />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/dashboard/',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/clientes',
        element: <Clientes />,
      },
    ],
  },
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
