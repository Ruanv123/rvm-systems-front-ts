import { Link } from 'react-router-dom'
import * as S from './styles'

export default function Financas() {
  return (
    <>
      <S.Container>
        <S.Titulo>Finanças</S.Titulo>
      </S.Container>
      <S.Content>
        <S.Container2>
          <S.LinkCard>
            <Link to="/dashboard/financas/contas-a-pagar">Contas A Pagar</Link>
          </S.LinkCard>
          <S.LinkCard>
            <Link to="/dashboard/financas/contas-a-receber">
              Contas A Pagar
            </Link>
          </S.LinkCard>
          <S.LinkCard>
            <Link to="/dashboard/financas/contas-a-receber">
              Contas A Pagar
            </Link>
          </S.LinkCard>
        </S.Container2>
      </S.Content>
    </>
  )
}
