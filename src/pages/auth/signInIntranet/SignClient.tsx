import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/button/Button'
import { Input } from '../../../components/input/Input'
import * as S from './styles'

interface IFormData {
  email: string
  password: string
}

export default function SignClient() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>()
  const navigate = useNavigate()

  return (
    <S.Body>
      <S.Voltar to="/">Voltar</S.Voltar>
      <S.Container>
        <S.Form>
          <S.FormTitle>Login Client</S.FormTitle>
          <S.FormControl>
            <div style={{ width: '320px' }}>
              <Input
                label="Email:"
                {...register('email', { required: true })}
                type="email"
                name="email"
                placeholder="johndoe@domain.com"
              />
              {errors.email && (
                <p style={{ color: 'red', marginBottom: '10px' }}>
                  Preencha o campo
                </p>
              )}
            </div>
            <div style={{ width: '320px' }}>
              <Input
                label="Password:"
                {...register('password', { required: true })}
                type="password"
                name="password"
                placeholder="******"
              />
              {errors.password && (
                <p style={{ color: 'red', marginBottom: '10px' }}>
                  Preencha o campo
                </p>
              )}
            </div>
          </S.FormControl>
          <S.ResetPass>
            <S.LinkBack to="/reset-email">Reset Password</S.LinkBack>
          </S.ResetPass>
          <Button text="Login" type="submit" size={320} color="#3B82F6" />
          <S.Hr />
          <S.Span>
            Não possui uma conta?{' '}
            <S.LinkBack to="/register"> Registre-se</S.LinkBack>
          </S.Span>
        </S.Form>
      </S.Container>
    </S.Body>
  )
}
