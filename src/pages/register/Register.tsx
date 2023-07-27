import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'
import { API_BASE_URL } from '../../constants/Constants'
import * as S from './styles'

interface IFormData {
  name: string
  email: string
  telefone: string
  password: string
  confirmPassword: string
}

export default function Register() {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>()

  const onSubmit = async (data: IFormData) => {
    if (data.password !== data.confirmPassword) {
      setError('As senhas não correspondem!')
    }
    try {
      await axios.post(`${API_BASE_URL}/user`, {
        name: data.name,
        email: data.email,
        telefone: data.telefone,
        password: data.password,
      })
      toast.success('Usuario criado com sucesso!')
      navigate('/login')
    } catch (error) {
      toast.error('Ocorreu um error: ' + error)
    }
  }

  const formatarTelefone = (valor: string) => {
    const digitsOnly = valor.replace(/\D/g, '')
    const telefoneFormatado = digitsOnly.replace(
      /(\d{2})(\d{5})(\d{4})/,
      '($1) $2-$3',
    )
    return telefoneFormatado
  }

  return (
    <S.Body>
      <S.Voltar to="/">Voltar</S.Voltar>
      <S.Container>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.FormTitle>Register</S.FormTitle>
          <S.FormControl>
            <div style={{ width: '320px' }}>
              <Input
                label="Nome:"
                {...register('name', { required: true })}
                placeholder="John Doe"
                name="name"
                type="text"
              />
              {errors.name && (
                <p style={{ color: 'red' }}>Este campo é obrigatório</p>
              )}
            </div>
            <div style={{ width: '320px' }}>
              <Input
                label="Email:"
                {...register('email', { required: true })}
                placeholder="johndoe@gmail.com"
                name="email"
                type="email"
              />
              {errors.email && (
                <p style={{ color: 'red' }}>Este campo é obrigatório</p>
              )}
            </div>
            <div style={{ width: '320px' }}>
              <Input
                label="Telefone:"
                type="text"
                placeholder="(00) 0000-0000"
                maxLength={11}
                {...register('telefone', { required: true })}
                name="telefone"
                onChange={(event) => {
                  const valor = event.target.value
                  const telefoneFormatado = formatarTelefone(valor)
                  event.target.value = telefoneFormatado
                  return event
                }}
              />
              {errors.telefone && (
                <p style={{ color: 'red' }}>Este campo é obrigatório</p>
              )}
            </div>
            <div style={{ width: '320px' }}>
              <Input
                label="Password:"
                {...register('password', { required: true })}
                placeholder="********"
                name="password"
                type="password"
              />
              {errors.password && (
                <p style={{ color: 'red' }}>Este campo é obrigatório</p>
              )}
            </div>
            <div style={{ width: '320px' }}>
              <Input
                label="ConfirmPassword:"
                {...register('confirmPassword', { required: true })}
                name="confirmPassword"
                placeholder="********"
                type="password"
              />
              {errors.confirmPassword && (
                <span style={{ color: 'red' }}>Este campo é obrigatório</span>
              )}
              {error && <p>{error}</p>}
            </div>
          </S.FormControl>
          <Button text="Register" type="submit" size={320} color="#3B82F6" />
          <S.Hr />
          <S.Span>
            Já possui uma conta?
            <S.LinkBack to="/intranet"> Faça Login</S.LinkBack>
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
