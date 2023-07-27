import axios from 'axios'
import { Button } from '../../components/button/Button'
import { colors } from '../../styles/tokens/colors'
import * as S from './styles'
import { API_BASE_URL_2 } from '../../constants/Constants'
import { ModalF } from '../../components/modals/modalForm/ModalF'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/input/Input'
import { useCepMask, useCpnjMask, useTelefoneMask } from '../../utils/useMasks'
import { BsTrash } from 'react-icons/bs'

interface IForncedores {
  id: string
  nome: string
  telefone: string
  email: string
  site?: string
  cnpj: string
  endereco: string
  cep: string
  tipo: string
}

interface IFormData {
  id: string
  nome: string
  telefone: string
  email: string
  site?: string
  cpnj: string
  endereco: string
  cep: string
  tipo: string
  createdAt: string
  updatedAt: string
}

export default function Fornecedor() {
  const [fornecedores, setFornecedores] = useState<IForncedores[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>()

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleFornecedores = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL_2}/fornecedores`)
      const data = res.data
      setFornecedores(data)
    } catch (error) {
      toast.error('ocorreu um error' + error)
    }
  }

  const handleCreateFornecedor = async (data: IFormData) => {
    try {
      await axios.post(`${API_BASE_URL_2}/fornecedor`, {
        nome: data.nome,
        telefone: data.telefone,
        email: data.email,
        site: data.site,
        cnpj: data.cpnj,
        endereco: data.endereco,
        cep: data.cep,
        tipo: data.tipo,
      })
      setLoading(true)
      toast.success('sucesso ao cadastrar fornecedor')
      closeModal()
    } catch (error) {
      toast.error('ocorreu um error' + error)
    }
  }

  const handleDeleteFornecedor = async (id: string) => {
    try {
      await axios.delete(`${API_BASE_URL_2}/fornecedor/${id}`)
      setLoading(true)
      toast.success('fornecedor deletado com sucesso!')
    } catch (error) {
      toast.error('ocorreu um error ao deletar fornecedor' + error)
    }
  }

  useEffect(() => {
    handleFornecedores()
  }, [loading])

  return (
    <>
      <S.Container>
        <S.Titulo>Fornecedores</S.Titulo>
        <Button
          type="submit"
          size={150}
          text="Add fornecedor +"
          color={`${colors.blue[500]}`}
          onClick={openModal}
        />
      </S.Container>
      <S.Table>
        <thead>
          <S.TableRow>
            <S.TableHCell>
              <input type="checkbox" />
            </S.TableHCell>
            <S.TableHCell>Nome</S.TableHCell>
            <S.TableHCell>Email</S.TableHCell>
            <S.TableHCell>Telefone</S.TableHCell>
            <S.TableHCell>Site</S.TableHCell>
            <S.TableHCell>Cnpj</S.TableHCell>
            <S.TableHCell>Endereco</S.TableHCell>
            <S.TableHCell>cep</S.TableHCell>
            <S.TableHCell>Tipo</S.TableHCell>
            <S.TableHCell>Ação</S.TableHCell>
          </S.TableRow>
        </thead>
        <tbody>
          {fornecedores.map((fornecedor) => (
            <S.TableRow key={fornecedor.id}>
              <S.TableCell key={fornecedor.id}>
                <input
                  type="checkbox"
                  style={{ cursor: 'pointer', margin: '5px' }}
                />
              </S.TableCell>
              <S.TableCell>{fornecedor.nome}</S.TableCell>
              <S.TableCell>{fornecedor.email}</S.TableCell>
              <S.TableCell>{fornecedor.telefone}</S.TableCell>
              {fornecedor.site === null ? (
                <S.TableCell>vazio</S.TableCell>
              ) : (
                <S.TableCell>{fornecedor.site}</S.TableCell>
              )}
              <S.TableCell>{fornecedor.cnpj}</S.TableCell>
              <S.TableCell>{fornecedor.endereco}</S.TableCell>
              <S.TableCell>{fornecedor.cep}</S.TableCell>
              <S.TableCell>{fornecedor.tipo}</S.TableCell>
              <S.TableCell>
                <S.Trashbtn
                  onClick={() => handleDeleteFornecedor(fornecedor.id)}
                >
                  <BsTrash size={23} />
                </S.Trashbtn>
              </S.TableCell>
            </S.TableRow>
          ))}
        </tbody>
        {isModalOpen && (
          <ModalF onClose={closeModal}>
            <S.Titulo>Cadastrar Fornecedor</S.Titulo>
            <p></p>
            <form onSubmit={handleSubmit(handleCreateFornecedor)}>
              <label htmlFor="">
                Nome do fornecedor
                <Input
                  placeholder="Nome"
                  type="text"
                  {...register('nome', { required: true })}
                />
              </label>
              {errors.nome && (
                <p style={{ color: 'red', marginBottom: '10px' }}>
                  Preencha o campo
                </p>
              )}
              <label htmlFor="">
                telefone do fornecedor
                <Input
                  placeholder="(00) 0000-0000"
                  maxLength={11}
                  type="text"
                  {...register('telefone', { required: true })}
                  onChange={(event) => {
                    const valor = event.target.value
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const telefoneFormatado = useTelefoneMask(valor)
                    event.target.value = telefoneFormatado
                    return event
                  }}
                />
              </label>
              {errors.telefone && (
                <p style={{ color: 'red', marginBottom: '10px' }}>
                  Preencha o campo
                </p>
              )}
              <label htmlFor="">
                Email do fornecedor
                <Input
                  placeholder="email"
                  type="text"
                  {...register('email', { required: true })}
                />
              </label>
              {errors.email && (
                <p style={{ color: 'red', marginBottom: '10px' }}>
                  Preencha o campo
                </p>
              )}
              <label htmlFor="">
                Site do fornecedor
                <Input
                  placeholder="Site"
                  type="text"
                  {...register('site', { required: true })}
                />
              </label>
              {errors.site && (
                <p style={{ color: 'red', marginBottom: '10px' }}>
                  Preencha o campo
                </p>
              )}
              <label htmlFor="">
                Cnpj do fornecedor
                <Input
                  placeholder="00.000.000/0001-00"
                  type="text"
                  maxLength={14}
                  {...register('cpnj', { required: true })}
                  onChange={(event) => {
                    const valor = event.target.value
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const telefoneFormatado = useCpnjMask(valor)
                    event.target.value = telefoneFormatado
                    return event
                  }}
                />
              </label>
              {errors.cpnj && (
                <p style={{ color: 'red', marginBottom: '10px' }}>
                  Preencha o campo
                </p>
              )}
              <label htmlFor="">
                Endereco do fornecedor
                <Input
                  placeholder="endereco do fornecedor"
                  type="text"
                  {...register('endereco', { required: true })}
                />
              </label>
              {errors.tipo && (
                <p style={{ color: 'red', marginBottom: '10px' }}>
                  Preencha o campo
                </p>
              )}
              <label htmlFor="">
                Cep do fornecedor
                <Input
                  placeholder="00000-000"
                  type="text"
                  maxLength={8}
                  {...register('cep', { required: true })}
                  onChange={(event) => {
                    const valor = event.target.value
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const telefoneFormatado = useCepMask(valor)
                    event.target.value = telefoneFormatado
                    return event
                  }}
                />
              </label>
              {errors.tipo && (
                <p style={{ color: 'red', marginBottom: '10px' }}>
                  Preencha o campo
                </p>
              )}
              <label htmlFor="">
                tipo do fornecedor
                <Input
                  placeholder="tipo do fornecedor"
                  type="text"
                  {...register('tipo', { required: true })}
                />
              </label>
              {errors.tipo && (
                <p style={{ color: 'red', marginBottom: '10px' }}>
                  Preencha o campo
                </p>
              )}
              <Button
                type="submit"
                text="Criar Fornecedor"
                size={350}
                color="#4ade80"
              />
            </form>
          </ModalF>
        )}
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
