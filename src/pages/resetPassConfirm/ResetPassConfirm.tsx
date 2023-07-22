import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import { colors } from '../../styles/tokens/colors'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export const ResetPassConfirm = () => {
  const navigate = useNavigate()
  return (
    <S.Body>
      <S.Container>
        <S.Form>
          <div style={{ color: `${colors.green[500]}` }}>
            <BsFillCheckCircleFill size={50} />
          </div>
          <S.FormTitle>Redefinição de senha concluída</S.FormTitle>
          <S.FormText>Agora você pode acessar sua conta.</S.FormText>
          <Button
            type="button"
            size={320}
            color={`${colors.blue[500]}`}
            text="Login"
            onClick={() => navigate('/login')}
          />
        </S.Form>
      </S.Container>
    </S.Body>
  )
}
