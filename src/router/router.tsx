import { ReactNode } from 'react'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom'

import { GetToken } from '../utils/useStorage'
import { DashLayout } from '../layout/dashboard/Dashboard'

import { Home } from '../pages/home/Home'
import { Error } from '../pages/error/Error'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { Login } from '../pages/login/Login'
import { Clientes } from '../pages/clientes/Clientes'
import { Register } from '../pages/register/Register'
import { SendResetEmail } from '../pages/sendResetPassEmail/SendResetEmail'
import { ResetPassword } from '../pages/resetPass/ResetPassword'
import { Produtos } from '../pages/produtos/Produtos'
import { SettingsPage } from '../pages/settings/Settings'
import { Financas } from '../pages/financas/Financas'
import { Funcionarios } from '../pages/funcionarios/Funcionarios'
import { ContasAPagar } from '../pages/contasAPagar/ContasAPagar'
import { ContasAReceber } from '../pages/contasAReceber/ContasAReceber'
import { SendResetPassConfirm } from '../pages/sendResetPassConfirm/SendResetPassConfirm'
import { ResetPassConfirm } from '../pages/resetPassConfirm/ResetPassConfirm'

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
    path: '/reset-email',
    element: <SendResetEmail />,
  },
  {
    path: '/user/reset-pass',
    element: <ResetPassword />,
  },
  {
    path: '/reset-email/confirm',
    element: <SendResetPassConfirm />,
  },
  {
    path: '/user/reset-pass/confirm',
    element: <ResetPassConfirm />,
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
      {
        path: '/dashboard/empresas',
        element: <Clientes />,
      },
      {
        path: '/dashboard/produtos',
        element: <Produtos />,
      },
      {
        path: '/dashboard/settings/',
        element: <SettingsPage />,
      },
      {
        path: '/dashboard/financas',
        element: <Financas />,
      },
      {
        path: '/dashboard/financas/contas-a-receber',
        element: <ContasAReceber />,
      },
      {
        path: '/dashboard/financas/contas-a-pagar',
        element: <ContasAPagar />,
      },
      {
        path: '/dashboard/funcionarios',
        element: <Funcionarios />,
      },
    ],
  },
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
