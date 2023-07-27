import { InputHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', name = '', ...props }, ref) => {
    return (
      <>
        <S.Container>
          <S.Label htmlFor={name}>{props.label}</S.Label>
          <S.Input type={type} name={name} ref={ref} {...props} />
        </S.Container>
      </>
    )
  },
)
