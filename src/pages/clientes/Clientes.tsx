import axios from 'axios'
import { Button } from '../../components/button/Button'
import { colors } from '../../styles/tokens/colors'
import * as S from './styles'
import { API_BASE_URL_2 } from '../../constants/Constants'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

interface iClientes {
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

export default function Clientes() {
  const [clientes, setClientes] = useState<iClientes[]>([])
  const [loading, setLoading] = useState(false)

  const handleCliente = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL_2}/clientes`)
      const data = res.data
      setClientes(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <S.Container>
        <S.Titulo>Clientes</S.Titulo>
        <Button
          type="submit"
          size={150}
          text="Add Cliente +"
          color={`${colors.blue[500]}`}
        />
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
            <S.TableHCell>Id</S.TableHCell>
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
              <S.TableCell>{cliente.password}</S.TableCell>
              <S.TableCell>{cliente.telefone}</S.TableCell>
              {cliente.descricao === null ? (
                <S.TableCell>vazio</S.TableCell>
              ) : (
                <S.TableCell>{cliente.descricao}</S.TableCell>
              )}

              <S.TableCell>{cliente.cpf}</S.TableCell>
              <S.TableCell>{cliente.createdAt}</S.TableCell>
              <S.TableCell>{cliente.updatedAt}</S.TableCell>
              <S.TableCell>
                {/*  <S.Trashbtn onClick={() => handleDeleteUser(user.id)}>
                <BsTrash size={23} />
              </S.Trashbtn> */}
                deletar
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
