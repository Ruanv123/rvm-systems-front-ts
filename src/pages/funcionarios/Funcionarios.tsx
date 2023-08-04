import { TrashIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { API_BASE_URL } from '../../constants/Constants'
import { formatarData } from '../../utils/useFormatDate'
import { GetToken } from '../../utils/useStorage'
import * as S from './styles'

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
  const [ischeckedAll, setIsCheckedAll] = useState(false)
  const [ischeckedItems, setIsCheckedItems] = useState<{
    [key: number]: boolean
  }>({})

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

  const handleMasterCheckboxChange = () => {
    setIsCheckedAll(!ischeckedAll)
    const newCheckedItems: { [key: number]: boolean } = {}
    users.forEach((_, index) => {
      newCheckedItems[index] = !ischeckedAll
    })
    setIsCheckedItems(newCheckedItems)
  }

  const handleItemCheckboxChange = (index: number) => {
    setIsCheckedItems({
      ...ischeckedItems,
      [index]: !ischeckedItems[index],
    })
    setIsCheckedAll(false)
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
              <input
                type="checkbox"
                style={{ cursor: 'pointer' }}
                checked={ischeckedAll}
                onChange={handleMasterCheckboxChange}
              />
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
          {users.map((user, index) => (
            <S.TableRow key={index}>
              <S.TableCell>
                <input
                  type="checkbox"
                  style={{ cursor: 'pointer' }}
                  checked={ischeckedItems[index] || false}
                  onChange={() => handleItemCheckboxChange(index)}
                />
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
              <S.TableCell>{formatarData(user.createdAt)}</S.TableCell>
              <S.TableCell>{formatarData(user.updatedAt)}</S.TableCell>
              <S.TableCell>
                <S.Trashbtn onClick={() => handleDeleteUser(user.id)}>
                  <TrashIcon style={{ width: '23px' }} />
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
