import { useState } from 'react'
import * as S from './styles'

import {
  ArchiveBoxIcon,
  ArrowsRightLeftIcon,
  BuildingStorefrontIcon,
  ClockIcon,
  Cog6ToothIcon,
  HomeIcon,
  TruckIcon,
  UserGroupIcon,
  UsersIcon,
  WalletIcon,
} from '@heroicons/react/24/outline'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'

export const Sidebar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const disconnect = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    navigate('/intranet')
  }

  return (
    <>
      <S.Sidebar isopen={sidebarOpen}>
        <S.Content>
          <S.Button
            isopen={sidebarOpen}
            onClick={() => setSidebarOpen((open) => !open)}
          >
            {!sidebarOpen ? (
              <>
                <BsArrowLeftSquare size={26} />
              </>
            ) : (
              <BsArrowRightSquare size={26} />
            )}
          </S.Button>
          {/* <S.Logo>
            {!sidebarOpen ? (
              <img src={Logo} alt="a" />
            ) : (
              <img src={LogoNT} style={{ width: '30px' }} alt="a" />
            )}
          </S.Logo> */}
          <S.Divider />
          <S.LinkContainer
            to="/dashboard/"
            isActive={pathname === '/dashboard/'}
            isopen={sidebarOpen}
          >
            <HomeIcon title="Home" />
            {!sidebarOpen && <span>Home</span>}
          </S.LinkContainer>

          {/* <S.LinkContainer to="/dashboard/" isopen={sidebarOpen}>
            <MdOutlineAnalytics size={30} title="Relatórios" />
            {!sidebarOpen && <span>Relatórios</span>}
          </S.LinkContainer> */}

          <S.LinkContainer
            to="/dashboard/clientes"
            isopen={sidebarOpen}
            isActive={pathname === '/dashboard/clientes'}
          >
            <UsersIcon title="Clientes" />
            {!sidebarOpen && <span>Clientes</span>}
          </S.LinkContainer>

          <S.LinkContainer
            to="/dashboard/produtos"
            isActive={pathname === '/dashboard/produtos'}
            isopen={sidebarOpen}
          >
            <ArchiveBoxIcon title="Products" />
            {!sidebarOpen && <span>Products</span>}
          </S.LinkContainer>

          <S.LinkContainer
            to="/dashboard/fornecedor"
            isActive={pathname === '/dashboard/fornecedor'}
            isopen={sidebarOpen}
          >
            <TruckIcon title="Fornecedor" />
            {!sidebarOpen && <span>Fornecedor</span>}
          </S.LinkContainer>

          <S.LinkContainer
            to="/dashboard/lojas"
            isActive={pathname === '/dashboard/lojas'}
            isopen={sidebarOpen}
          >
            <BuildingStorefrontIcon title="Lojas" />
            {!sidebarOpen && <span>Lojas</span>}
          </S.LinkContainer>

          <S.LinkContainer
            to="/dashboard/financas"
            isActive={
              pathname === '/dashboard/financas' ||
              pathname === '/dashboard/financas/contas-a-pagar' ||
              pathname === '/dashboard/financas/contas-a-receber' ||
              pathname === '/dashboard/financas/controle-de-caixa'
            }
            isopen={sidebarOpen}
          >
            <WalletIcon title="Finanças" />
            {!sidebarOpen && <span>Finanças</span>}
          </S.LinkContainer>

          <S.LinkContainer
            to="/dashboard/funcionarios"
            isActive={pathname === '/dashboard/funcionarios'}
            isopen={sidebarOpen}
          >
            <UserGroupIcon title="Funcionários" />
            {!sidebarOpen && <span>Funcionários</span>}
          </S.LinkContainer>
          <S.LinkContainer
            to="/dashboard/ponto"
            isActive={pathname === '/dashboard/ponto'}
            isopen={sidebarOpen}
          >
            <ClockIcon title="Ponto Digital" />
            {!sidebarOpen && <span>Ponto Digital</span>}
          </S.LinkContainer>

          <S.Divider />
        </S.Content>
        <S.Footer>
          <S.LinkContainer
            to={`/dashboard/settings/`}
            isActive={pathname === '/dashboard/settings/'}
            isopen={sidebarOpen}
          >
            <Cog6ToothIcon title="Settings" />
            {!sidebarOpen && <span>Settings</span>}
          </S.LinkContainer>
          <S.LinkContainerBtn onClick={disconnect} isopen={sidebarOpen}>
            {/* <IoLogOutOutline size={30} title="Logout" /> */}
            <ArrowsRightLeftIcon title="Logout" />
            {!sidebarOpen && <span>Logout</span>}
          </S.LinkContainerBtn>
        </S.Footer>
      </S.Sidebar>
    </>
  )
}
