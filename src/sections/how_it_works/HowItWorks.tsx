import * as S from './styles'

import HowItWorksImg from '../../assets/howWorks-img.png'

export const HowItWorks = () => {
  return (
    <>
      <S.HowWorks>
        <S.HWImg src={HowItWorksImg} alt="como funciona imagem" />
        <S.HWContent>
          <S.HWTitle>Entenda como nosso sistema funciona</S.HWTitle>
          <S.HWLayout>
            <S.HWCard>
              <S.HWBall>1</S.HWBall>
              <S.HWCTitle>Análise personalizada</S.HWCTitle>
              <S.HWCText>
                Gerando visualizações personalizadas para os seus dados da
                melhor forma para a sua equipe
              </S.HWCText>
            </S.HWCard>
            <S.HWCard>
              <S.HWBall>2</S.HWBall>
              <S.HWCTitle>Gestão de Equipes</S.HWCTitle>
              <S.HWCText>
                Nosso sistema permite que você saiba o que está acontecendo com
                o cliente e projetos para você controlar o processo.
              </S.HWCText>
            </S.HWCard>
            <S.HWCard>
              <S.HWBall>3</S.HWBall>
              <S.HWCTitle>Design Intuitivo</S.HWCTitle>
              <S.HWCText>
                Com um design intuitivo e de fácil utilização. Permitindo até os
                usuários menos experientes sentirem familiarizados com a nossa
                aplicação
              </S.HWCText>
            </S.HWCard>
            <S.HWCard>
              <S.HWBall>4</S.HWBall>
              <S.HWCTitle>Tudo em um</S.HWCTitle>
              <S.HWCText>
                Plataforma de Negócios Ponta a Ponta, Gestão de Vendas,
                Automação de Marketing, Help Desk e muito mais
              </S.HWCText>
            </S.HWCard>
          </S.HWLayout>
        </S.HWContent>
      </S.HowWorks>
    </>
  )
}
