import styled from 'styled-components';

export const Contents = styled.div`
  position: relative;
  top: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const Desc = styled.div`
  position: absolute;
  top: 300px;
  text-align: center;
  background: #f6f6f6;
  width: 40%;
  height: auto;
`

export const Li = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  width: 300px;
  height: 60px;
  background: #f0f0f0;
  line-height: 60px;

  &.focused {
    background: gray;
    font-weight: bold;
  }
`

export const H3 = styled.h3`
  font-size: 2rem;
`

export const P = styled.p`
  font-size: 1rem;
`

export const PlayButton = styled.button``

export const Inpo = styled.div`
  position: absolute;
  top: 120px;
  text-align: center;
  background: #f6f6f6;
  width: 40%;
  height: auto;
`

export const ComposerName2 = styled.p``

export const ComposerInpo = styled.p``

export const ComposerImg = styled.img``

export const ComposerName = styled.p``
