import styled from 'styled-components'

export const MyPageTab = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: row;
  color: #888888;
  text-align: center;
  line-height: 45px;
`
export const MyPageTabItem = styled.div`
  width: 129px;
  height: 45px;
  background-color: #e7e8e6;
  border-right: 1px solid #535645;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #4b372e;
    color: #ffffff;
  }
  &.focused{
    background-color: #4b372e;
    color: #ffffff;
  }
  &:last-child{
    border-right: none;
  }
`
export const MyPageScrapTab = styled.div`
  width: 129px;
  height: 45px;
  background-color: #4b372e;
  color: #ffffff;
  border-right: 1px solid #535645;
  cursor: pointer;
  text-align: center;
`
export const MyPageCommentTab = styled.div`
  width: 129px;
  height: 45px;
  background-color: #4b372e;
  color: #ffffff;
  border-right: 1px solid #535645;
  cursor: pointer;
  text-align: center;
`

export const MyPageLikeTab = styled.div`
  width: 129px;
  height: 45px;
  background-color: #4b372e;
  color: #ffffff;
  border-right: 1px solid #535645;
  cursor: pointer;
  text-align: center;
`
export const MyPageEditTab = styled.div`
  width: 129px;
  height: 45px;
  background-color: #4b372e;
  color: #ffffff;
  border-right: 1px solid #535645;
  cursor: pointer;
  text-align: center;
`
export const MyPageTabItemLast = styled.div`
  width: 129px;
  height: 45px;
  background-color: #e7e8e6;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #4b372e;
    color: #ffffff;
  }
`
export const MyPageDeleteTab = styled.div`
  width: 129px;
  height: 45px;
  background-color: #4b372e;
  color: #ffffff;
  border-right: 1px solid #535645;
  cursor: pointer;
  text-align: center;
`
export const MyPageBottomDiv = styled.div`
  height: 20rem;
  background: #f5f5f5;

`

export const MyPageContentsContainer = styled.div`
  width: 1200px;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`
export const ExternalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const MyPageEditContainer = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fefefe;
  position: relative;
`
export const MyPageEditBtn = styled.button`
  width: 675px;
  height: 60px;
  background-color: #4b372e;
  color: white;
  cursor: pointer;
`
export const EditDiv  = styled.div`
  position: absolute;
  background-color: rgba(217, 217, 217, 0.5);
  width: 192px;
  height: 192px;
  left: 204px;
  border-radius: 50%;
  text-align: center;
  line-height: 192px;
  font-size: 64px;
  color:#ffffff;
  cursor: pointer;
`
export const MyPageEditImg = styled.img`
  width: 192px;
  height: 192px;
  background-color: rgba(217, 217, 217, 0.5);
  border-radius: 50%;
  cursor: pointer;
`
export const MyPageInputContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`
export const MyPageInputLabel = styled.label`
  display: block;
  width: 69px;
  height: 27px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  margin-left: 20px;
`

export const MyPageInput = styled.input`
  width: 366px;
  height: 45px;
  background-color: #f4f4f4;
  border: 1px solid #888888;
  margin-left: 20px;
`
export const MyPageImgBtnWrap = styled.div`
  margin-top: 20px;
`
export const MyPageInputBtn = styled.button`
  width: 144px;
  height: 45px;
  background-color: #8b7d76;
  border: 1px solid #8b7d76;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
`
export const MyPageEditBtnTwo = styled.button`
  width: 144px;
  height: 45px;
  background-color: #8b7d76;
  border: 1px solid #8b7d76;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  margin-left: 20px;
  cursor: pointer;

`
export const MyPageImgEditInput = styled.input`
  display: none;
`

export const MyPageDeleteDivOne = styled.div`
  width: 1302px;
  text-align: center;
`
export const POne = styled.p`
  font-family: var(--font-NotoSerifKR);
  font-weight: 400;
  font-size: 25px;
  color: #000000;
`

export const PTwo = styled.p`
  font-family: var(--font-NotoSerifKR);
  font-weight: 400;
  font-size: 16px;
  color: #888888;
`
export const PThree = styled.p`
  font-family: var(--font-NotoSerifKR);
  font-weight: 400;
  font-size: 20px;
  color: #000000;
`
export const MyPageDeleteDivTwo = styled.div`
  width: 1302px;
  height: 300px;
  background-color: #ffffff;
  text-align: center;
`
export const MyPageEmailDiv = styled.div`
  width: 100%;
  margin-bottom: 25px;
`
export const MyPageDeleteInput = styled.input`
  width: 366px;
  height: 45px;
  background-color: #f4f4f4;
  border: 1px solid #888888;
  padding-left: 10px;
`
export const MyPageDeleteBtnDiv = styled.div`
  margin-top: 50px;

`
export const MyPageEmailBtn = styled.button`
  width: 144px;
  height: 45px;
  background-color: #4b372e;
  border: 1px solid #4b372e;
  cursor: pointer;
  color: #ffffff;
  margin-left: 25px;

`

export const MyPageDeleteBtn = styled.button`
  width: 144px;
  height: 45px;
  background-color: #4b372e;
  border: 1px solid #4b372e;
  cursor: pointer;
  color: #ffffff;
`
export const MyPageDeleteBtnDisabled = styled.button`
    width: 144px;
  height: 45px;
  background-color: gray;
  border: none;
  color: #ffffff;

`
export const MyPageDoneDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const TextDiv = styled.div`
  width: 500px;
  height: 500px;
  text-align: center;
  margin-top: 10%;

`

export const PDone = styled.div`
  font-family: var(--font-NotoSerifKR);
  font-style: normal;
  font-size: 32px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 5%;

`
export const PThin = styled.div`
  font-family: var(--font-NotoSerifKR);
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  color: #888888;
`
export const DoneBtn = styled.button`
  width: 144px;
  height: 45px;
  background-color: #4b372e;
  border: 1px solid #4b372e;
  color: white;
  margin-top: 5%;
  cursor: pointer;
  
`