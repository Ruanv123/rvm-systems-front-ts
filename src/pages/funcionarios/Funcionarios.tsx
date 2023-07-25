import { useEffect, useState } from 'react'
import * as S from './styles'
import { GetToken } from '../../utils/useStorage'
import axios from 'axios'
import { API_BASE_URL } from '../../constants/Constants'
import { ToastContainer, toast } from 'react-toastify'
import { BsTrash } from 'react-icons/bs'

interface IUsers {
  id: number
  name: string
  email: string
  password: string
  avatar: string
  desc: string
  createdAt: string
  updatedAt: string
  telefone: string
  resetCode: string
}

export default function Funcionarios() {
  const [users, setUsers] = useState<IUsers[]>([])
  const [loading, setLoading] = useState(false)

  const token: string | null = GetToken('token')

  const handleFetchUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = response.data
      setUsers(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    handleFetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  const handleDeleteUser = async (id: number) => {
    try {
      await axios.delete(`${API_BASE_URL}/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setLoading(true)
      /* window.location.reload() */
      toast.success(`Funcionario deletado com sucesso!`)
    } catch (error) {
      toast.error('ocorreu um erro ao deletar usuario' + error)
    }
  }

  if (users.length === 0) {
    return <p>Nenhum usuario encontrado!</p>
  }

  return (
    <>
      <S.Container>
        <S.Titulo>Funcionarios</S.Titulo>
      </S.Container>

      <S.Table>
        <thead>
          <S.TableRow>
            <S.TableHCell>
              <input type="checkbox" style={{ cursor: 'pointer' }} />
            </S.TableHCell>
            <S.TableHCell>Id</S.TableHCell>
            <S.TableHCell>Nome</S.TableHCell>
            <S.TableHCell>Email</S.TableHCell>
            <S.TableHCell>Telefone</S.TableHCell>
            <S.TableHCell>Descrição</S.TableHCell>
            <S.TableHCell>Criado em</S.TableHCell>
            <S.TableHCell>Atualizado em</S.TableHCell>
            <S.TableHCell>Ação</S.TableHCell>
          </S.TableRow>
        </thead>
        <tbody>
          {users.map((user) => (
            <S.TableRow key={user.id}>
              <S.TableCell>
                <input type="checkbox" style={{ cursor: 'pointer' }} />
              </S.TableCell>
              <S.TableCell>{user.id}</S.TableCell>
              <S.TableCell>{user.name}</S.TableCell>
              <S.TableCell>{user.email}</S.TableCell>
              <S.TableCell>{user.telefone}</S.TableCell>
              {user.desc === null ? (
                <S.TableCell>vazio</S.TableCell>
              ) : (
                <S.TableCell>{user.desc}</S.TableCell>
              )}
              <S.TableCell>{user.createdAt}</S.TableCell>
              <S.TableCell>{user.updatedAt}</S.TableCell>
              <S.TableCell>
                <S.Trashbtn onClick={() => handleDeleteUser(user.id)}>
                  <BsTrash size={23} />
                </S.Trashbtn>
              </S.TableCell>
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>
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
