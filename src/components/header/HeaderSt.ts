import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #bcbeb3;
  justify-content: space-between;
`

export const Left = styled.div`
  flex-basis: calc(100% / 3);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Center = styled.div`
  flex-basis: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Right = styled.div`
  flex-basis: calc(100% / 3);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const H1 = styled.h1`
  color: black;
  font-family: var(--font-googleGugi);
`
