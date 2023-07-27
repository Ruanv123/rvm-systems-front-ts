import { ReactNode } from 'react'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom'

import { GetToken } from '../utils/useStorage'
import { DashLayout } from '../layout/dashboard/Dashboard'
// paginas
import Home from '../pages/home/Home'
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
import SendResetEmail from '../pages/sendResetPassEmail/SendResetEmail'
import ResetPassword from '../pages/resetPass/ResetPassword'
import SendResetPassConfirm from '../pages/sendResetPassConfirm/SendResetPassConfirm'
import ResetPassConfirm from '../pages/resetPassConfirm/ResetPassConfirm'
import Error from '../pages/error/Error'
import Dashboard from '../pages/dashboard/Dashboard'
import Clientes from '../pages/clientes/Clientes'
import PontoDigital from '../pages/pontoDigital/PontoDigital'
import Produtos from '../pages/produtos/Produtos'
import SettingsPage from '../pages/settings/Settings'
import Financas from '../pages/financas/Financas'
import ContasAReceber from '../pages/contasAReceber/ContasAReceber'
import ContasAPagar from '../pages/contasAPagar/ContasAPagar'
import Funcionarios from '../pages/funcionarios/Funcionarios'
import Fornecedor from '../pages/fornecedor/Fornecedor'
import About from '../pages/about/About'
import PrivacidadePage from '../pages/privacidade/PrivacidadePage'
import Career from '../pages/career/Career'
import ControleDeCaixa from '../pages/controleDeCaixa/ControleDeCaixa'
import SignupClient from '../pages/auth/signUpClient/SignupClient'
import SignClient from '../pages/auth/signInIntranet/SignClient'

const DashboardLayout = () => {
  return (
    <DashLayout>
      <Outlet />
    </DashLayout>
  )
}

interface IProtectedType {
  children: ReactNode
}

const Protected: React.FC<IProtectedType> = ({ children }) => {
  const isAuthenticated = GetToken('token')
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

const PrivateClient: React.FC<IProtectedType> = ({ children }) => {
  const isAuthenticated = true
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/privacy',
    element: <PrivacidadePage />,
  },
  {
    path: '/career',
    element: <Career />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/signup/cliente',
    element: <SignupClient />,
  },
  {
    path: '/intranet',
    element: <Login />,
  },
  {
    path: '/login',
    element: <SignClient />,
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
        path: '/dashboard/ponto',
        element: <PontoDigital />,
      },
      {
        path: '/dashboard/empresas',
        element: <Clientes />,
      },
      {
        path: '/dashboard/fornecedor',
        element: <Fornecedor />,
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
        path: '/dashboard/financas/controle-de-caixa',
        element: <ControleDeCaixa />,
      },
      {
        path: '/dashboard/funcionarios',
        element: <Funcionarios />,
      },
    ],
  },
  {
    path: '/cliente',
    element: (
      <PrivateClient>
        <Outlet />
      </PrivateClient>
    ),
  },
])

export default function Routes() {
  return <RouterProvider router={router} />
}
