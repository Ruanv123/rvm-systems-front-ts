import { styled } from 'styled-components'
import { typography } from '../../styles/tokens/typography'
import { colors } from '../../styles/tokens/colors'

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
export const LinkCard = styled.div`
  border: 1px solid ${colors.gray[180]};
  padding: 40px;
  border-radius: 8px;
  max-width: 450px;
  width: 450px;
`

export const Content = styled.div``

export const Container2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  gap: 30px;
`
