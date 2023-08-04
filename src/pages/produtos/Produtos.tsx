import { TrashIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'
import { ModalF } from '../../components/modals/modalForm/ModalF'
import { SelectForncedor } from '../../components/select/SelectForncedor'
import { API_BASE_URL_2 } from '../../constants/Constants'
import { colors } from '../../styles/tokens/colors'

import * as S from './styles'

interface IProdutos {
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

interface IFormData {
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

export default function Produtos() {
  const [products, setProducts] = useState<IProdutos[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState<string>('')
  const [ischeckedAll, setIsCheckedAll] = useState(false)
  const [ischeckedItems, setIsCheckedItems] = useState<{
    [key: number]: boolean
  }>({})

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormData>()

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleCreateProduct = async (data: IFormData) => {
    try {
      await axios.post(`${API_BASE_URL_2}/produto`, {
        nome: data.nome,
        descricao: data.descricao,
        preco: data.preco,
        quantidade: Number(data.quantidade),
        tipo: data.tipo,
        codbarras: data.codbarras,
        fornecedorName: data.fornecedorName,
        nomeLoja: data.nomeLoja,
      })
      setLoading(true)
      toast.success('sucesso ao criar produto!')
      closeModal()
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
      setLoading(true)
      toast.success('Produto deletado com sucesso!')
    } catch (error) {
      toast.error('ocorreu um error!' + error)
    }
  }

  const filteredProducts =
    search.length > 0
      ? products.filter((product) => product.nome.includes(search))
      : []

  const handleMasterCheckboxChange = () => {
    setIsCheckedAll(!ischeckedAll)
    const newCheckedItems: { [key: number]: boolean } = {}
    products.forEach((_, index) => {
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
    handleProdutos()
  }, [loading])

  if (products.length === 0) {
    return <p>Nenhum usuario encontrado!</p>
  }

  // console.log(products.length)

  // console.log(search)

  return (
    <>
      <S.Container>
        <S.Titulo>Produtos</S.Titulo>
        <Button
          text="Add produto +"
          type="button"
          size={150}
          onClick={openModal}
          color={`${colors.blue[500]}`}
        />
      </S.Container>

      <>
        <input
          type="text"
          placeholder="searc..."
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          style={{
            border: 'none',
            outline: 'none',
            padding: '5px',
            borderRadius: '6px',
          }}
        />
      </>
      {products.length === 0 ? (
        <p>nenhum produto cadastrado!</p>
      ) : (
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
            {search.length > 0 ? (
              <>
                {filteredProducts.map((product, index) => (
                  <S.TableRow key={index}>
                    <S.TableCell>
                      <input
                        type="checkbox"
                        style={{ cursor: 'pointer' }}
                        checked={ischeckedItems[index] || false}
                        onChange={() => handleItemCheckboxChange(index)}
                      />
                    </S.TableCell>
                    <S.TableCell>{product.nome}</S.TableCell>
                    <S.TableCell>{product.descricao}</S.TableCell>
                    <S.TableCell>R$ {product.preco}</S.TableCell>
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
                      <S.Trashbtn
                        onClick={() => handleDeleteProducts(product.id)}
                      >
                        <TrashIcon />
                      </S.Trashbtn>
                    </S.TableCell>
                  </S.TableRow>
                ))}
              </>
            ) : (
              <>
                {products.map((product, index) => (
                  <S.TableRow key={index}>
                    <S.TableCell>
                      <input
                        type="checkbox"
                        style={{ cursor: 'pointer' }}
                        checked={ischeckedItems[index] || false}
                        onChange={() => handleItemCheckboxChange(index)}
                      />
                    </S.TableCell>
                    <S.TableCell>{product.nome}</S.TableCell>
                    <S.TableCell>{product.descricao}</S.TableCell>
                    <S.TableCell>R$ {product.preco}</S.TableCell>
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
                      <S.Trashbtn
                        onClick={() => handleDeleteProducts(product.id)}
                      >
                        <TrashIcon style={{ width: '23px' }} />
                      </S.Trashbtn>
                    </S.TableCell>
                  </S.TableRow>
                ))}
              </>
            )}
          </tbody>
        </S.Table>
      )}

      {isModalOpen && (
        <ModalF onClose={closeModal}>
          <S.Titulo>Adcionar Produto</S.Titulo>
          <p></p>
          <form onSubmit={handleSubmit(handleCreateProduct)}>
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
                type="number"
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
              {/* <select {...register('fornecedorName', { required: true })}>
                <option value="tambasa">tambasa</option>
                <option value="importec">importec</option>
                <option value="apple">apple</option>
              </select> */}
              <Controller
                name="fornecedorName"
                control={control}
                rules={{ required: 'Selecione um fornecedor' }}
                render={({ field }) => (
                  <SelectForncedor
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                  />
                )}
              />
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
