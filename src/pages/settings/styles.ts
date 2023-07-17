import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'

export const Title = styled.h1`
  color: ${colors.gray[800]};
`
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
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

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.gray[180]};
  margin: 30px 0px;
`
