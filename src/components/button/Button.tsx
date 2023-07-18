import { ButtonComponent } from './styles'

interface ButtonProps {
  size: number | string
  type: 'button' | 'reset' | 'submit'
  text: string
  onClick?: () => void
}

export const Button = ({ text, type, onClick, size }: ButtonProps) => {
  return (
    <>
      <ButtonComponent type={type} onClick={onClick} size={size}>
        {text}
      </ButtonComponent>
    </>
  )
}
