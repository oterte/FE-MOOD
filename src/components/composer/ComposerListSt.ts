import styled from 'styled-components'

export const Contents = styled.div`
  position: relative;
  top: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .submenu {
    display: flex;
    justify-content: center;
    font-size: 1.4rem;
    width: 300px;
    height: 60px;
    background: #f0f0f0;
    line-height: 60px;
  }

  .focused {
    background: gray;
    font-weight: bold;
  }

  & div.desc {
  }
`

export const Desc = styled.div`
  position: absolute;
  top: 100px;
  text-align: center;
  background: #f6f6f6;
  width: 40%;
  height: auto;
`
export const Con1 = styled.div``

export const Li = styled.li`
  list-style: none;
`

export const H3 = styled.h3`
  font-size: 2rem;
`
export const P = styled.p`
  font-size: 1rem;
`
