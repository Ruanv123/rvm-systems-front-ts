import * as S from './styles'
import Logo from '../../assets/logo.png'

export const Footer = () => {
  return (
    <>
      <S.Footer>
        <S.Container>
          <S.Logo>
            <img src={Logo} alt="Logo" />
          </S.Logo>
          <S.Menu>
            <S.MenuItem>
              <S.MenuItemLink to="/">Produtos</S.MenuItemLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuItemLink to="/">Features</S.MenuItemLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuItemLink to="/">Preços</S.MenuItemLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuItemLink to="/">Contato</S.MenuItemLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuItemLink to="/">Carreira</S.MenuItemLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuItemLink to="/">Ajuda</S.MenuItemLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuItemLink to="/">Privacidade</S.MenuItemLink>
            </S.MenuItem>
          </S.Menu>
        </S.Container>
        <S.HR />
        <S.Container>
          <S.Text>© 2023 RVM SYSTEMS. All right reserved.</S.Text>
        </S.Container>
      </S.Footer>
    </>
  )
}
