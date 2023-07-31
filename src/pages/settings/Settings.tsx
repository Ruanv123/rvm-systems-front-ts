import * as S from './styles'

import axios from 'axios'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { Avatar } from '../../components/avatar/Avatar'
import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'
import { API_BASE_URL } from '../../constants/Constants'
import { useUser } from '../../layout/dashboard/Dashboard'
import { colors } from '../../styles/tokens/colors'
import { formatarData } from '../../utils/useFormatDate'
import { useTelefoneMask } from '../../utils/useMasks'
import { GetToken } from '../../utils/useStorage'

interface IFormData {
  name?: string
  email?: string
  password?: string
  telefone?: string
  avatar?: string
  desc?: string
}

export default function SettingsPage() {
  const { userData } = useUser()
  const {
    register,
    handleSubmit,
    /* formState: { errors }, */
  } = useForm<IFormData>()

  const name = userData?.name
  const avatarUrl = userData?.avatar
  const userId = userData?.id
  const lastUpdated = userData?.updatedAt

  const handleUpdateUser = async (data: IFormData) => {
    const filledData: IFormData = Object.entries(data).reduce(
      (acc, [key, value]) => {
        if (value !== undefined && value.trim() !== '') {
          acc[key as keyof IFormData] = value
        }
        return acc
      },
      {} as IFormData,
    )

    try {
      await axios.put(`${API_BASE_URL}/user/${userId}`, filledData)

      toast.success('usuario editado com sucesso!')
      window.location.reload()
    } catch (error) {
      toast.error('ocorreu um error: ' + error)
    }
  }

  const token: string | null = GetToken('token')

  const handleDeleteUser = async (id: number) => {
    try {
      await axios.delete(`${API_BASE_URL}/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      toast.success('Usuario deletado com sucesso!')
      window.location.reload()
    } catch (error) {
      toast.error('ocorreu um error!' + error)
    }
  }

  console.log(typeof lastUpdated)

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
            <S.TextCard>ID: {userId}</S.TextCard>
            <S.TextCard>{userData?.email}</S.TextCard>
            <S.TextCard>Tel: {userData?.telefone}</S.TextCard>
            <S.TextCard>Desc: {userData?.desc}</S.TextCard>

            <S.TextCard>
              {lastUpdated !== undefined ? formatarData(lastUpdated) : []}
            </S.TextCard>
          </div>
          <S.Divider />
          <Button
            text="Deletar Conta"
            type="button"
            size={378}
            color="#C53434"
            onClick={() => handleDeleteUser(userId)}
          />
        </S.Card>
        <S.EditForm onSubmit={handleSubmit(handleUpdateUser)}>
          <S.Title>Editar Usuario</S.Title>
          <S.Text>Alterar as informações da sua conta</S.Text>
          {/* <form > */}
          <S.Div>
            <div>
              <div style={{ width: '320px' }}>
                <Input
                  label="Nome"
                  {...register('name')}
                  name="name"
                  placeholder="nome"
                  type="text"
                />
              </div>

              <div style={{ width: '320px' }}>
                <Input
                  label="Email"
                  {...register('email')}
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </div>

              <div style={{ width: '320px' }}>
                <Input
                  label="Password"
                  {...register('password')}
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </div>
            </div>
            <div>
              <div style={{ width: '320px' }}>
                <Input
                  label="Avatar Url"
                  {...register('avatar')}
                  name="avatar"
                  placeholder="Avatar Url"
                  type="text"
                />
              </div>
              <div style={{ width: '320px' }}>
                <Input
                  label="Descrição"
                  placeholder="descrição"
                  {...register('desc')}
                  name="desc"
                  type="text"
                />
              </div>
              <div style={{ width: '320px' }}>
                <Input
                  label="Telefone"
                  placeholder="(00) 0000-0000"
                  {...register('telefone')}
                  name="telefone"
                  type="text"
                  maxLength={11}
                  onChange={(event) => {
                    const valor = event.target.value
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const telefoneFormatado = useTelefoneMask(valor)
                    event.target.value = telefoneFormatado
                    return event
                  }}
                />
              </div>
            </div>
          </S.Div>
          <S.Spacing />
          <Button
            text="Editar"
            type="submit"
            size={378}
            color={`${colors.blue[550]}`}
          />
          {/* </form> */}
        </S.EditForm>
      </S.Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
