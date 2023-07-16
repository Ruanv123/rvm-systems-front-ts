import { css, styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'

export const Wrapper = styled.div<{ size: number | string }>`
  ${({ size }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    width: ${Number(size) ? size + 'px' : size};
    height: ${Number(size) ? size + 'px' : size};
    border-radius: 100%;
    position: relative;
    cursor: pointer;
    border: 1px solid ${colors.gray[180]};
  `}
`

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: inherit;
`
export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 50%;
    width: 50%;
  }
`
