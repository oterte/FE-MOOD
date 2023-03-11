import styled from 'styled-components'

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
`

export const Info = styled.div`
  width: 70%;
  height: 200px;
  margin: 0 auto;
`

export const ComposerImg = styled.img`
  position: absolute;
  top: 120px;
  left: 25%;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: #555555;
`

export const ComposerName = styled.h3`
  position: absolute;
  top: 200px;
  left: 38%;
`

export const MusicDesc = styled.p`
  position: absolute;
  top: 240px;
  left: 38%;
`

export const PlayBtn = styled.button`
  position: absolute;
  top: 220px;
  right: 38%;
`

export const CommentBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 180px;
  transform: translateX(-50%);
  width: 50%;
  height: 570px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
`

export const CommentInput = styled.input`
  position: absolute;
  left: 9%;
  bottom: 20px;
  width: 60%;
  height: 50px;
  padding-left: 1.2rem;
`

export const CommentBtn = styled.button`
  position: absolute;
  right: 9%;
  bottom: 20px;
  width: 200px;
  height: 50px;
  text-align: center;
`
