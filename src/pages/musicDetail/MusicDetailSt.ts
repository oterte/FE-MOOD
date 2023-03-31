import styled from 'styled-components'

export const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Ment = styled.p`
  font-family: var(--font-NotoSerifKR);
  font-size: 1.2rem;
  font-weight: bold;
  margin: 80px;
`

export const Con = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  background: #4b372e;
`

export const ComposerImg = styled.img`
  position: absolute;
  top: 60px;
  left: 450px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
`
export const MusicTitle = styled.h3`
  position: absolute;
  top: 55px;
  left: 750px;
  font-size: 1.2rem;
  font-family: var(--font-NotoSerifKR);
  color: white;
`
export const MusicDesc = styled.p`
  position: absolute;
  top: 150px;
  left: 750px;
  color: white;
  font-size: 1.2rem;
  max-width: 800px;
`

export const ComposerName = styled.h3`
  position: absolute;
  top: 100px;
  left: 750px;
  color: white;
  font-size: 1rem;
`

export const CommentsWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CommentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  padding: 10px;
  border-bottom: 1px solid #d9d9d9;
  background: #fefefe;
`

export const PlayBtn = styled.button`
  position: absolute;
  top: 220px;
  right: 38%;
`
export const Total = styled.p`
  margin-top: 50px;
  margin-right: 800px;
`

export const Addform = styled.form`
  position: relative;
`

export const AddCommentTextArea = styled.textarea.attrs({
  maxLength: 300,
})`
  width: 1000px;
  max-width: 900px;
  height: 180px;
  padding: 1.5rem;
  border: 2px solid #d9d9d9;
  resize: none;
  overflow: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
  line-height: 1.5rem;
  background: #fefefe;
`

export const AddReCommentInput = styled.input.attrs({
  maxLength: 100,
})`
  width: 850px;
  height: 100px;
  border: 2px solid #d9d9d9;
  padding: 1.5rem;
  margin-top: 50px;
`
export const Characters = styled.p`
  position: absolute;
  bottom: 18px;
  right: 218px;
  color: gray;
`
export const ReCharacters = styled.p`
  position: absolute;
  bottom: 10px;
  right: 235px;
  color: gray;
`

export const CommentBtn = styled.button`
  position: absolute;
  bottom: 25px;
  right: 20px;
  width: 170px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  background: #4b372e;
  border: none;
  color: white;
`
export const Hr = styled.hr`
  position: absolute;
  bottom: 75px;
  width: 950px;
  opacity: 30%;
`

export const Border = styled.div`
  width: 950px;
  height: 840px;
  border: 2px solid #d9d9d9;
  background: white;
  margin: auto;
`

export const ReCommentBox = styled.div`
  position: relative;
  left: -330px;
  width: 1000px;
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;
  font-size: 1rem;
`

export const CommentInput = styled.input`
  position: absolute;
  top: 10px;
  left: 40px;
  width: 700px;
  height: 38px;
  margin: 10px;
  font-size: 1.18rem;
  border: 2px solid #dedede;
  padding-left: 0.8rem;
`

export const EditCommentInput = styled.input`
  position: absolute;
  top: 0;
  left: 50px;
  width: 700px;
  height: 80px;
  border: none;
  background: none;
  font-size: 1.2rem;
  color: black;
`
export const Nickname = styled.p`
  position: absolute;
  bottom: 5px;
  left: 50px;
  border: none;
  background: none;
  font-size: 1rem;
  color: gray;
`
export const ReNickname = styled.p`
  position: absolute;

  border: none;
  background: none;
  font-size: 10rem;
  color: gray;
`

export const WriteDate = styled.p`
  position: absolute;
  bottom: 5px;
  left: 150px;
  border: none;
  background: none;
  font-size: 1rem;
  color: gray;
`

export const DeleteBtn = styled.button`
  position: absolute;
  top: 20px;
  right: -35px;
  width: 50px;
  height: 40px;
  cursor: pointer;
  border: none;
  margin-right: 50px;
  background: none;
  color: white;
`
export const EditBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  width: 50px;
  height: 40px;
  cursor: pointer;
  border: none;
  margin-right: 50px;
  background: none;
  color: white;
`

export const ReAddComment = styled.input``

export const ReCommentInput = styled.input``
export const EditReCommentInput = styled.input``

export const AddReform = styled.form`
  position: relative;
`

export const ReCommentBtn = styled.button`
  position: absolute;
  bottom: 15px;
  right: 40px;
  width: 170px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  background: #4b372e;
  border: none;
  color: white;
`

export const ShowRepliesBtn = styled.button`
  position: absolute;
  bottom: 10px;
  right: -38px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  border: none;
  margin-right: 50px;
  background: none;
  color: #4b372e;
  font-weight: bold;
  font-size: 1rem;
`

export const ReCommentsListWrap = styled.button`
  background: #fafafa;
  border: none;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 10px;
`
export const ReDeleteBtn = styled.button`
  position: absolute;
  top: 3px;
  right: -35px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: none;
  margin-right: 50px;
  background: none;
  color: white;
`
export const ReEditBtn = styled.button`
  position: absolute;
  top: 3px;
  right: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: none;
  margin-right: 50px;
  background: none;
  color: white;
`
