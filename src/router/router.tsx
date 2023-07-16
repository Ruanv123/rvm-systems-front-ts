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
import { DashLayout } from '../layout/dashboard/Dashboard'
import { GetToken } from '../utils/useStorage'
import { Children, ReactNode } from 'react'

const DashboardLayout = () => {
  return (
    <DashLayout>
      <Outlet />
    </DashLayout>
  )
}

interface ProtectedType {
  children: ReactNode
}

const Protected: React.FC<ProtectedType> = ({ children }) => {
  const isAuthenticated = GetToken('token')
  return isAuthenticated ? children : <Navigate to="/login" replace />
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
    element: (
      <Protected>
        <DashboardLayout />
      </Protected>
    ),
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
