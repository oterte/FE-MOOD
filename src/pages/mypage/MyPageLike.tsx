import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { likedMusic, showProfile } from '../../api/mypage'
import Header from '../../components/header/Header'
import {
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
} from './mypageSC'
import {
  MyPageContentsContainer,
  MyPageLikeTab,
  MyPageTab,
  MyPageTabItem,
  MyPageTabItemLast,
} from './mypagecontentsSC'
import playBtn from '../../assets/icons/music_play_brown.png'
import downBtn from '../../assets/icons/down_brown.png'
import {
  MyPageBodyMiddle,
  MyPageBodyTop,
  MyPageLikeDescDiv,
  MyPageLikeLast,
  MyPageLikeMiddleContainer,
  MyPageLikeMiddleDiv,
  MyPageLikeMiddleFour,
  MyPageLikeMiddleOne,
  MyPageLikeMiddleThree,
  MyPageLikeMiddleTwo,
  MyPageLikeMoreBtn,
  MyPageLikeScrapBtn,
  MyPageLikeTopFirst,
  MyPageLikeTopRest,
  MyPageLikeTopSec,
} from './MyPageTable'
import { useNavigate } from 'react-router-dom'
type Like = {
  composer: string
  fileName: string
  musicId: string
  musicTitle: string
  musicUrl: string
}

function MyPageLike() {
  const navigate = useNavigate()
  const [isDesc, setIsDesc] = useState(false)
  // const {
  //   isLoading,
  //   isError,
  //   data: likedata,
  // } = useQuery<Like[]>(['like'], likedMusic)
  const { isLoading: profileLoading, data: profileData } = useQuery(
    ['profile'],
    showProfile
  )
  // if (isLoading) {
  //   return <h1>로딩중</h1>
  // }
  if (profileLoading) {
    return <h1>로딩중..</h1>
  }
  // if (isError) {
  //   return <h1>에러</h1>
  // }

  // console.log(likedata)
  // const onPlayMusicHandler = (musicUrl:string) => {
  //   const myAudio = new Audio()
  //   myAudio.src = musicUrl;
  //   myAudio.play()
  // }
  const onDescHandler = () => {
    if(isDesc === true){
      setIsDesc(false)
    }else{
      setIsDesc(true)
    }
  }
  console.log(isDesc)
  return (
    <>
      <Header />
      <MyPageProfileContainer>
        <MyPageProfileBodyContainer>
          <p>마이페이지</p>
          <MyPageProfileImgBox>
            <MyPageProfileImg src={profileData.profileUrl} />
          </MyPageProfileImgBox>
          <div>
            <p>{profileData.nickname} 님 환영합니다</p>
          </div>
          <div>
            <span>당신의 최근 감정 상태는 XXX 입니다.</span>
          </div>
          <div>
            <span>지금의 기분을 확인해보실래요?</span>
          </div>
        </MyPageProfileBodyContainer>
      </MyPageProfileContainer>
      <MyPageTab>
        <MyPageTabItem
          onClick={() => {
            navigate('/mypageComment')
          }}
        >
          남긴 댓글
        </MyPageTabItem>
        <MyPageLikeTab
          onClick={() => {
            navigate('/mypageLike')
          }}
        >
          좋아요
        </MyPageLikeTab>
        <MyPageTabItem
          onClick={() => {
            navigate('/mypageEditprofile')
          }}
        >
          프로필 사진 변경
        </MyPageTabItem>
        <MyPageTabItemLast
          onClick={() => {
            navigate('/mypageDeleteaccount')
          }}
        >
          회원 탈퇴
        </MyPageTabItemLast>
      </MyPageTab>
      <MyPageContentsContainer>
        <MyPageBodyTop>
          <MyPageLikeTopFirst>NO</MyPageLikeTopFirst>
          <MyPageLikeTopSec>곡명</MyPageLikeTopSec>
          <MyPageLikeTopRest>스크랩</MyPageLikeTopRest>
          <MyPageLikeTopRest>더보기</MyPageLikeTopRest>
          <MyPageLikeLast>댓글작성</MyPageLikeLast>
        </MyPageBodyTop>
        <MyPageBodyMiddle>
          <MyPageLikeMiddleContainer>
            <MyPageLikeMiddleOne>곡 넘버</MyPageLikeMiddleOne>
            <MyPageLikeMiddleTwo>곡 이름</MyPageLikeMiddleTwo>
            <MyPageLikeMiddleThree>
              <MyPageLikeScrapBtn src={downBtn} alt="플레이버튼" />
            </MyPageLikeMiddleThree>
            <MyPageLikeMiddleThree>
              <MyPageLikeMoreBtn src={playBtn} alt="설명버튼" onClick={onDescHandler}/>
            </MyPageLikeMiddleThree>
            <MyPageLikeMiddleFour>댓글작성</MyPageLikeMiddleFour>
          </MyPageLikeMiddleContainer>
          {
            isDesc === true ? 
            <MyPageLikeDescDiv>
              <div>테스트 곡 제목</div>
              <div>테스트 곡 설명</div>
            </MyPageLikeDescDiv> 
            : null
          }
          <MyPageLikeMiddleContainer>
            <MyPageLikeMiddleOne>곡 넘버</MyPageLikeMiddleOne>
            <MyPageLikeMiddleTwo>곡 이름</MyPageLikeMiddleTwo>
            <MyPageLikeMiddleThree>
              <MyPageLikeScrapBtn src={downBtn} alt="플레이버튼" />
            </MyPageLikeMiddleThree>
            <MyPageLikeMiddleThree>
              <MyPageLikeMoreBtn src={playBtn} alt="설명버튼" onClick={onDescHandler}/>
            </MyPageLikeMiddleThree>
            <MyPageLikeMiddleFour>댓글작성</MyPageLikeMiddleFour>
          </MyPageLikeMiddleContainer>
          {
            isDesc === true ? 
            <MyPageLikeDescDiv>
              <div>테스트 곡 제목</div>
              <div>테스트 곡 설명</div>
            </MyPageLikeDescDiv> 
            : null
          }
        </MyPageBodyMiddle>
      </MyPageContentsContainer>
    </>
  )
}

export default MyPageLike

// {likedata?.map((item) => (
//   <MyPageLikeMiddleContainer key={item.musicId}>
//     <MyPageLikeMiddleDiv>{item.composer}</MyPageLikeMiddleDiv>
//     <MyPageLikeMiddleDiv>{item.fileName}</MyPageLikeMiddleDiv>
//     <MyPageLikeMiddleDiv>
//       {/* <audio controls src={item.musicUrl} /> */}
//       <MyPageLikePlayBtn src={playBtn} alt="플레이버튼" onClick={() => onPlayMusicHandler(item.musicUrl)}/>
//     </MyPageLikeMiddleDiv>
//     <MyPageLikeMiddleDiv
//       onClick={() => navigate(`/recommend/music/${item.musicId}`)}
//     >
//       댓글남기기
//     </MyPageLikeMiddleDiv>
//   </MyPageLikeMiddleContainer>
// ))}
