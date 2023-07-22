import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { typography } from '../../styles/tokens/typography'
import { colors } from '../../styles/tokens/colors'

export const Voltar = styled(Link)`
  color: ${colors.gray[800]};
`
export const Titulo = styled.h1`
  font-size: ${typography.h1};
  color: ${colors.gray[800]};
`
