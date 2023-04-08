import React, { useState } from 'react'
import Header from '../../components/header/Header'
import {
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
} from './mypageSC'
import heartBtnBrown from '../../assets/icons/Heart_brown.png'
import playBtnBrown from '../../assets/icons/music_play_brown.png'
import moreBtn from '../../assets/icons/morebtn.png'
import {
  MyPageBottomDiv,
  MyPageScrapTab,
  MyPageTab,
  MyPageTabItem,
  MyPageTabItemLast,
} from './mypagecontentsSC'
import { useQuery } from 'react-query'
import { showProfile, showScrap } from '../../api/mypage'
import { useDispatch } from 'react-redux'
import { setMusicPlay } from '../../redux/modules/musicPlayer'
import { setIsPlaying } from '../../redux/modules/isPlaying'
import { useNavigate } from 'react-router-dom'
import Pagination from 'react-js-pagination'
import { MyPageContainer } from './MyPageTable'
import {
  ContentContainer,
  H2,
  H3,
  MusicDetailBtn,
  ShowRepliesBtn,
  SpanMusicContent,
  SpanMusicTitle,
  ToogleWrap,
} from '../../components/composer/ComposerListSt'
import Play from '../../components/playbar/Play'
import LikeCount from '../../components/like/LikeCount'
type Scrap = {
  composer: string
  musicContent: string
  musicId: number
  musicTitle: string
  musicUrl: string
}
function MyPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [showDesc, setShowDesc] = useState<number>(-1)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onClickMusicChangeHandler = (music: any) => {
    dispatch(setMusicPlay(music))
    dispatch(setIsPlaying())
  }
  const { isLoading: scrapLoading, data: scrapData } = useQuery(
    ['myScrap', currentPage],
    () => showScrap(currentPage)
  )
  const { isLoading, isError, data } = useQuery(['profile'], showProfile)
  const onPaginationHandler = (i: any) => {
    setCurrentPage(i)
  }
  const toggleReplies = (descIndex: number) => {
    setShowDesc((prevState) => (prevState === descIndex ? -1 : descIndex))
    console.log(showDesc)
  }
  if (scrapLoading) {
    return <h1>로딩중</h1>
  }
  if (isLoading) {
    return <h1>로딩중</h1>
  }
  if (isError) {
    console.log(isError)
  }
  console.log('스크랩 조회', scrapData)
  return (
    <>
      <Header />
      <MyPageProfileContainer>
        <MyPageProfileBodyContainer>
          <p>마이페이지</p>
          <MyPageProfileImgBox>
            <MyPageProfileImg src={data.profileUrl} />
          </MyPageProfileImgBox>
          <div>
            <p>{data.nickname} 님 환영합니다</p>
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
        <MyPageScrapTab
          onClick={() => {
            navigate('/mypage')
          }}
        >
          스크랩
        </MyPageScrapTab>
        <MyPageTabItem
          onClick={() => {
            navigate('/mypageComment')
          }}
        >
          남긴 댓글
        </MyPageTabItem>
        <MyPageTabItem
          onClick={() => {
            navigate('/mypageLike')
          }}
        >
          좋아요
        </MyPageTabItem>
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
          <div>재생</div>
          <div>좋아요</div>
          <div>더보기</div>
        </div>
        {scrapData.scrapList.map((item: Scrap, index: number) => (
          <React.Fragment key={`${item.musicId}`}>
            <div>
              <div>{index + 1}</div>
              <H2>{item.musicTitle}</H2>
              <button>
                <img
                  src={playBtnBrown}
                  alt="like"
                  onClick={() => onClickMusicChangeHandler(item)}
                />
              </button>
              <button>
                <img src={heartBtnBrown} alt="down" />
              </button>
              <div>
                <ShowRepliesBtn onClick={() => toggleReplies(index)}>
                  <img src={moreBtn} alt="더보기" />
                </ShowRepliesBtn>
              </div>
            </div>
            {showDesc === index && (
              <ToogleWrap>
                <ContentContainer>
                  <SpanMusicTitle>{item.musicTitle}</SpanMusicTitle>
                  <SpanMusicContent>{item.musicContent}</SpanMusicContent>
                  <MusicDetailBtn
                    onClick={() =>
                      navigate(`/recommend/music/${item?.musicId}`)
                    }
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
          totalItemsCount={scrapData.scrapCount}
          pageRangeDisplayed={5}
          prevPageText={'<'}
          nextPageText={'>'}
          onChange={onPaginationHandler}
        />
      </MyPageContainer>
      <MyPageBottomDiv />
    </>
  )
}

export default MyPage
