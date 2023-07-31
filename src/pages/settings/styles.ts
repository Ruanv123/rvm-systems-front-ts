import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'

export const Title = styled.h1`
  color: ${colors.gray[800]};
`

export const Text = styled.p`
  font-size: 16px;
  color: ${colors.gray[500]};
`
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
  gap: 50px;
`

export const Card = styled.div`
  border: 1px solid ${colors.gray[180]};
  max-width: 280px;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;

  padding: 20px;
`

export const EditForm = styled.form`
  border: 1px solid ${colors.gray[180]};
  max-width: 1300px;
  width: 100%;
  border-radius: 8px;
  padding: 50px;
`

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 32px;
`

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.gray[180]};
  margin: 15px 0px;
`

export const TextN = styled.p`
  margin: 7px 0px;
  text-align: center;
  color: ${colors.gray[400]};
`
export const TextCard = styled.p`
  margin: 7px 0px;
  color: ${colors.gray[600]};
  font-weight: 500;
`

export const TextTitle = styled.p`
  font-size: 24px;
  margin-top: 15px;
  font-weight: 600;
  color: ${colors.gray[800]};
`
export const Spacing = styled.div`
  margin: 10px 0px;
`
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`
