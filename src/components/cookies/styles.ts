import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'
import { Link } from 'react-router-dom'

export const CookiesContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  overflow: hidden;
  position: fixed;
  z-index: 999;
  left: 50%;
  right: 50%;
  bottom: -50px;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 40px;
  border: 1px solid ${colors.gray[150]};
  box-shadow: 0px 16px 40px 0px rgba(112, 144, 176, 0.2);
  @media (max-width: 700px) {
    flex-direction: column;
    bottom: -100px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const TextContent = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${colors.gray[500]};
  max-width: 319px;

  @media (max-width: 576px) {
    font-size: 0.95rem;
  }
`

export const TextLink = styled(Link)`
  margin-top: 16px;
  color: ${colors.blue[500]};
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Button = styled.button`
  padding: 12px 18px;
  background-color: ${colors.blue[500]};
  color: ${colors.white};
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`

export const ButtonOutlined = styled.button`
  border: 1px solid ${colors.gray[200]};
  border-radius: 6px;
  color: ${colors.gray[800]};
  padding: 11px 18px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    margin-top: 20px;
  }
`
