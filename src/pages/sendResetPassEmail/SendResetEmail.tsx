import * as S from './styles'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useForm } from 'react-hook-form'

import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'
import { API_BASE_URL } from '../../constants/Constants'
import { colors } from '../../styles/tokens/colors'
import { useNavigate } from 'react-router-dom'

interface FormData {
  email: string
}

export default function SendResetEmail() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmitEmail = async (data: FormData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/user/reset-pass-email`,
        data,
      )
      const res = response.data
      console.log(res)
      if (res.message !== null) {
        navigate('/reset-email/confirm')
      }
    } catch (error) {
      toast.error(
        'ocorreu um erro durante a tentativa de redefinicao de senha!' + error,
      )
    }
  }

  return (
    <S.Body>
      <S.Voltar to="/login">Voltar</S.Voltar>
      <S.Container>
        <S.Form onSubmit={handleSubmit(onSubmitEmail)}>
          <S.FormTitle>Redefinição de Senha</S.FormTitle>
          <S.FormText>
            Digite o email para receber um link de redefinição de senha
          </S.FormText>
          <S.FormControl>
            <S.FormContainer>
              <S.Label>Email</S.Label>
              <Input
                {...register('email', { required: true })}
                type="email"
                placeholder="johndoe@gmail.com"
                style={{ width: '100%' }}
              />
              {errors.email && (
                <span style={{ color: 'red' }}>Este campo é obrigatório</span>
              )}
            </S.FormContainer>
          </S.FormControl>
          <Button
            text="Enviar email"
            type="submit"
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
