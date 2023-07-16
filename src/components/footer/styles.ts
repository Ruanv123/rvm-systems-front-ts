import { styled } from 'styled-components'
import { colors } from '../../styles/tokens/colors'
import { Link } from 'react-router-dom'
import { typography } from '../../styles/tokens/typography'

export const Footer = styled.footer`
  width: 100%;
  background-color: ${colors.white};
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 88px;

  img {
    width: 180px;
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 32px;
  margin-bottom: 44px;
  gap: 10px 48px;
  max-width: 900px;
  justify-content: center;
`
export const MenuItem = styled.li``

export const MenuItemLink = styled(Link)`
  font-size: ${typography.text};
  font-weight: 500;
  line-height: 30px;
  color: ${colors.gray[500]};
`

export const Text = styled.p`
  color: ${colors.gray[400]};
  font-size: ${typography.button};
  font-weight: 500;
  line-height: 30px;
  margin-top: 44px;
  margin-bottom: 84px;
`

export const HR = styled.hr`
  border-width: 0;
  height: 1px;
  border-top-width: 1px;
  border: 1px solid;
  border-color: ${colors.gray[100]};
`
