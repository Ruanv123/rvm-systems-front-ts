import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'

export const HowWorks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const HWImg = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`

export const HWContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    padding: 20px;
  }
`

export const HWTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -1.2px;
  margin-top: 38px;
  color: ${colors.gray[900]};
`

export const HWLayout = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 48px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

export const HWCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const HWBall = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${colors.blue[500]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 20px;
  text-align: center;
  margin-bottom: 16px;
`

export const HWCTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: ${colors.gray[900]};
`
export const HWCText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${colors.gray[500]};
  max-width: 261px;
`
