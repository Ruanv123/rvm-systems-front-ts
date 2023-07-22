import axios from 'axios'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { Button } from '../../components/button/Button'
import { BsTrash } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify'
import { ModalF } from '../../components/modals/modalForm/ModalF'
import { Input } from '../../components/input/Input'
import { useForm } from 'react-hook-form'
import { API_BASE_URL_2 } from '../../constants/Constants'

interface Produtos {
  id: string
  nome: string
  descricao: string
  preco: string
  imagem: string
  quantidade: number
  tipo: string
  codbarras: string
  createdAt: string
  updatedAt: string
  Fornecedor: {
    nome: string
  }
}

interface FormData {
  nome: string
  descricao: string
  preco: string
  imagem: string
  quantidade: number
  tipo: string
  codbarras: string
  createdAt: string
  updatedAt: string
  fornecedorName: string
  nomeLoja: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Produtos = () => {
  const [products, setProducts] = useState<Produtos[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleCreateProduct = async (data: FormData) => {
    try {
      const response = await axios.post(`${API_BASE_URL_2}/produto`, {
        nome: data.nome,
        descricao: data.descricao,
        preco: data.preco,
        quantidade: Number(data.quantidade),
        tipo: data.tipo,
        codbarras: data.codbarras,
        fornecedorName: data.fornecedorName,
        nomeLoja: data.nomeLoja,
      })
      toast.success('sucesso ao criar produto!')
      window.location.reload()
      console.log(response)
    } catch (error) {
      toast.error(`ocorreu um error!` + error)
    }
  }

  const handleProdutos = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL_2}/produtos`)
      const data = res.data
      setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteProducts = async (id: string) => {
    try {
      await axios.delete(`${API_BASE_URL_2}/produto/${id}`)
      window.location.reload()
      toast.success('Produto deletado com sucesso!')
    } catch (error) {
      toast.error('ocorreu um error!' + error)
    }
  }

  useEffect(() => {
    handleProdutos()
  }, [])

  /* if (products.length === 0) {
    return <p>Nenhum usuario encontrado!</p>
  } */
  return (
    <>
      <S.Container>
        <S.Titulo>Produtos</S.Titulo>
        <Button
          text="Add produto"
          type="button"
          size={150}
          onClick={openModal}
          color="#22C55E"
        />
      </S.Container>
      {products.length === 0 ? (
        <p>nenhum produto cadastrado!</p>
      ) : (
        <S.Table>
          <thead>
            <S.TableRow>
              <S.TableHCell>
                <input type="checkbox" style={{ cursor: 'pointer' }} />
              </S.TableHCell>
              <S.TableHCell>Nome</S.TableHCell>
              <S.TableHCell>Descrição</S.TableHCell>
              <S.TableHCell>preço</S.TableHCell>
              <S.TableHCell>imagem</S.TableHCell>
              <S.TableHCell>Quantidade</S.TableHCell>
              <S.TableHCell>Nome do Fornecedor</S.TableHCell>
              <S.TableHCell>tipo</S.TableHCell>
              <S.TableHCell>codbarras</S.TableHCell>
              <S.TableHCell>Ação</S.TableHCell>
            </S.TableRow>
          </thead>
          <tbody>
            {products.map((product) => (
              <S.TableRow key={product.id}>
                <S.TableCell>
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                </S.TableCell>
                <S.TableCell>{product.nome}</S.TableCell>
                <S.TableCell>{product.descricao}</S.TableCell>
                <S.TableCell>{product.preco}</S.TableCell>
                {product.imagem === null ? (
                  <S.TableCell>vazio</S.TableCell>
                ) : (
                  <S.TableCell>{product.imagem}</S.TableCell>
                )}
                <S.TableCell>{product.quantidade}</S.TableCell>
                <S.TableCell>{product.Fornecedor.nome}</S.TableCell>
                <S.TableCell>{product.tipo}</S.TableCell>
                <S.TableCell>{product.codbarras}</S.TableCell>
                <S.TableCell>
                  <S.Trashbtn onClick={() => handleDeleteProducts(product.id)}>
                    <BsTrash size={23} />
                  </S.Trashbtn>
                </S.TableCell>
              </S.TableRow>
            ))}
          </tbody>
        </S.Table>
      )}

      {isModalOpen && (
        <ModalF onClose={closeModal}>
          <h1>Adcionar Produto</h1>
          <p></p>
          <form action="" onSubmit={handleSubmit(handleCreateProduct)}>
            <label htmlFor="">
              Nome do produto
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
              Descrição
              <Input
                placeholder="Descrição"
                type="text"
                {...register('descricao', { required: true })}
              />
            </label>
            {errors.descricao && (
              <p style={{ color: 'red', marginBottom: '10px' }}>
                Preencha o campo
              </p>
            )}
            <label htmlFor="">
              preco
              <Input
                placeholder="preço"
                type="text"
                {...register('preco', { required: true })}
              />
            </label>
            {errors.preco && (
              <p style={{ color: 'red', marginBottom: '10px' }}>
                Preencha o campo
              </p>
            )}
            <label htmlFor="">
              imagem Url
              <Input
                placeholder="url da imagem"
                type="text"
                {...register('imagem', { required: true })}
              />
            </label>
            {errors.imagem && (
              <p style={{ color: 'red', marginBottom: '10px' }}>
                Preencha o campo
              </p>
            )}
            <label htmlFor="">
              quantidade
              <Input
                placeholder="quantidade"
                type="text"
                {...register('quantidade', { required: true })}
              />
            </label>
            {errors.quantidade && (
              <p style={{ color: 'red', marginBottom: '10px' }}>
                Preencha o campo
              </p>
            )}
            <label htmlFor="">
              Nome do Fornecedor
              {/* <Input
                placeholder="..."
                type="text"
                {...register('fornecedorName', { required: true })}
              /> */}
              <select {...register('fornecedorName', { required: true })}>
                <option value="tambasa">tambasa</option>
                <option value="importec">importec</option>
                <option value="apple">apple</option>
              </select>
            </label>
            {errors.fornecedorName && (
              <p style={{ color: 'red', marginBottom: '10px' }}>
                Preencha o campo
              </p>
            )}
            <S.Space />
            <label htmlFor="">
              tipo
              <Input
                placeholder="tipo"
                type="text"
                {...register('tipo', { required: true })}
              />
            </label>
            {errors.tipo && (
              <p style={{ color: 'red', marginBottom: '10px' }}>
                Preencha o campo
              </p>
            )}
            <label htmlFor="">
              Nome Loja
              <Input
                placeholder="nome da loja"
                type="text"
                {...register('nomeLoja', { required: true })}
              />
            </label>
            {errors.nomeLoja && (
              <p style={{ color: 'red', marginBottom: '10px' }}>
                Preencha o campo
              </p>
            )}
            <label htmlFor="">
              código de barras
              <Input
                placeholder="código de barras"
                type="text"
                {...register('codbarras', { required: true })}
                maxLength={13}
              />
            </label>
            {errors.codbarras && (
              <p style={{ color: 'red', marginBottom: '10px' }}>
                Preencha o campo
              </p>
            )}
            <Button type="submit" text="Criar" size={350} color="#4ade80" />
          </form>
        </ModalF>
      )}
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
