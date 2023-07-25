import { BsTrash } from 'react-icons/bs'
import { Button } from '../../components/button/Button.tsx'
import { colors } from '../../styles/tokens/colors.ts'
import * as S from './styles.ts'

export default function ControleDeCaixa() {
  return (
    <>
      <S.Voltar to="/dashboard/financas">Voltar</S.Voltar>
      <S.Container>
        <S.Titulo>Controle de caixa</S.Titulo>
        <p>Falta fazer a parte da api</p>
        <S.DivFlex>
          <Button
            type="button"
            size={100}
            text="Retirada"
            color={`${colors.blue[500]}`}
          />
          <Button
            type="button"
            size={100}
            text="Depósito"
            color={`${colors.blue[500]}`}
          />
        </S.DivFlex>
      </S.Container>
      <S.Table>
        <thead>
          <S.TableRow>
            <S.TableHCell>
              <input type="checkbox" />
            </S.TableHCell>
            <S.TableHCell>Dia</S.TableHCell>
            <S.TableHCell>Histórico</S.TableHCell>
            <S.TableHCell>Entrada</S.TableHCell>
            <S.TableHCell>Saída</S.TableHCell>
            <S.TableHCell>Valor</S.TableHCell>
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
            <S.TableCell>35162</S.TableCell>
            <S.TableCell>
              <S.Trashbtn>
                <BsTrash size={23} />
              </S.Trashbtn>
            </S.TableCell>
          </S.TableRow>
        </tbody>
      </S.Table>
    </>
  )
}
