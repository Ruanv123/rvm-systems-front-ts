import { useState } from 'react'
import * as S from './styles'
import Logo from '../../assets/logo.png'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <S.Header>
        <S.Container>
          <S.Logo to="/">
            <img src={Logo} alt="logo" />
          </S.Logo>
          <S.Hamburguer onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </S.Hamburguer>
          <S.Nav isOpen={isOpen}>
            <S.NavLink to="/">Home</S.NavLink>
            <S.NavLink to="#sobre">Sobre</S.NavLink>
            <S.NavLink to="#produtos">Produtos</S.NavLink>
            <S.NavLink to="#contato">Contato</S.NavLink>
            <S.NavLink to="/login">
              <S.LoginBtn>Login</S.LoginBtn>
            </S.NavLink>
            <S.NavLink to="/register">
              <S.RegisterBtn>Register</S.RegisterBtn>
            </S.NavLink>
          </S.Nav>
        </S.Container>
      </S.Header>
    </>
  )
}
