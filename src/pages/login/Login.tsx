import * as S from './styles'
import { ToastContainer, toast } from 'react-toastify'
import { Button } from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Input } from '../../components/input/Input'
import { useForm } from 'react-hook-form'
import { API_BASE_URL } from '../../constants/Constants'
import { UseStorage } from '../../utils/useStorage'

interface FormData {
  email: string
  password: string
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const navigate = useNavigate()

  const handleLogin = async (data: FormData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, data)
      const { token, refreshToken } = response.data
      UseStorage('token', token)
      UseStorage('refreshToken', refreshToken)

      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      toast.success('logado com sucesso!')
      navigate('/dashboard/')
    } catch (error) {
      toast.error('ocorreu um erro durante o login' + error)
    }
  }
  return (
    <S.Body>
      <S.Voltar to="/">Voltar</S.Voltar>
      <S.Container>
        <S.Form onSubmit={handleSubmit(handleLogin)}>
          <S.FormTitle>Sign in</S.FormTitle>
          <S.FormControl>
            <div>
              <S.Label>Email:</S.Label>
              <Input
                {...register('email', { required: true })}
                type="email"
                placeholder="johndoe@domain.com"
              />
              {errors.email && (
                <p style={{ color: 'red', marginBottom: '10px' }}>
                  Preencha o campo
                </p>
              )}
            </div>
            <div>
              <S.Label>Password:</S.Label>
              <Input
                {...register('password', { required: true })}
                type="password"
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
          <Button text="Login" type="submit" size={320} />
          <S.Hr />
          <S.Span>
            Não possui uma conta?{' '}
            <S.LinkBack to="/register"> Registre-se</S.LinkBack>
          </S.Span>
        </S.Form>
      </S.Container>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </S.Body>
  )
}
