import * as S from './styles'

import { Avatar } from '../../components/avatar/Avatar'
import { useUser } from '../../layout/dashboard/Dashboard'
import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'
import axios from 'axios'
import { API_BASE_URL } from '../../constants/Constants'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

/* interface FormData {
  name?: string
} */

export const SettingsPage = () => {
  const { userData } = useUser()
  const navigate = useNavigate()

  const name = userData?.name
  const avatarUrl = userData?.avatar
  const userId = userData?.id

  /* const handleUpdateUser = async (data: FormData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}`, {
        data,
      })
      toast.success('sucesso ao editar o usuario!')
      window.location.reload()
      console.log(response)
    } catch (error) {
      toast.error(`ocorreu um error!` + error)
    }
  } */

  const handleDeleteUser = async (id: number) => {
    try {
      await axios.delete(`${API_BASE_URL}/user/${id}`)
      window.location.reload()
      toast.success('Usuario deletado com sucesso!')
      await navigate('/register')
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
            <S.Text>{userId}</S.Text>
            <S.Text>{userData?.email}</S.Text>
            <S.Text>{userData?.telefone}</S.Text>
            <S.Text>{userData?.desc}</S.Text>
          </div>
          <S.Divider />
          <Button
            text="Exportar Card"
            type="button"
            size={238}
            color="#3B82F6"
          />
        </S.Card>
        <S.EditForm>
          <S.Title>Editar Usuario</S.Title>
          <S.Div>
            <form action="">
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
            </form>
          </S.Div>
          <S.Divider />
          <S.ButtonWrapper>
            <Button text="Editar" type="button" size={378} color="#A855F7" />
            <Button
              text="Deletar Conta"
              type="button"
              size={378}
              color="#C53434"
              onClick={() => handleDeleteUser(userId)}
            />
          </S.ButtonWrapper>
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
