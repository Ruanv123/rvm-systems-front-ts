import { ButtonComponent } from './styles'

interface ButtonProps {
  size: number | string
  type: 'button' | 'reset' | 'submit'
  text: string
  color: string
  onClick?: () => void
}

export const Button = ({ text, type, onClick, size, color }: ButtonProps) => {
  return (
    <>
      <ButtonComponent type={type} onClick={onClick} size={size} color={color}>
        {text}
      </ButtonComponent>
    </>
  )
}
