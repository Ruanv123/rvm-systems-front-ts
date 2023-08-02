import { TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Button } from '../../components/button/Button.tsx'
import { colors } from '../../styles/tokens/colors.ts'
import * as S from './styles.ts'

export default function ControleDeCaixa() {
  const [checked, setChecked] = useState<boolean>(false)
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
              <input
                type="checkbox"
                checked={checked}
                onClick={(e) => setChecked(e.target.value)}
              />
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
              <input
                type="checkbox"
                style={{ cursor: 'pointer' }}
                checked={checked}
                onClick={(e) => setChecked(e.target.value)}
              />
            </S.TableCell>
            <S.TableCell>25/07/23</S.TableCell>
            <S.TableCell>Specialized</S.TableCell>
            <S.TableCell>76321678</S.TableCell>
            <S.TableCell>35162</S.TableCell>
            <S.TableCell>35162</S.TableCell>
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
