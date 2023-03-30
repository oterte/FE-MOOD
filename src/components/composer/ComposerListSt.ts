import styled from 'styled-components'

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Ment = styled.p`
  font-family: var(--font-NotoSerifKR);
  font-size: 1.2rem;
  font-weight: bold;
  margin: 80px;
`

export const Contents = styled.div`
  position: relative;
  width: 1180px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #8b7d76;
  justify-content: flex-start;
`

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 230px;
  height: 45px;
  background: #e7e8e6;
  line-height: 60px;
  font-family: var(--font-NotoSansKR-Regular);
  color: #666666;
  cursor: pointer;
  border-left: 1px solid #8b7d76;
  text-align: left;

  &:first-child {
    border-left: none;
  }

  &.focused {
    background: #4b372e;
    font-weight: bold;
    color: white;
  }
`

export const Desc = styled.div`
  position: absolute;
  top: 750px;
  text-align: center;
  background: #FEFEFE;
  width: 1180px;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    font-size: 1rem;
    padding:1rem;

  &:first-child {
    background-color: #4B372E;
    color: white;
  }
    
  & > div:last-child {
    border-bottom: none;
  }
`

export const Inpo = styled.div`
  position: absolute;
  left: 50%;
  top: 120px;
  transform: translateX(-50%);
  text-align: center;
  background: #f6f6f6;
`

export const ComposerImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`

export const ComposerName = styled.p`
  font-family: var(--font-googleGugi);
  font-size: 1.7rem;
`
export const ComposerNameKo = styled.p`
  font-family: var(--font-NotoSerifKR);
  font-size: 1.4rem;
`

export const Describe = styled.p`
  font-size: 1rem;
  line-height: 2rem;
`

export const H3 = styled.h3`
  font-size: 1rem;
`

export const P = styled.p`
  font-size: 1rem;
`

export const PlayButton = styled.button``
