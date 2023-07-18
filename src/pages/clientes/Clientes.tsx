import { Button } from '../../components/button/Button'
import * as S from './styles'

export const Clientes = () => {
  return (
    <>
      <S.Container>
        <S.Titulo>Clientes</S.Titulo>
        <Button type="submit" size={150} text="Add Cliente +" />
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
        <tbody>
          <S.TableRow>
            <S.TableCell>
              <input type="checkbox" />
            </S.TableCell>
            <S.TableCell>1</S.TableCell>
            <S.TableCell>Ruan Victor</S.TableCell>
            <S.TableCell>ruanvictormr@gmail.com</S.TableCell>
            <S.TableCell>deletar</S.TableCell>
          </S.TableRow>
        </tbody>
      </S.Table>
    </>
  )
}
