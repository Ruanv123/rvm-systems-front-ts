import { Arrow, Content, Trigger } from '@radix-ui/react-popover'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'
import { typography } from '../../styles/tokens/typography'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
  border-bottom: 1px solid ${colors.gray[180]};
  background-color: ${colors.white};
`

export const LContainer = styled.div``

export const RContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const AvatarLabel = styled.p``

export const Logo = styled.img`
  width: 180px;
  cursor: pointer;
`

export const LinkA = styled(Link)``

export const PopTrigger = styled(Trigger)`
  background-color: transparent !important;
`

export const PopContent = styled(Content)`
  background-color: ${colors.white};
  border-radius: 6px;
  border: 1px solid ${colors.gray[180]};
  padding: 0 24px;
`

export const PopArrow = styled(Arrow)`
  fill: ${colors.gray[180]};
`

export const MenuRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 20px 0px;

  svg {
    width: 30px;
    height: auto !important;
  }
`

export const MenuText = styled(Link)`
  font-size: ${typography.button};
  color: ${colors.gray[700]};
  font-weight: 500;
  line-height: normal;
`

export const Line = styled.div`
  height: 1px;
  background-color: ${colors.gray[180]};
  width: 100%;
`

export const Notification = styled.div`
  margin: 20px 0px;
  color: ${colors.green[500]};
`
