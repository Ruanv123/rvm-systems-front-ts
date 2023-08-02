import { TrashIcon } from '@heroicons/react/24/outline'
import { Button } from '../../components/button/Button'
import { colors } from '../../styles/tokens/colors'
import * as S from './styles'

export default function ContasAReceber() {
  return (
    <>
      <S.Voltar to="/dashboard/financas">Voltar</S.Voltar>
      <S.Container>
        <S.Titulo>Contas A Receber</S.Titulo>
        <p>Falta fazer a parte da api</p>
        <Button
          type="submit"
          size={200}
          text="Novo Recebimento +"
          color={`${colors.blue[500]}`}
        />
      </S.Container>
      <S.Table>
        <thead>
          <S.TableRow>
            <S.TableHCell>
              <input type="checkbox" />
            </S.TableHCell>
            <S.TableHCell>Data</S.TableHCell>
            <S.TableHCell>Cliente</S.TableHCell>
            <S.TableHCell>N. do Doc</S.TableHCell>
            <S.TableHCell>N. do Boleto</S.TableHCell>
            <S.TableHCell>Valor</S.TableHCell>
            <S.TableHCell>Data Vencimento</S.TableHCell>
            <S.TableHCell>Data Recebimento</S.TableHCell>
            <S.TableHCell>Valor Recebido</S.TableHCell>
            <S.TableHCell>Ação</S.TableHCell>
          </S.TableRow>
        </thead>
        <tbody>
          <S.TableRow>
            <S.TableCell>
              <input type="checkbox" style={{ cursor: 'pointer' }} />
            </S.TableCell>
            <S.TableCell>25/07/23</S.TableCell>
            <S.TableCell>Specialized</S.TableCell>
            <S.TableCell>76321678</S.TableCell>
            <S.TableCell>35162</S.TableCell>
            <S.TableCell>R$ 16.959,00</S.TableCell>
            <S.TableCell>25/07/23</S.TableCell>
            <S.TableCell>22/07/23</S.TableCell>
            <S.TableCell>R$ 14.959,00</S.TableCell>
            <S.TableCell>
              <S.Trashbtn>
                <TrashIcon style={{ width: '23px' }} />
              </S.Trashbtn>
            </S.TableCell>
          </S.TableRow>
        </tbody>
      </S.Table>
    </>
  )
}
