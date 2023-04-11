import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { likedMusic, showProfile } from '../../api/mypage'
import Header from '../../components/header/Header'
import {
  MyPageGoSurvey,
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
} from './mypageSC'
import {
  MyPageBottomDiv,
  MyPageLikeTab,
  MyPageTab,
  MyPageTabItem,
  MyPageTabItemLast,
} from './mypagecontentsSC'
import downBtnBrown from '../../assets/icons/down_brown.png'
import downBtnOutLine from '../../assets/icons/down_outline.png'
import playBtnBrown from '../../assets/icons/music_play_brown.png'
import moreBtn from '../../assets/icons/morebtn.png'
import { setMusicPlay } from '../../redux/modules/musicPlayer'
import {
  ContentContainer,
  MusicDetailBtn,
  ShowRepliesBtn,
  SpanMusicContent,
  SpanMusicTitle,
  ToogleWrap,
  H2,
} from '../../components/composer/ComposerListSt'
import { useNavigate } from 'react-router-dom'
import { MyPageContainer } from './MyPageTable'
import Pagination from 'react-js-pagination'
import './mypagePagination.css'
import { useDispatch } from 'react-redux'
import { setIsPlaying } from '../../redux/modules/isPlaying'
import { scrapMusic } from '../../api/scrap'
import { onGetLocalStorage } from '../../util/cookie'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

interface Like {
  composer: string
  musicId: number
  musicTitle: string
  musicUrl: string
  musicContent: string
  scrapStatus: boolean
}

function MyPageLike() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const onClickMusicChangeHandler = (music: any) => {
    dispatch(setMusicPlay(music))
    dispatch(setIsPlaying())
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [showDesc, setShowDesc] = useState<number>(-1)
  const {
    isLoading,
    isError,
    data: likedata,
  } = useQuery(['like', currentPage], () => likedMusic(currentPage))
  const { isLoading: profileLoading, data: profileData } = useQuery(
    ['profile'],
    showProfile
  )

  const scrapMutation = useMutation(scrapMusic, {
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })
  if (isLoading) return <h1>로딩중</h1>
  if (profileLoading) return <h1>로딩중..</h1>
  if (isError) return <h1>에러</h1>
  const toggleReplies = (descIndex: number) => {
    setShowDesc((prevState) => (prevState === descIndex ? -1 : descIndex))
  }

  const onPaginationHandler = (i: number) => {
    setCurrentPage(i)
  }
  const onScrapHanlder = (i: number) => {
    scrapMutation.mutate({ musicId: i })
  }
  return (
    <>
      <Header />
      <MyPageProfileContainer>
        <MyPageProfileBodyContainer>
          <p>마이페이지</p>
          <MyPageProfileImgBox>
            <MyPageProfileImg
              src={
                profileData.profileUrl
                  ? profileData.profileUrl
                  : onGetLocalStorage('img')
              }
            />
          </MyPageProfileImgBox>
          <div>
            <p>{profileData.nickname}님 환영합니다</p>
          </div>
          <div>
            <span>{profileData.myStatus}</span>
          </div>
          <div>
            <MyPageGoSurvey>지금의 기분을 확인해보실래요?</MyPageGoSurvey>
          </div>
        </MyPageProfileBodyContainer>
      </MyPageProfileContainer>
      <MyPageTab>
        <MyPageTabItem
          onClick={() => {
            navigate('/mypage')
          }}
        >
          스크랩
        </MyPageTabItem>
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
          <div>재생</div>
          <div>스크랩</div>
          <div>더보기</div>
        </div>
        {likedata.likeList.map((item: Like, index: number) => (
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
                {item.scrapStatus === false ? (
                  <p
                    onClick={() => onScrapHanlder(item.musicId)}
                    style={{ cursor: 'pointer' }}
                  >
                    <BsBookmark size="22" color="#8b7d76" />
                  </p>
                ) : (
                  <p
                    onClick={() => onScrapHanlder(item.musicId)}
                    style={{ cursor: 'pointer' }}
                  >
                    <BsBookmarkFill size="22" color="#8b7d76" />
                  </p>
                )}
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
          totalItemsCount={likedata.likeCount}
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

export default MyPageLike
