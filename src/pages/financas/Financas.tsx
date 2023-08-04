import { BiLineChart, BiLineChartDown, BiSitemap } from 'react-icons/bi'
import { colors } from '../../styles/tokens/colors'
import * as S from './styles'

export default function Financas() {
  return (
    <>
      <S.Container>
        <S.Titulo>Finanças</S.Titulo>
      </S.Container>
      <S.Content>
        <S.Container2>
          <S.Card
            style={{
              backgroundColor: `${colors.blue[500]}`,
              color: `${colors.purple[100]}`,
            }}
          >
            <BiLineChart size={35} />
            <S.CardLink to="/dashboard/financas/contas-a-pagar">
              Contas A Pagar
            </S.CardLink>
          </S.Card>
          <S.Card
            style={{
              backgroundColor: `${colors.green[500]}`,
              color: `${colors.purple[100]}`,
            }}
          >
            <BiLineChartDown size={35} />
            <S.CardLink to="/dashboard/financas/contas-a-receber">
              Contas A Receber
            </S.CardLink>
          </S.Card>
          <S.Card
            style={{
              backgroundColor: `${colors.purple[500]}`,
              color: `${colors.purple[100]}`,
            }}
          >
            <BiSitemap size={35} />
            <S.CardLink to="/dashboard/financas/controle-de-caixa">
              Controle de Caixa
            </S.CardLink>
          </S.Card>
        </S.Container2>
      </S.Content>
      <S.Content>
        <S.Flex>
          <S.Wrapper>
            <S.SaldoGeral>
              <h1>Saldo Geral</h1>
              <p>$1599,99</p>
              <hr />
              <p>Gráfico</p>
              <hr />
              <p>div banco</p>
              <hr />
              <p>div banco</p>
            </S.SaldoGeral>
          </S.Wrapper>
          <S.Wrapper>
            <S.FluxoCaixa>
              <h1>Fluxo de caixa</h1>
              <p>grafico</p>
              <p>meses</p>
            </S.FluxoCaixa>
            <S.TopDepesas>
              <h1>Top Despesas</h1>
            </S.TopDepesas>
          </S.Wrapper>
        </S.Flex>
      </S.Content>
    </>
  )
}
