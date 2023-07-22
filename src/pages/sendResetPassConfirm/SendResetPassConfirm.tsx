import * as S from './styles'
import { colors } from '../../styles/tokens/colors'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export const SendResetPassConfirm = () => {
  return (
    <S.Body>
      <S.Container>
        <S.Form>
          <div style={{ color: `${colors.green[500]}` }}>
            <BsFillCheckCircleFill size={50} />
          </div>
          <S.FormTitle>Enviada com sucesso</S.FormTitle>
          <S.FormText>
            Enviamos instruções sobre como redefinir sua senha. Por favor, siga
            as instruções do e-mail.
          </S.FormText>
        </S.Form>
      </S.Container>
    </S.Body>
  )
}
