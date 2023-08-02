import { TrashIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { API_BASE_URL_2 } from '../../constants/Constants'
import { formatarData } from '../../utils/useFormatDate'
import * as S from './styles'

interface IClientes {
  id: string
  name: string
  email: string
  password: string
  telefone: string
  avatar?: string
  descricao?: string
  cpf: string
  createdAt: string
  updatedAt: string
}

/* interface IFormData {
  id: string
  name: string
  email: string
  password: string
  telefone: string
  avatar?: string
  descricao?: string
  cpf: string
  createdAt: string
  updatedAt: string
} */

export default function Clientes() {
  const [clientes, setClientes] = useState<IClientes[]>([])

  // const [loading, setLoading] = useState(false)

  const handleCliente = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL_2}/clientes`)
      const data = res.data
      setClientes(data)
    } catch (error) {
      console.error(error)
    }
  }

  /* const handleCreateCliente = async (data: IFormData) => {
    try {
      await axios.post(`${API_BASE_URL_2}/cliente`, {
        name: data.name,
        email: data.email,
        password: data.password,
        telefone: data.telefone,
        cpf: data.cpf,
      })
      setLoading(true)
      toast.success('sucesso ao criar cliente!')
      setLoading(false)
    } catch (error) {
      toast.error('ocorreu um error: ' + error)
    }
  } */

  useEffect(() => {
    handleCliente()
  }, [])
  return (
    <>
      <S.Container>
        <S.Titulo>Clientes</S.Titulo>
        {/*  <Button
          type="submit"
          size={150}
          text="Add Cliente +"
          color={`${colors.blue[500]}`}
        /> */}
      </S.Container>
      <S.Table>
        <thead>
          {/* <S.TableRow>
            <Input placeholder="pesquisar..." />
          </S.TableRow> */}
          <S.TableRow>
            <S.TableHCell>
              <input type="checkbox" />
            </S.TableHCell>
            <S.TableHCell>Nome</S.TableHCell>
            <S.TableHCell>Email</S.TableHCell>
            <S.TableHCell>Telefone</S.TableHCell>
            <S.TableHCell>Descrição</S.TableHCell>
            <S.TableHCell>Cpf</S.TableHCell>
            <S.TableHCell>CreatedAt</S.TableHCell>
            <S.TableHCell>UpdatedAt</S.TableHCell>
            <S.TableHCell>Ação</S.TableHCell>
          </S.TableRow>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <S.TableRow key={cliente.id}>
              <S.TableCell>
                <input type="checkbox" style={{ cursor: 'pointer' }} />
              </S.TableCell>
              <S.TableCell>{cliente.name}</S.TableCell>
              <S.TableCell>{cliente.email}</S.TableCell>
              <S.TableCell>{cliente.telefone}</S.TableCell>
              {cliente.descricao === null ? (
                <S.TableCell>vazio</S.TableCell>
              ) : (
                <S.TableCell>{cliente.descricao}</S.TableCell>
              )}

              <S.TableCell>{cliente.cpf}</S.TableCell>
              <S.TableCell>
                {/* {cliente.createdAt}{' '} */}
                {cliente.createdAt !== undefined
                  ? formatarData(cliente.createdAt)
                  : cliente.createdAt}
              </S.TableCell>
              <S.TableCell>
                {cliente.updatedAt !== undefined
                  ? formatarData(cliente.updatedAt)
                  : cliente.updatedAt}
              </S.TableCell>
              <S.TableCell>
                <S.Trashbtn>
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
