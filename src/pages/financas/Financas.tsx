import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'
import { ModalF } from '../../components/modals/modalForm/ModalF'
import * as S from './styles'
import { useState } from 'react'

export const Financas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <S.Container>
        <S.Titulo>Finanças</S.Titulo>
        <Button
          type="button"
          text="Add plano de contas"
          onClick={openModal}
          size={250}
        />
      </S.Container>

      {isModalOpen && (
        <ModalF onClose={closeModal}>
          <h1>Modal Teste</h1>
          <Input placeholder="Nome" />
          <Input placeholder="Fornecedor" />
          <select>
            <option value="despesa">Despesa</option>
            <option value="receita">Receita</option>
          </select>
        </ModalF>
      )}
    </>
  )
}
