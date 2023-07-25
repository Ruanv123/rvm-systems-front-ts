import { styled } from 'styled-components'
import { typography } from '../../styles/tokens/typography'
import { colors } from '../../styles/tokens/colors'
import { Link } from 'react-router-dom'

export const Titulo = styled.h1`
  font-size: ${typography.h1};
  color: ${colors.gray[800]};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`
export const Card = styled.div`
  border: 1px solid ${colors.gray[180]};
  padding: 40px;
  border-radius: 8px;
  max-width: 450px;
  width: 450px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const CardLink = styled(Link)`
  font-weight: 700;
  color: ${colors.white};
`

export const Content = styled.div``

export const Container2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  gap: 30px;
  justify-content: space-between;
`

export const Devedores = styled.div``

export const SaldoGeral = styled.div`
  border: 1px solid ${colors.gray[500]};
  border-radius: 8px;
  max-width: 850px;
  width: 100%;
  padding: 20px;
`

export const FluxoCaixa = styled.div`
  border: 1px solid ${colors.gray[500]};
  border-radius: 8px;
  max-width: 650px;
  width: 100%;
  padding: 20px;
`

export const TopDepesas = styled.div`
  border: 1px solid ${colors.gray[500]};
  border-radius: 8px;
  max-width: 650px;
  width: 100%;
  padding: 20px;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
`
