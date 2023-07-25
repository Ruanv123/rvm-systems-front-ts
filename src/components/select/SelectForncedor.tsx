import axios from 'axios'
import { API_BASE_URL_2 } from '../../constants/Constants'
import * as S from './styles'
import { useEffect, useState } from 'react'

interface IForncedores {
  id: string
  nome: string
}

interface ISelectForncedorProps {
  value: string
  onChange: (value: string) => void
}

export const SelectForncedor: React.FC<ISelectForncedorProps> = ({
  value,
  onChange,
}) => {
  const [fornecedores, setFornecedores] = useState<IForncedores[]>([])

  const handleFornecedores = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL_2}/fornecedores`)
      const data = res.data
      setFornecedores(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    handleFornecedores()
  }, [])

  return (
    <>
      <S.SelectWrapper>
        <S.Select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="" disabled selected>
            Selecione um fornecedor
          </option>
          {fornecedores.map((fornecedor) => (
            <option key={fornecedor.id} value={fornecedor.nome}>
              {fornecedor.nome}
            </option>
          ))}
        </S.Select>
      </S.SelectWrapper>
    </>
  )
}
