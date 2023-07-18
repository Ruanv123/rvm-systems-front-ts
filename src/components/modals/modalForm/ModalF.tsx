import { ReactNode } from 'react'
import * as S from './styles'
import { MdOutlineClear } from 'react-icons/md'

interface ModalProps {
  onClose: () => void
  children: ReactNode
}

export const ModalF = ({ onClose, children }: ModalProps) => {
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
