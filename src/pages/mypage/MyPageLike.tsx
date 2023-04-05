import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { likedMusic, showProfile } from '../../api/mypage'
import Header from '../../components/header/Header'
import './mypagePagination.css'
import {
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
} from './mypageSC'
import {
  MyPageLikeTab,
  MyPageTab,
  MyPageTabItem,
  MyPageTabItemLast,
} from './mypagecontentsSC'
import Play from '../../components/playbar/Play'
import downBtnBrown from '../../assets/icons/down_brown.png'
import {
  H3,
  ContentContainer,
  MusicDetailBtn,
  ShowRepliesBtn,
  SpanMusicContent,
  SpanMusicTitle,
  ToogleWrap,
} from '../../components/composer/ComposerListSt'
import { useNavigate } from 'react-router-dom'
import { MyPageContainer } from './MyPageTable'
import Pagination from 'react-js-pagination'

type Like = {
  composer: string
  fileName: string
  musicId: string
  musicTitle: string
  musicUrl: string
}

function MyPageLike() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [showDesc, setShowDesc] = useState<number>(-1)
  const {
    isLoading,
    isError,
    data: likedata,
  } = useQuery<Like[]>(['like', currentPage], () => likedMusic(currentPage))
  const { isLoading: profileLoading, data: profileData } = useQuery(
    ['profile'],
    showProfile
  )
  if (isLoading) {
    return <h1>로딩중</h1>
  }
  if (profileLoading) {
    return <h1>로딩중..</h1>
  }
  if (isError) {
    return <h1>에러</h1>
  }

  console.log(likedata)
  const toggleReplies = (descIndex: number) => {
    setShowDesc((prevState) => (prevState === descIndex ? -1 : descIndex))
    console.log(showDesc)
  }
  const onPaginationHandler = (i:any) => {
    setCurrentPage(i);
  };

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
      <MyPageContainer>
        <div>
          <div>no</div>
          <div>곡명</div>
          <div>좋아요</div>
          <div>스크랩</div>
          <div>더보기</div>
        </div>
        {likedata?.map((item, index) => (
          <React.Fragment key={`${item.musicId}`}>
            <div>
              <div>{index + 1}</div>
              <H3>{item.musicTitle}</H3>
              <button>
                <img src={downBtnBrown} alt="like" />
              </button>
              <button>
                <img src={downBtnBrown} alt="down" />
              </button>
              <div>
                <ShowRepliesBtn onClick={() => toggleReplies(index)}>
                  {showDesc === index ? '숨기기' : '더보기'}
                </ShowRepliesBtn>
              </div>
            </div>
            {showDesc === index && (
              <ToogleWrap>
                <ContentContainer>
                  <SpanMusicTitle>{item.musicTitle}</SpanMusicTitle>
                  <SpanMusicContent>{item.fileName}</SpanMusicContent>
                  <MusicDetailBtn
                    onClick={() => navigate(`/recommend/music/${item?.musicId}`)}
                  >
                    댓글 남기러 가기
                  </MusicDetailBtn>
                </ContentContainer>
              </ToogleWrap>
            )}
          </React.Fragment>
        ))}
        <Pagination
        activePage={currentPage}
        itemsCountPerPage={10}
        totalItemsCount={50}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"} 
        onChange={onPaginationHandler}/>
      </MyPageContainer>
      <Play />
    </>
  )
}

export default MyPageLike