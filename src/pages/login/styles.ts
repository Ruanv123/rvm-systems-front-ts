import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'
import { Link } from 'react-router-dom'

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
`

export const FormTitle = styled.h1`
  font-weight: 600;
  color: ${colors.gray[900]};
`

export const FormControl = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* margin-bottom: 13px; */
  margin-top: 25px;
`

export const LinkBack = styled(Link)`
  color: ${colors.blue[550]};
`

export const ResetPass = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const Span = styled.div`
  color: ${colors.black};
  margin-top: 8px;
  text-align: center;
`

export const Hr = styled.div`
  background-color: transparent;
  color: transparent;
`

export const Voltar = styled(Link)`
  color: #333f51;
  position: absolute;
  top: 15px;
  left: 15px;
`
