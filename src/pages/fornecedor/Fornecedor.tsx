import { TrashIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'
import { ModalF } from '../../components/modals/modalForm/ModalF'
import { API_BASE_URL_2 } from '../../constants/Constants'
import { colors } from '../../styles/tokens/colors'
import { useCepMask, useCpnjMask, useTelefoneMask } from '../../utils/useMasks'
import * as S from './styles'

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
  const [ischeckedAll, setIsCheckedAll] = useState(false)
  const [ischeckedItems, setIsCheckedItems] = useState<{
    [key: number]: boolean
  }>({})
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

  const handleMasterCheckboxChange = () => {
    setIsCheckedAll(!ischeckedAll)
    const newCheckedItems: { [key: number]: boolean } = {}
    fornecedores.forEach((_, index) => {
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
              <input
                type="checkbox"
                checked={ischeckedAll}
                onChange={handleMasterCheckboxChange}
              />
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
          {fornecedores.map((fornecedor, index) => (
            <S.TableRow key={fornecedor.id}>
              <S.TableCell key={fornecedor.id}>
                <input
                  type="checkbox"
                  checked={ischeckedItems[index] || false}
                  onChange={() => handleItemCheckboxChange(index)}
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
                  <TrashIcon style={{ width: '23px' }} />
                </S.Trashbtn>
              </S.TableCell>
            </S.TableRow>
          ))}
        </tbody>
        {isModalOpen && (
          <ModalF onClose={closeModal}>
            <S.Titulo>Cadastrar Fornecedor</S.Titulo>
            <form onSubmit={handleSubmit(handleCreateFornecedor)}>
              <div style={{ width: '320px' }}>
                <Input
                  label="Nome do fornecedor"
                  placeholder="Nome"
                  type="text"
                  {...register('nome', { required: true })}
                  name="nome"
                />
                {errors.nome && (
                  <p style={{ color: 'red', marginBottom: '10px' }}>
                    Preencha o campo
                  </p>
                )}
              </div>
              <div style={{ width: '320px' }}>
                <Input
                  label=" telefone do fornecedor"
                  placeholder="(00) 0000-0000"
                  maxLength={11}
                  type="text"
                  {...register('telefone', { required: true })}
                  name="telefone"
                  onChange={(event) => {
                    const valor = event.target.value
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const telefoneFormatado = useTelefoneMask(valor)
                    event.target.value = telefoneFormatado
                    return event
                  }}
                />
                {errors.telefone && (
                  <p style={{ color: 'red', marginBottom: '10px' }}>
                    Preencha o campo
                  </p>
                )}
              </div>
              <div style={{ width: '320px' }}>
                <Input
                  label="Email do fornecedor"
                  {...register('email', { required: true })}
                  name="email"
                  placeholder="email"
                  type="text"
                />
                {errors.email && (
                  <p style={{ color: 'red', marginBottom: '10px' }}>
                    Preencha o campo
                  </p>
                )}
              </div>
              <div style={{ width: '320px' }}>
                <Input
                  label="Site do fornecedor"
                  {...register('site', { required: true })}
                  name="site"
                  placeholder="Site"
                  type="text"
                />
                {errors.site && (
                  <p style={{ color: 'red', marginBottom: '10px' }}>
                    Preencha o campo
                  </p>
                )}
              </div>
              <div style={{ width: '320px' }}>
                <Input
                  label="Cnpj do fornecedor"
                  placeholder="00.000.000/0001-00"
                  type="text"
                  maxLength={14}
                  {...register('cpnj', { required: true })}
                  name="cnpj"
                  onChange={(event) => {
                    const valor = event.target.value
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const telefoneFormatado = useCpnjMask(valor)
                    event.target.value = telefoneFormatado
                    return event
                  }}
                />
                {errors.cpnj && (
                  <p style={{ color: 'red', marginBottom: '10px' }}>
                    Preencha o campo
                  </p>
                )}
              </div>
              <div style={{ width: '320px' }}>
                <Input
                  label="Endereco do fornecedor"
                  {...register('endereco', { required: true })}
                  name="end"
                  placeholder="endereco do fornecedor"
                  type="text"
                />
                {errors.tipo && (
                  <p style={{ color: 'red', marginBottom: '10px' }}>
                    Preencha o campo
                  </p>
                )}
              </div>
              <div style={{ width: '320px' }}>
                <Input
                  label="Cep do fornecedor"
                  {...register('cep', { required: true })}
                  name="cep"
                  placeholder="00000-000"
                  type="text"
                  maxLength={8}
                  onChange={(event) => {
                    const valor = event.target.value
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const telefoneFormatado = useCepMask(valor)
                    event.target.value = telefoneFormatado
                    return event
                  }}
                />
                {errors.tipo && (
                  <p style={{ color: 'red', marginBottom: '10px' }}>
                    Preencha o campo
                  </p>
                )}
              </div>
              <div style={{ width: '320px', marginBottom: '1rem' }}>
                <Input
                  label="tipo do fornecedor"
                  {...register('tipo', { required: true })}
                  name="tipo"
                  placeholder="tipo do fornecedor"
                  type="text"
                />
                {errors.tipo && (
                  <p style={{ color: 'red', marginBottom: '10px' }}>
                    Preencha o campo
                  </p>
                )}
              </div>

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
