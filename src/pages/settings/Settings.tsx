import * as S from './styles'

import { Avatar } from '../../components/avatar/Avatar'
import { useUser } from '../../layout/dashboard/Dashboard'
import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'

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
          <S.TextTitle>{name}</S.TextTitle>
          <S.TextN>Admin</S.TextN>
          <S.Divider />
          <div>
            <S.Text>{id}</S.Text>
            <S.Text>{userData?.email}</S.Text>
            <S.Text>{userData?.telefone}</S.Text>
            <S.Text>{userData?.desc}</S.Text>
          </div>
          <S.Divider />
          <Button text="Exportar Card" type="button" size={238} />
        </S.Card>
        <S.EditForm>
          <S.Title>Editar Usuario</S.Title>
          <S.Div>
            <div>
              <label htmlFor="">
                Nome
                <Input placeholder="nome" />
              </label>
              <label htmlFor="">
                Email
                <Input placeholder="Email" />
              </label>
              <label htmlFor="">
                Password
                <Input placeholder="Password" />
              </label>
            </div>
            <div>
              <label htmlFor="">
                Avatar Url
                <Input placeholder="Avatar Url" />
              </label>
              <label htmlFor="">
                descrição
                <Input placeholder="descrição" />
              </label>
              <label htmlFor="">
                Telefone
                <Input placeholder="Telefone" />
              </label>
            </div>
          </S.Div>
          <S.Divider />
          <S.ButtonWrapper>
            <Button text="Editar" type="button" size={378} />
            <Button text="Deletar Conta" type="button" size={378} />
          </S.ButtonWrapper>
        </S.EditForm>
      </S.Wrapper>
    </>
  )
}
