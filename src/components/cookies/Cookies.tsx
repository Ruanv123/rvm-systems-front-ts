import { useEffect, useState } from 'react'
import * as S from './styles'

import { MdOutlineArrowCircleRight } from 'react-icons/md'

export const Cookies = () => {
  const [aceito, setAceito] = useState(false)

  useEffect(() => {
    if (
      document.cookie.includes(
        'cookies=o usuario concordou com os termos de privacidade',
      )
    ) {
      setAceito(true)
    }
  }, [])

  const cookiesValidation = () => {
    document.cookie = 'cookies=o usuario concordou com os termos de privacidade'
    if (
      document.cookie.includes(
        'cookies=o usuario concordou com os termos de privacidade',
      )
    ) {
      setAceito(true)
    }
  }

  return (
    <>
      {!aceito && (
        <S.CookiesContainer>
          <S.Content>
            <S.TextContent>
              Utilizamos cookies para personalizar a sua experiência
            </S.TextContent>
            <S.TextLink to="/">
              Política de Cookies <MdOutlineArrowCircleRight size={20} />
            </S.TextLink>
          </S.Content>
          <S.Buttons>
            <S.ButtonOutlined onClick={cookiesValidation}>
              Apenas Necessário
            </S.ButtonOutlined>
            <S.Button onClick={cookiesValidation}>Permitir</S.Button>
          </S.Buttons>
        </S.CookiesContainer>
      )}
    </>
  )
}
