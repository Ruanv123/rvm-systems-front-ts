import * as S from './styles'
import { useState } from 'react'

/* import Logo from '../../assets/logo.png'
import LogoNT from '../../assets/logoNT.svg' */

import { GoHome } from 'react-icons/go'
import { BsArrowRightSquare, BsArrowLeftSquare, BsBox } from 'react-icons/bs'
import { MdOutlineAnalytics } from 'react-icons/md'
import { PiUsers, PiGear, PiUserFocusBold } from 'react-icons/pi'
import { IoLogOutOutline } from 'react-icons/io5'
import { TbMoneybag } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

interface SidebarProps {
  id: number
}

export const Sidebar = (id: SidebarProps) => {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const disconnect = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    navigate('/login')
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
          <S.LinkContainer to="/dashboard/" isopen={sidebarOpen}>
            <GoHome size={30} />
            {!sidebarOpen && <span>Home</span>}
          </S.LinkContainer>

          <S.LinkContainer to="/dashboard/" isopen={sidebarOpen}>
            <MdOutlineAnalytics size={30} />
            {!sidebarOpen && <span>Relatórios</span>}
          </S.LinkContainer>

          <S.LinkContainer to="/dashboard/clientes" isopen={sidebarOpen}>
            <PiUsers size={30} />
            {!sidebarOpen && <span>Clientes</span>}
          </S.LinkContainer>

          <S.LinkContainer to="/dashboard/produtos" isopen={sidebarOpen}>
            <BsBox size={30} />
            {!sidebarOpen && <span>Products</span>}
          </S.LinkContainer>

          <S.LinkContainer to="/dashboard/financas" isopen={sidebarOpen}>
            <TbMoneybag size={30} />
            {!sidebarOpen && <span>Finanças</span>}
          </S.LinkContainer>

          <S.LinkContainer to="/dashboard/funcionarios" isopen={sidebarOpen}>
            <PiUserFocusBold size={30} />
            {!sidebarOpen && <span>Funcionários</span>}
          </S.LinkContainer>

          <S.Divider />
        </S.Content>
        <S.Footer>
          <S.LinkContainer
            to={`/dashboard/settings/${id}`}
            isopen={sidebarOpen}
          >
            <PiGear size={30} />
            {!sidebarOpen && <span>Settings</span>}
          </S.LinkContainer>
          <S.LinkContainerBtn onClick={disconnect} isopen={sidebarOpen}>
            <IoLogOutOutline size={30} />
            {!sidebarOpen && <span>Analytics</span>}
          </S.LinkContainerBtn>
        </S.Footer>
      </S.Sidebar>
    </>
  )
}
