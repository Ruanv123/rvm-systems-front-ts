import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import * as S from './styles'

import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'
import { API_BASE_URL } from '../../constants/Constants'
import { colors } from '../../styles/tokens/colors'

interface IFormData {
  newPassword: string
  confirmPassword: string
}

export default function ResetPassword() {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>()

  const location = useLocation()

  const handleResetPassword = async (data: IFormData) => {
    const searchParams = new URLSearchParams(location.search)
    const token = searchParams.get('token')
    try {
      if (data.newPassword !== data.confirmPassword) {
        setError('As senhas nao correspondem!')
        return
      }
      if (data.newPassword.length < 8) {
        setError('A senha deve ter pelo menos 8 digitos!')
      }
      const res = await axios.post(`${API_BASE_URL}/user/reset-pass`, {
        // eslint-disable-next-line object-shorthand
        token: token,
        newPassword: data.newPassword,
      })

      if (res.data.message !== null) {
        toast.success('Senha alterada com sucesso!')
      }
      navigate('/user/reset-pass/confirm')
    } catch (error) {
      toast.error('Ocorreu um error ao tentar mudar a senha: ' + error)
    }
  }
  return (
    <S.Body>
      <S.Voltar to="/login">Voltar</S.Voltar>
      <S.Container>
        <S.Form onSubmit={handleSubmit(handleResetPassword)}>
          <S.FormTitle>Redefinição de senha</S.FormTitle>
          <S.FormText>
            Crie uma nova senha, seguindo as regras para uma senha segura.
          </S.FormText>
          <S.FormControl>
            <S.FormContainer>
              <S.Label>Nova senha:</S.Label>
              <Input
                {...register('newPassword', { required: true })}
                type="password"
                placeholder="********"
                minLength={8}
                size={350}
              />
              {errors.newPassword && (
                <span style={{ color: 'red' }}>Este campo é obrigatório</span>
              )}
            </S.FormContainer>
            <S.FormContainer>
              <S.Label>Confirmar senha:</S.Label>
              <Input
                {...register('confirmPassword', { required: true })}
                type="password"
                placeholder="********"
                minLength={8}
                size={350}
              />
              {errors.confirmPassword && (
                <span style={{ color: 'red' }}>Este campo é obrigatório</span>
              )}
            </S.FormContainer>
            {error && <p>{error}</p>}
          </S.FormControl>
          <Button
            type="submit"
            text="Alterar Senha"
            size={320}
            color={`${colors.blue[500]}`}
          />
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
