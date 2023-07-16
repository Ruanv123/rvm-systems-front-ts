import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import HeaderImg from '../../assets/header_img.png'

export const Hero = () => {
  const navigate = useNavigate()
  return (
    <>
      <S.Head>
        <S.HContent>
          <S.HTitle>Um software com a cara da sua empresa</S.HTitle>
          <S.HText>
            A RVM Systems oferece um sistema ERP revolucionário, projetado para
            empresas de pequeno e médio porte. Simplifique sua gestão com uma
            solução eficiente e intuitiva.
          </S.HText>
          <S.HBtnDiv>
            <S.HBtnReq onClick={() => navigate('/login')}>Demo</S.HBtnReq>
            <S.HBtnSign onClick={() => navigate('/register')}>
              Register
            </S.HBtnSign>
          </S.HBtnDiv>
        </S.HContent>
        <S.HImg src={HeaderImg} alt="head image" />
      </S.Head>
    </>
  )
}
