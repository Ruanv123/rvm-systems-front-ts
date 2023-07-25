import { ReactNode } from 'react'
import * as S from './styles'
import { MdOutlineClear } from 'react-icons/md'

interface IModalProps {
  onClose: () => void
  children: ReactNode
}

export const ModalF = ({ onClose, children }: IModalProps) => {
  return (
    <>
      <S.Wrapper>
        <S.ModalContent>
          <div>
            <S.CloseBtn onClick={onClose}>
              <MdOutlineClear />
            </S.CloseBtn>
          </div>
          <S.ModalContainer>{children}</S.ModalContainer>
        </S.ModalContent>
      </S.Wrapper>
    </>
  )
}
