import React, { ReactNode } from 'react'
import { HeaderClient } from '../../components/headerClient/HeaderClient'
import * as S from './styles'

/* interface IClientData {
  id: number
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

/* interface ILayoutContextProps {
  clientData: IClientData
} */

interface IDashboardLayoutProps {
  children: ReactNode
}

export const ClientLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <S.Layout>
        <HeaderClient />
        <S.Main>{children}</S.Main>
      </S.Layout>
    </>
  )
}
