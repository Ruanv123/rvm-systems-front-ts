import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'

export const Cta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 89px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CtaImg = styled.img`
  max-width: 648px;
  width: 100%;
  height: 100%;

  @media (max-width: 576px) {
    width: 90%;
    height: 90%;
  }
`

export const CtaContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    padding: 20px;
  }
`

export const CtaTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -1.2px;
  margin-top: 38px;
  color: ${colors.gray[900]};
  max-width: 456px;
`

export const CtaTextContainer = styled.div`
  margin-top: 32px;
`

export const CtaCheckText = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${colors.gray[500]};
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
`

export const CtaCheckContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 30px;
  box-shadow: 0px 1.25px 2.5px 0px rgba(0, 0, 0, 0.05);
  background-color: ${colors.blue[500]};
  border: 2px solid ${colors.blue[600]};
`

export const CtaBtnContainer = styled.div`
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
