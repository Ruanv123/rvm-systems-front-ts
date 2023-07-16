import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'
import { typography } from '../../styles/tokens/typography'

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 89px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FContent = styled.div``

export const FTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -0.72px;
  color: ${colors.gray[900]};
  max-width: 970px;
  margin: 0 auto;
  width: 100%;
  margin-top: 128px;
`
export const FTxt = styled.p`
  margin-top: 16px;
  color: ${colors.gray[500]};
  text-align: center;
  font-weight: 500;
  line-height: 30px;
  max-width: 1119px;
  font-size: 20px;
`

export const FLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

export const FCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const FCIcon = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${colors.blue[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  border-radius: 6px;
  margin-top: 32px;
`

export const FCTitle = styled.h4`
  max-width: 359px;
  width: 100%;
  margin-top: 24px;

  font-size: ${typography.h2};
  font-weight: 700;
  line-height: 32px;

  color: ${colors.gray[900]};
`

export const FCText = styled.p`
  max-width: 295px;
  width: 100%;

  font-size: ${typography.button};
  font-weight: 500;
  line-height: 24px;

  color: ${colors.gray[500]};
`
