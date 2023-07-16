import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'
import { typography } from '../../styles/tokens/typography'

export const LogoClouds = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 116px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0) 0%,
    #fff 100%
  );

  @media (max-width: 768px) {
    margin-top: 32px;
  }
`

export const LgTitle = styled.h1`
  margin-top: 88px;
  font-size: ${typography.text};
  font-weight: 500;
  color: ${colors.gray[300]};
`

export const LgImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1100px;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 88px;

  img {
    width: 170px;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`
