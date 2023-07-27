/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { Button } from '../../../components/button/Button'
import { Input } from '../../../components/input/Input'
import { API_BASE_URL } from '../../../constants/Constants'
import { useCpfMask, useTelefoneMask } from '../../../utils/useMasks'
import * as S from './styles'

interface IFormdata {
  name: string
  email: string
  password: string
  telefone: string
  cpf: string
}

export default function SignupClient() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormdata>()

  const handleCreateClient = async (data: IFormdata) => {
    try {
      await axios.post(`${API_BASE_URL}/cliente`, {
        name: data.name,
        email: data.email,
        password: data.password,
        cpf: data.cpf,
        telefone: data.telefone,
      })

      toast.success('Cliente Criado Com Sucesso!!')
    } catch (error) {
      toast.error('ocorreu um error!' + error)
    }
  }

  return (
    <>
      <S.Body>
        <S.Voltar to="/">Voltar</S.Voltar>
        <S.Container>
          <S.Form onSubmit={handleSubmit(handleCreateClient)}>
            <S.FormTitle>Sign Up Client</S.FormTitle>
            <S.FormControl>
              <div style={{ width: '320px' }}>
                <Input
                  label="Name:"
                  {...register('name', { required: true })}
                  name="name"
                  type="text"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p style={{ color: 'red', marginBottom: '10px' }}>
                    Preencha o campo
                  </p>
                )}
              </div>
              <div style={{ width: '320px' }}>
                <Input
                  label="Email"
                  {...register('email', { required: true })}
                  name="email"
                  type="email"
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
                  name="password"
                  type="password"
                  placeholder="******"
                />
                {errors.password && (
                  <p style={{ color: 'red', marginBottom: '10px' }}>
                    Preencha o campo
                  </p>
                )}
              </div>
              <div style={{ width: '320px' }}>
                <Input
                  label="Telefone"
                  {...register('telefone', { required: true })}
                  name="Telefone"
                  type="text"
                  maxLength={11}
                  placeholder="(00) 0000-0000"
                  onChange={(event) => {
                    const valor = event.target.value
                    const telefoneFormatado = useTelefoneMask(valor)
                    event.target.value = telefoneFormatado
                    return event
                  }}
                />
                {errors.telefone && (
                  <p style={{ color: 'red', marginBottom: '10px' }}>
                    Preencha o campo
                  </p>
                )}
              </div>
              <div style={{ width: '320px' }}>
                <Input
                  label="Cpf:"
                  {...register('cpf', { required: true })}
                  name="Cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  maxLength={14}
                  onChange={(event) => {
                    const valor = event.target.value
                    const telefoneFormatado = useCpfMask(valor)
                    event.target.value = telefoneFormatado
                    return event
                  }}
                />
                {errors.cpf && (
                  <p style={{ color: 'red', marginBottom: '10px' }}>
                    Preencha o campo
                  </p>
                )}
              </div>
            </S.FormControl>
            <Button text="Login" type="submit" size={320} color="#3B82F6" />
            <S.Hr />
            <S.Span>
              Já possui uma conta? <S.LinkBack to="/login"> Login</S.LinkBack>
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
    </>
  )
}
