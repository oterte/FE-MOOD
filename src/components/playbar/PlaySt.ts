import styled from 'styled-components'

interface Props {
  width: string
}
export const AudioWrap = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fafafa;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  position: fixed;
  bottom: 0px;
  @media screen and(max-width: 1260px) {
    width: 700px;
  }
`
export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #d9d9d9;
`
export const Dealt = styled.div<Props>`
  background-color: #4b372e;
  width: ${(props) => props.width + '%'};
  height: 5px;
  border-radius: 5px;
`

export const AudioContain = styled.div`
  width: 65%;
  min-width: 700px;
  height: 120px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PlayExplain = styled.div`
  width: 30%;
`
export const PlayTitle = styled.p`
  white-space: nowrap;
  overflow: hidden;
  font-size: 20px;
`
export const PlayImgContain = styled.div`
  width: 30%;
  height: 70px;
  margin: auto;
`
export const PlayImg = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
  margin: auto;
`
