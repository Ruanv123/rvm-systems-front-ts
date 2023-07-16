import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'

export const ButtonComponent = styled.button`
  color: ${colors.white};
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(27, 36, 44, 0.12);
  padding: 10px 16px;
  max-width: 320px;
  width: 100%;
  background-color: ${colors.blue[600]};
  font-weight: 700;
  user-select: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.blue[700]};
  }
`
