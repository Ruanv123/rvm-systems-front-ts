import * as S from './styles'
import { LuMailOpen } from 'react-icons/lu'
import { MdOutlinePhoneInTalk, MdOutlineLocationOn } from 'react-icons/md'

export const Contact = () => {
  return (
    <>
      <S.Contact>
        <S.ContactCard>
          <S.CCIcon>
            <LuMailOpen size={32} />
          </S.CCIcon>
          <S.CCTitle>Email</S.CCTitle>
          <S.CCText>Lorem ipsum dolor sit amet</S.CCText>
          <S.CCLink to="/">rvmsystems.contato@gmail.com</S.CCLink>
        </S.ContactCard>
        <S.ContactCard>
          <S.CCIcon>
            <MdOutlinePhoneInTalk size={32} />
          </S.CCIcon>
          <S.CCTitle>Telefone</S.CCTitle>
          <S.CCText>Lorem ipsum dolor sit amet</S.CCText>
          <S.CCLink to="/">(31) 98644-1470</S.CCLink>
        </S.ContactCard>

        <S.ContactCard>
          <S.CCIcon>
            <MdOutlineLocationOn size={32} />
          </S.CCIcon>
          <S.CCTitle>Endereço</S.CCTitle>
          <S.CCText>Lorem ipsum dolor sit amet</S.CCText>
          <S.CCLink to="/">Ainda não temos</S.CCLink>
        </S.ContactCard>
      </S.Contact>
    </>
  )
}
