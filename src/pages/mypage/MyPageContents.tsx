import { useNavigate } from 'react-router';

import { MyPageContentsContainer, MyPageTab, MyPageTabItem } from './mypagecontentsSC'


function MyPageContents() {
   const navigate = useNavigate()
  return (
    <>
      <MyPageTab>
        <MyPageTabItem onClick={() => {navigate("/mypageScrap")}}>스크랩 음악</MyPageTabItem>
        <MyPageTabItem onClick={() => {navigate("/mypageLike")}}>남긴 댓글</MyPageTabItem>
        <MyPageTabItem onClick={() => {navigate("/mypageScrap")}}>좋아요</MyPageTabItem>
        <MyPageTabItem onClick={() => {navigate("/mypageScrap")}}>감정 히스토리</MyPageTabItem>
        <MyPageTabItem>프로필 사진 변경</MyPageTabItem>
        <MyPageTabItem>회원 탈퇴</MyPageTabItem>
      </MyPageTab>
      <MyPageContentsContainer>

      </MyPageContentsContainer>
    </>
  )
}

export default MyPageContents
