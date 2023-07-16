import { ButtonComponent } from './styles'

interface ButtonProps {
  text: string
  type: 'button' | 'reset' | 'submit'
  onClick?: () => void
}

export const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <>
      <ButtonComponent type={type} onClick={onClick}>
        {text}
      </ButtonComponent>
    </>
  )
}
