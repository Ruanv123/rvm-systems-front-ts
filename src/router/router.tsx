import { ReactNode } from 'react'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom'

import { ClientLayout } from '../layout/Client/ClientLayout'
import { DashLayout } from '../layout/dashboard/Dashboard'
import { GetToken } from '../utils/useStorage'
// paginas
import About from '../pages/about/About'
import SignClient from '../pages/auth/signInIntranet/SignClient'
import SignupClient from '../pages/auth/signUpClient/SignupClient'
import Career from '../pages/career/Career'
import Catalog from '../pages/catalog/Catalog'
import Clientes from '../pages/clientes/Clientes'
import ContasAPagar from '../pages/contasAPagar/ContasAPagar'
import ContasAReceber from '../pages/contasAReceber/ContasAReceber'
import ControleDeCaixa from '../pages/controleDeCaixa/ControleDeCaixa'
import Dashboard from '../pages/dashboard/Dashboard'
import Error from '../pages/error/Error'
import Financas from '../pages/financas/Financas'
import Fornecedor from '../pages/fornecedor/Fornecedor'
import Funcionarios from '../pages/funcionarios/Funcionarios'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Lojas from '../pages/lojas/Lojas'
import PontoDigital from '../pages/pontoDigital/PontoDigital'
import PrivacidadePage from '../pages/privacidade/PrivacidadePage'
import Produtos from '../pages/produtos/Produtos'
import Register from '../pages/register/Register'
import ResetPassword from '../pages/resetPass/ResetPassword'
import ResetPassConfirm from '../pages/resetPassConfirm/ResetPassConfirm'
import SendResetPassConfirm from '../pages/sendResetPassConfirm/SendResetPassConfirm'
import SendResetEmail from '../pages/sendResetPassEmail/SendResetEmail'
import SettingsPage from '../pages/settings/Settings'

const DashboardLayout = () => {
  return (
    <DashLayout>
      <Outlet />
    </DashLayout>
  )
}

const ClienteLayout = () => {
  return (
    <ClientLayout>
      <Outlet />
    </ClientLayout>
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
        path: '/dashboard/lojas',
        element: <Lojas />,
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
    path: '/client',
    element: (
      <PrivateClient>
        <ClienteLayout />
      </PrivateClient>
    ),
    children: [
      {
        path: '/client/',
      },
      {
        path: '/client/catalog',
        element: <Catalog />,
      },
    ],
  },
])

export default function Routes() {
  return <RouterProvider router={router} />
}
