import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'

/* export const InputControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 320px;
  margin-bottom: 12px;
` */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  margin: 5px 0px;

  & + & {
    margin-top: 0.8rem;
  }
`

export const Label = styled.label`
  color: ${colors.gray[700]};
  font-size: 1rem;
  margin-bottom: 0.2rem;
`

export const Input = styled.input`
  border: 1px solid ${colors.gray[180]};
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 6px;
  transition: 0.3s ease;
  width: 100%;
  /* margin-top: 8px; */

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px ${colors.blue[400]};
  }

  &::placeholder {
    color: ${colors.gray[400]};
  }
`
