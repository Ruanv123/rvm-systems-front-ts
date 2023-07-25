import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'
import { typography } from '../../styles/tokens/typography'

export const Voltar = styled(Link)`
  color: ${colors.gray[800]};
`
export const Titulo = styled.h1`
  font-size: ${typography.h1};
  color: ${colors.gray[800]};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  margin-top: 1rem;
`

export const DivFlex = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`

export const Table = styled.table`
  border-radius: 6px;
  border: 1px solid ${colors.gray[180]};
  width: 100%;
  /* border-collapse: collapse; */
  border-spacing: 0;
  overflow: hidden;
  background-color: ${colors.white};
`

export const TableRow = styled.tr`
  border: 1px solid ${colors.gray[180]};
  padding: 0 16px;
`

export const TableHCell = styled.th`
  background-color: #f5f7f9;
  height: 40px;
`
export const TableCell = styled.td`
  height: 48px;
  text-align: center;
  border: 1px solid ${colors.gray[180]};
`

export const Trashbtn = styled.button`
  background-color: transparent;
`
