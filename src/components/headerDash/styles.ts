import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
  border-bottom: 1px solid ${colors.gray[180]};
`

export const LContainer = styled.div``

export const RContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const AvatarLabel = styled.p``

export const Logo = styled.img`
  width: 180px;
  cursor: pointer;
`

export const LinkA = styled(Link)``
