import * as S from './styles'

import { Avatar } from '../../components/avatar/Avatar'
import { useUser } from '../../layout/dashboard/Dashboard'
import { Button } from '../../components/button/Button'

export const SettingsPage = () => {
  const { userData } = useUser()

  const name = userData?.name
  const avatarUrl = userData?.avatar
  const id = userData?.id
  return (
    <>
      <S.Title>Configurações</S.Title>
      <S.Wrapper>
        <S.Card>
          <Avatar size={90} alt="avatar" src={avatarUrl} />
          <h2>{name}</h2>
          <h4>Admin</h4>
          <S.Divider />
          <h3>{id}</h3>
          <p>Johndoe@gmail.com</p>
          <S.Divider />
          <Button text="Exportar Card" type="button" />
        </S.Card>
      </S.Wrapper>
    </>
  )
}
