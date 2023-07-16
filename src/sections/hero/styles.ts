import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'

export const Head = styled.div`
  display: flex;
  align-items: center;
  margin-top: 84px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 44px;
  }
`

export const HContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    padding: 20px;
  }
`

export const HTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -1.2px;
  margin-top: 38px;
  color: ${colors.gray[900]};
`
export const HText = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: ${colors.gray[500]};
  margin-top: 24px;
`
export const HBtnDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
`
export const HBtnReq = styled.button`
  padding: 16px 28px;
  box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
  font-size: 18px;
  border-radius: 6px;
  background-color: ${colors.blue[500]};
  color: ${colors.white};

  &:hover {
    opacity: 0.7;
  }
`

export const HBtnSign = styled.button`
  border: 1px solid ${colors.gray[200]};
  border-radius: 6px;
  padding: 15px 28px;
  box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
  font-size: 18px;
  background-color: transparent;

  &:hover {
    opacity: 0.7;
  }
`
export const HImg = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`
