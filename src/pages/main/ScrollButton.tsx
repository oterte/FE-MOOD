import React from 'react'

interface ScrollButtonProps {
  text: string
  sectionId: string
  selected: boolean
  onClick: (sectionId: string) => void
  ButtonComponent: any
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  text,
  sectionId,
  selected,
  onClick,
  ButtonComponent,
}) => (
  <ButtonComponent onClick={() => onClick(sectionId)} selected={selected}>
    <p style={{ color: selected ? '#f2b441' : 'white' }}>{text}</p>
  </ButtonComponent>
)

export default ScrollButton
