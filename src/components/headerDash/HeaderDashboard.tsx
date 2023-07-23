import * as S from './styles'
import { Avatar } from '../avatar/Avatar'
import Logo from '../../assets/logo.png'
import { useUser } from '../../layout/dashboard/Dashboard'
import { GoBell } from 'react-icons/go'

export const HeaderDashboard = () => {
  const { userData } = useUser()
  const name = userData?.name
  const avatarUrl = userData?.avatar

  return (
    <S.Wrapper>
      <S.LContainer>
        <S.LinkA to="/dashboard/">
          <S.Logo src={Logo} alt="rvm systems logo" />
        </S.LinkA>
      </S.LContainer>
      <S.RContainer>
        <GoBell size={22} />

        <Avatar size={40} alt="avatar" src={avatarUrl} />
        <S.AvatarLabel>{name}</S.AvatarLabel>
      </S.RContainer>
    </S.Wrapper>
  )
}
