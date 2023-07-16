import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'
import { Link } from 'react-router-dom'

export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 182px;
  gap: 42px;

  /* @media (max-width: 768px) {
    flex-direction: column;
  } */
`

export const ContactCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const CCIcon = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  color: ${colors.white};
  background-color: ${colors.blue[500]};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CCTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  line-height: 38px;
  text-align: center;
  color: ${colors.gray[900]};
  margin-top: 24px;
`

export const CCText = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: ${colors.gray[500]};
  text-align: center;
  margin-top: 8px;
`

export const CCLink = styled(Link)`
  color: ${colors.blue[500]};
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  margin-top: 18px;
`
