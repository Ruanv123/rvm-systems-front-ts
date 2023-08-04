import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import * as S from './styles'

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
              Política de Cookies <ArrowRightCircleIcon />
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
