import { styled } from 'styled-components'
import { colors } from '../../../styles/tokens/colors'

export const Wrapper = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalContent = styled.div`
  user-select: none;
  background-color: white;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid ${colors.gray[150]};
  box-shadow: 0px 8px 5px 0px rgba(0, 0, 0, 0.08),
    0px 20px 13px 0px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: row-reverse;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  font-size: 25px;
  color: ${colors.gray[800]};
`
export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  gap: 15px;
  margin: 20px;
`
