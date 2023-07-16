import * as S from './styles'
import { useNavigate } from 'react-router-dom'

import { MdCheck } from 'react-icons/md'

import CtaImage from '../../assets/Cta-img.png'

export const Cta = () => {
  const navigate = useNavigate()
  return (
    <>
      <S.Cta>
        <S.CtaContent>
          <S.CtaTitle>Junte-se a 500+ empresas crescendo com a RVM</S.CtaTitle>
          <S.CtaTextContainer>
            <S.CtaCheckText>
              <S.CtaCheckContainer>
                <MdCheck color="#fff" size={13} />
              </S.CtaCheckContainer>
              Software modelado para sua necessidade
            </S.CtaCheckText>
            <S.CtaCheckText style={{ margin: '16px 0px' }}>
              <S.CtaCheckContainer>
                <MdCheck color="#fff" size={13} />
              </S.CtaCheckContainer>
              Suporte 24h todos os dias
            </S.CtaCheckText>
            <S.CtaCheckText>
              <S.CtaCheckContainer>
                <MdCheck color="#fff" size={13} />
              </S.CtaCheckContainer>
              Utilizado por grandes empresas
            </S.CtaCheckText>
          </S.CtaTextContainer>
          <S.CtaBtnContainer>
            <S.HBtnSign onClick={() => navigate('/')}>Saiba Mais</S.HBtnSign>
            <S.HBtnReq onClick={() => navigate('/register')}>
              Get Started
            </S.HBtnReq>
          </S.CtaBtnContainer>
        </S.CtaContent>
        <S.CtaImg src={CtaImage} alt="Section image" />
      </S.Cta>
    </>
  )
}
