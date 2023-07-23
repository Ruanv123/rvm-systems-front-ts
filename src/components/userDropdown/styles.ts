import { styled } from 'styled-components'

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const AvatarImage = styled.img`
  cursor: pointer;
`

export const DropdownContent = styled.div`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 8px;
  z-index: 1;
`

export const OptionItem = styled.a`
  display: block;
  padding: 8px;
  text-decoration: none;
  color: #333;

  &:hover {
    background-color: #f1f1f1;
  }
`
