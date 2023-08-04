import { XMarkIcon } from '@heroicons/react/24/outline'
import { ReactNode } from 'react'
import * as S from './styles'

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
              <XMarkIcon />
            </S.CloseBtn>
          </div>
          <S.ModalContainer>{children}</S.ModalContainer>
        </S.ModalContent>
      </S.Wrapper>
    </>
  )
}
