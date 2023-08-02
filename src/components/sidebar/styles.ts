import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'
import { typography } from '../../styles/tokens/typography'

interface ISidebarProps {
  isopen: boolean
  isActive: boolean
}

interface ISidebarOpem {
  isopen: boolean
}

export const Sidebar = styled.div<ISidebarOpem>`
  background-color: ${colors.white};
  height: 100vh;
  box-sizing: border-box;
  padding: ${({ isopen }) => (!isopen ? '28px 36px' : '28px 11px')};
  border-right: 2px solid ${colors.gray[180]};
  display: flex;
  flex-direction: column;
  align-items: /* ${({ isopen }) =>
    isopen ? 'center' : 'flex-start'}; */ center;
  justify-content: space-between;
  text-align: center;
  width: ${({ isopen }) => (isopen ? 'fit-content' : '250px')};
  overflow: hidden;
  z-index: 999;
`

export const Button = styled.button<ISidebarOpem>`
  background-color: transparent;
  border: none;
  padding: 10px 0px;
  border-radius: 8px;
  color: ${colors.gray[800]};
`

export const Logo = styled.div`
  img {
    width: 150px;
  }
`

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.gray[180]};
  margin: 30px 0px;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const LinkContainer = styled(Link)<ISidebarProps>`
  text-align: center;
  overflow: hidden;
  color: ${({ isActive }) =>
    !isActive ? `${colors.gray[800]}` : `${colors.blue[600]};`};
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  padding: ${({ isopen }) => (isopen ? '5px 5px' : '5px 30px')};
  font-size: ${typography.text};
  width: 100%;
  border-radius: 8px;
  margin: 5px 0px;

  background-color: ${({ isActive }) =>
    !isActive ? `transparent` : `${colors.blue[100]}`};

  svg {
    width: 30px;
    height: auto;
  }

  &:active {
    background-color: ${colors.blue[100]};
    color: ${colors.blue[600]};
  }

  &:hover {
    background-color: ${colors.blue[100]};
    color: ${colors.blue[600]};
  }
`

export const LinkContainerBtn = styled.button<ISidebarOpem>`
  text-align: center;
  overflow: hidden;
  color: ${colors.gray[800]};
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  padding: ${({ isopen }) => (isopen ? '5px 5px' : '5px 30px')};
  font-size: ${typography.text};
  width: 100%;
  border-radius: 8px;
  margin: 5px 0px;
  background-color: transparent;

  &:hover {
    background-color: ${colors.blue[100]};
    color: ${colors.blue[600]};
  }
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
