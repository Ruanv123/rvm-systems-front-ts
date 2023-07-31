import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'
import { shadow } from '../../styles/tokens/shadow'
import { spacing } from '../../styles/tokens/spacing'
import { typography } from '../../styles/tokens/typography'

interface INavProps {
  isOpen: boolean
}

export const Header = styled.header`
  width: 100%;
  box-shadow: ${shadow.xl};
  padding: 5px;
  overflow: hidden;
  height: 73px;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`
export const Logo = styled(Link)`
  padding: ${spacing.md} 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;

  img {
    user-select: none;
    width: 180px;
  }

  @media (max-width: 768px) {
    img {
      margin-left: ${spacing.sm};
    }
  }
`

export const Hamburguer = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: ${colors.blue[550]};
    margin-bottom: 4px;
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    display: flex;
    margin: 0 5px;
  }
`

export const Nav = styled.nav<INavProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    background-color: ${colors.gray[50]};
    z-index: 999;
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`

export const NavLink = styled(Link)`
  padding: 1rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: ${typography.text};
  display: flex;
  font-weight: 500;
  color: ${colors.gray[600]};

  &:hover {
    color: ${colors.blue[550]};
  }

  &:active {
    color: ${colors.gray[400]};
  }
`

/* export const LoginBtn = styled.button`
  padding: 10px 24px;
  font-size: ${typography.button};
  font-weight: 600;
  color: ${colors.gray[600]};
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
  border: 2px solid ${colors.blue[550]};
  line-height: 16px;
  background-color: transparent;

  &:hover {
    background-color: ${colors.blue[550]};
    color: ${colors.blue[50]};
  }
  &:active {
    color: ${colors.gray[400]};
  }
`

export const RegisterBtn = styled.button`
  padding: 12px 24px;
  background-color: ${colors.blue[550]};
  border-radius: 5px;
  color: ${colors.white};
  transition: all 0.5s ease;
  font-size: ${typography.button};
  font-weight: 600;
  line-height: 16px;

  &:hover {
    background-color: ${colors.blue[550]};
    color: ${colors.white};
  }
` */
