import * as S from './styles'

export const Newsletter = () => {
  return (
    <>
      <S.Newsletter>
        <S.NewsContent>
          <S.NewsTitle>Assine nossa newsletter</S.NewsTitle>
          <S.NewsText>
            Fique por dentro de tudo o que você precisa saber.
          </S.NewsText>
        </S.NewsContent>
        <S.NewsButtons>
          <S.NewsInput type="email" placeholder="Entre com email" />
          <S.NewsButton>Inscreva-se</S.NewsButton>
        </S.NewsButtons>
      </S.Newsletter>
    </>
  )
}
