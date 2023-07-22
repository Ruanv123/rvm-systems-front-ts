import { Button } from '../../components/button/Button'
import { colors } from '../../styles/tokens/colors'
import * as S from './styles'

export const Clientes = () => {
  return (
    <>
      <S.Container>
        <S.Titulo>Clientes</S.Titulo>
        <Button
          type="submit"
          size={150}
          text="Add Cliente +"
          color={`${colors.blue[500]}`}
        />
      </S.Container>
      <S.Table>
        <thead>
          {/* <S.TableRow>
            <Input placeholder="pesquisar..." />
          </S.TableRow> */}
          <S.TableRow>
            <S.TableHCell>
              <input type="checkbox" />
            </S.TableHCell>
            <S.TableHCell>Id</S.TableHCell>
            <S.TableHCell>Nome</S.TableHCell>
            <S.TableHCell>Email</S.TableHCell>
            <S.TableHCell>Ação</S.TableHCell>
          </S.TableRow>
        </thead>
        <tbody></tbody>
      </S.Table>
    </>
  )
}
