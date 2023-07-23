import * as S from './styles'

import { Avatar } from '../../components/avatar/Avatar'
import { useUser } from '../../layout/dashboard/Dashboard'
import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'
import axios from 'axios'
import { API_BASE_URL } from '../../constants/Constants'
import { ToastContainer, toast } from 'react-toastify'
import { colors } from '../../styles/tokens/colors'
import { useForm } from 'react-hook-form'
import { GetToken } from '../../utils/useStorage'

interface FormData {
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
  } = useForm<FormData>()

  const name = userData?.name
  const avatarUrl = userData?.avatar
  const userId = userData?.id
  const lastUpdated = userData?.updatedAt

  const handleUpdateUser = async (data: FormData) => {
    const filledData: FormData = Object.entries(data).reduce(
      (acc, [key, value]) => {
        if (value !== undefined && value.trim() !== '') {
          acc[key as keyof FormData] = value
        }
        return acc
      },
      {} as FormData,
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
            <S.TextCard>{lastUpdated}</S.TextCard>
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
        <S.EditForm>
          <S.Title>Editar Usuario</S.Title>
          <S.Text>Alterar as informações da sua conta</S.Text>
          <form onSubmit={handleSubmit(handleUpdateUser)}>
            <S.Div>
              <div>
                <label htmlFor="">
                  Nome
                  <Input placeholder="nome" {...register('name')} type="text" />
                </label>
                <label htmlFor="">
                  Email
                  <Input
                    placeholder="Email"
                    type="email"
                    {...register('email')}
                  />
                </label>
                <label htmlFor="">
                  Password
                  <Input
                    placeholder="Password"
                    type="password"
                    {...register('password')}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="">
                  Avatar Url
                  <Input
                    placeholder="Avatar Url"
                    type="text"
                    {...register('avatar')}
                  />
                </label>
                <label htmlFor="">
                  descrição
                  <Input placeholder="descrição" {...register('desc')} />
                </label>
                <label htmlFor="">
                  Telefone
                  <Input placeholder="Telefone" {...register('telefone')} />
                </label>
              </div>
            </S.Div>
            <S.Spacing />
            <Button
              text="Editar"
              type="submit"
              size={378}
              color={`${colors.blue[550]}`}
            />
          </form>

          <S.ButtonWrapper></S.ButtonWrapper>
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
