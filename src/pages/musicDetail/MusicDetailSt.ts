import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  margin-bottom: 15rem;
`

export const Ment = styled.p`
  font-family: var(--font-NotoSerifKR);
  font-size: 1.2rem;
  font-weight: bold;
  margin: 80px;
`

export const Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 420px;
  background: #4b372e;
  box-shadow: 8px 8px 5px -3px rgba(75, 55, 46, 0.27);
  -webkit-box-shadow: 8px 8px 5px -3px rgba(75, 55, 46, 0.27);
  -moz-box-shadow: 8px 8px 5px -3px rgba(75, 55, 46, 0.27);
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ComposerImg = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  margin-right: 3rem;
  cursor: pointer;
`
export const MusicTitle = styled.h3`
  font-size: 1.2rem;
  font-family: var(--font-NotoSerifKR);
  color: white;
  text-align: left;
  cursor: pointer;
`

export const MusicDesc = styled.p`
  color: white;
  font-size: 1.2rem;
  max-width: 800px;
  text-align: left;
  cursor: pointer;
`

export const ComposerName = styled.h3`
  color: white;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
`

export const PlayBtn = styled.button`
  width: 150px;
  height: 40px;
  cursor: pointer;
  background: none;
  color: white;
  border: 2px solid #d1d1d1;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 50px;
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
  background: #fefefe;
  border-bottom: 1px solid #e3e3e3;
`

export const Total = styled.p`
  margin-top: 50px;
  margin-right: 800px;
`

export const Addform = styled.form`
  position: relative;
`

export const AddCommentTextArea = styled.textarea.attrs({
  maxLength: 99,
})`
  width: 1000px;
  max-width: 900px;
  height: 150px;
  padding: 1.5rem;
  border: 2px solid #d9d9d9;
  resize: none;
  overflow: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
  line-height: 1.5rem;
  background: #fefefe;
  font-size: 1rem;
`

export const AddReCommentTextArea = styled.textarea.attrs({
  maxLength: 49,
})`
  width: 850px;
  max-width: 850px;
  height: 70px;
  resize: none;
  overflow: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
  line-height: 1.5rem;
  border: 2px solid #d9d9d9;
  padding: 1.5rem;
  margin: 1rem 1.55rem;
`

export const Characters = styled.p`
  position: absolute;
  bottom: 18px;
  right: 218px;
  color: gray;
`

export const ReCharacters = styled.p`
  position: absolute;
  bottom: 23px;
  right: 230px;
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
  height: auto;
  border: 1px solid #d9d9d9;
  background: white;
`

export const ReCommentBox = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding-left: 3rem;
  padding-bottom: 2rem;
  overflow: hidden;
  font-size: 1rem;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const CommentInput = styled.input.attrs({ maxLength: 100 })`
  position: absolute;
  top: 10px;
  left: 40px;
  width: 700px;
  height: 38px;
  margin: 10px;
  font-size: 1rem;
  border: 2px solid #dedede;
  padding-left: 0.8rem;
`

export const EditCommentInput = styled.div`
  position: absolute;
  top: 20px;
  left: 50px;
  border: none;
  background: none;
  font-size: 1rem;
  color: black;
  white-space: pre-line;
  width: 80%;
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
  bottom: 5px;
  left: 50px;
  border: none;
  background: none;
  font-size: 0.9rem;
  color: gray;
`

export const WriteDate = styled.p`
  position: absolute;
  bottom: 5px;
  left: 170px;
  border: none;
  background: none;
  font-size: 1rem;
  color: gray;
`
export const ReWriteDate = styled.p`
  position: absolute;
  bottom: 5px;
  left: 170px;
  border: none;
  background: none;
  font-size: 0.9rem;
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

export const ReCommentInput = styled.input.attrs({ maxLength: 50 })`
  width: 700px;
  height: 26px;
  font-size: 1rem;
  border: 2px solid #dedede;
  padding-left: 0.8rem;
`

export const AddReform = styled.form`
  position: relative;
`

export const ReCommentBtn = styled.button`
  position: absolute;
  bottom: 35px;
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

export const ReCommentsListWrap = styled.div`
  background: #f7f6f5;
  width: 95.8%;
  padding-left: 2.5rem;

  .icon {
    position: absolute;
    left: 20px;
  }
`
export const ReDeleteBtn = styled.button`
  position: absolute;
  top: 25px;
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
  top: 25px;
  right: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: none;
  margin-right: 3rem;
  background: none;
  color: white;
`
