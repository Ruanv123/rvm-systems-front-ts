import { useState } from 'react'
import * as S from './styles'
import { Avatar } from '../avatar/Avatar'

interface IDropOptions {
  options: string[]
}
export const UserDropdown: React.FC<IDropOptions> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <S.DropdownContainer>
        <button onClick={handleDropdownToggle}>
          <Avatar size={30} alt="a" />
        </button>
        {isOpen && (
          <S.DropdownContent>
            {options.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
          </S.DropdownContent>
        )}
      </S.DropdownContainer>
    </>
  )
}
