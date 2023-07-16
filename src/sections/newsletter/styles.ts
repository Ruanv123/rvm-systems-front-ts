import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'

export const Newsletter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 88px;
`

export const NewsTitle = styled.h1`
  font-size: 36px;
  color: ${colors.gray[900]};
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -0.72px;
`

export const NewsText = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: ${colors.gray[500]};
  max-width: 480px;
`

export const NewsButtons = styled.div`
  margin-top: 88px;
  display: flex;
  align-items: center;
  gap: 24px;
`
export const NewsInput = styled.input`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid ${colors.gray[200]};
  outline: none;
  max-width: 292px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px ${colors.blue[400]};
  }
`

export const NewsButton = styled.button`
  padding: 12px 18px;
  border-radius: 6px;
  background-color: ${colors.blue[500]};
  color: ${colors.white};
  max-width: 154px;
  width: 100%;
`
