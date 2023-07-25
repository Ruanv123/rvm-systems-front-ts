import { Button } from '../../components/button/Button'
import { colors } from '../../styles/tokens/colors'
import * as S from './styles'

export default function Clientes() {
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
            <S.TableHCell>Telefone</S.TableHCell>
            <S.TableHCell>Descrição</S.TableHCell>
            <S.TableHCell>Cpf</S.TableHCell>
            <S.TableHCell>CreatedAt</S.TableHCell>
            <S.TableHCell>UpdatedAt</S.TableHCell>
            <S.TableHCell>Ação</S.TableHCell>
          </S.TableRow>
        </thead>
        <tbody>
          <S.TableRow>
            <S.TableCell>
              <input type="checkbox" style={{ cursor: 'pointer' }} />
            </S.TableCell>
            <S.TableCell>1</S.TableCell>
            <S.TableCell>Ruan Victor</S.TableCell>
            <S.TableCell>ruanvictormr@gmail.com</S.TableCell>
            <S.TableCell>31 986441470</S.TableCell>
            <S.TableCell>Desc</S.TableCell>
            <S.TableCell>CPF</S.TableCell>
            <S.TableCell>CreatedAt</S.TableCell>
            <S.TableCell>UpdatedAt</S.TableCell>
            <S.TableCell>
              {/*  <S.Trashbtn onClick={() => handleDeleteUser(user.id)}>
                <BsTrash size={23} />
              </S.Trashbtn> */}
              deletar
            </S.TableCell>
          </S.TableRow>
        </tbody>
      </S.Table>
    </>
  )
}
