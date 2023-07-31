import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Avatar } from '../avatar/Avatar'
import * as S from './styles'

export const HeaderClient = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Header>
      <S.Container>
        <S.Logo to="/client">
          <img src={Logo} alt="Logo" />
        </S.Logo>
        <S.Hamburguer onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </S.Hamburguer>
        <S.Nav isOpen={isOpen}>
          <S.NavLink to="/">---</S.NavLink>
          <S.NavLink to="/">---</S.NavLink>
          <S.NavLink to="/">---</S.NavLink>
          <S.NavLink to="/">---</S.NavLink>
          <S.NavLink to="/">---</S.NavLink>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar alt="avatar" size={45} />
            <p>aaa</p>
          </div>
        </S.Nav>
      </S.Container>
    </S.Header>
  )
}
