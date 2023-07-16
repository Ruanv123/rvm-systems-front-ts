import * as S from './styles'

import LogoMicrosoft from '../../assets/microsoft.png'
import LogoAtlassian from '../../assets/atlassian.png'
import LogoGoogle from '../../assets/google.png'
import LogoStack from '../../assets/stackbliz.png'

export const LogoCloud = () => {
  return (
    <>
      <S.LogoClouds>
        <S.LgTitle>Usados pelas grandes empresas no mercado</S.LgTitle>
        <S.LgImg>
          <figure>
            <img src={LogoMicrosoft} alt="" />
          </figure>
          <figure>
            <img src={LogoAtlassian} alt="" />
          </figure>
          <figure>
            <img src={LogoGoogle} alt="" />
          </figure>
          <figure>
            <img src={LogoStack} alt="" />
          </figure>
        </S.LgImg>
      </S.LogoClouds>
    </>
  )
}
