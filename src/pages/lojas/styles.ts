import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'
import { typography } from '../../styles/tokens/typography'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Titulo = styled.h1`
  font-size: ${typography.h1};
  color: ${colors.gray[800]};
  margin-bottom: 32px;
`
