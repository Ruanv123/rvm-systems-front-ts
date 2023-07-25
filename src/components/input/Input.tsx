import { forwardRef, Ref, InputHTMLAttributes } from 'react'
import { InputControl, StyledInput } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <>
        <InputControl>
          <StyledInput ref={ref} {...props} />
        </InputControl>
      </>
    )
  },
)
