import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.grayBg};
`
export const Container = styled.div`
  background-color: ${colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${colors.gray[180]};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 2px -1px rgba(27, 36, 44, 0.04),
    0px 2px 8px -1px rgba(27, 36, 44, 0.08);
`

export const Label = styled.label`
  font-size: 14px;
  margin-top: 12px;
`

export const Form = styled.form`
  padding: 32px;
  max-width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

export const FormTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${colors.gray[900]};
  margin-top: 5px;
`

export const FormText = styled.h3`
  font-weight: 500;
  margin-top: 15px;
  font-size: 14px;
  color: ${colors.gray[500]};
  margin: 10px 0;
  padding: 5px;
`
