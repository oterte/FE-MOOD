import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { likedMusic } from '../../api/mypage'
import { MyPageContainer } from '../../pages/mypage/MyPageTable'
import {
  ContentContainer,
  H2,
  MusicDetailBtn,
  ShowRepliesBtn,
  SpanMusicContent,
  SpanMusicTitle,
  ToogleWrap,
} from '../../components/composer/ComposerListSt'
import '../../pages/mypage/mypagePagination.css'
import Pagination from 'react-js-pagination'
import { Like } from '../../pages/mypage/MyPage'
import playBtnBrown from '../../assets/icons/music_play_brown.png'
import moreBtn from '../../assets/icons/morebtn.png'
import { useDispatch } from 'react-redux'
import { setMusicPlay } from '../../redux/modules/musicPlayer'
import { setIsPlaying } from '../../redux/modules/isPlaying'
import { useNavigate } from 'react-router'
import { scrapMusic } from '../../api/scrap'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import { PThree } from '../../pages/mypage/mypagecontentsSC'

function MyPageLikes() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const [currentPage, setCurrentPage] = useState(1)
  const [showDesc, setShowDesc] = useState<number>(-1)
  const { isLoading: likeLoading, data: likedata } = useQuery(
    ['like', currentPage],
    () => likedMusic(currentPage)
  )
  const scrapMutation = useMutation(scrapMusic, {
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })
  const toggleReplies = (descIndex: number) => {
    setShowDesc((prevState) => (prevState === descIndex ? -1 : descIndex))
  }
  const onClickMusicChangeHandler = (music: Like) => {
    dispatch(setMusicPlay(music))
    dispatch(setIsPlaying())
  }
  const onScrapHanlder = (i: number) => {
    scrapMutation.mutate({ musicId: i })
  }
  const onPaginationHandler = (i: number) => {
    setCurrentPage(i)
  }
  if (likeLoading) return <p></p>
  return (
    <MyPageContainer>
      <div>
        <div>no</div>
        <div>곡명</div>
        <div>재생</div>
        <div>스크랩</div>
        <div>더보기</div>
      </div>
      {likedata.likeList.length > 0 ? likedata.likeList.map((item: Like, index: number) => (
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
                  onClick={() => navigate(`/recommend/music/${item?.musicId}`)}
                >
                  댓글 남기러 가기
                </MusicDetailBtn>
              </ContentContainer>
            </ToogleWrap>
          )}
        </React.Fragment>
      )) : <PThree>좋아요한 목록이 없습니다.</PThree>}
      {likedata.likeList.length > 0 ? <Pagination
        activePage={currentPage}
        itemsCountPerPage={10}
        totalItemsCount={likedata.likeCount}
        pageRangeDisplayed={5}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={onPaginationHandler}
      /> : null}
    </MyPageContainer>
  )
}

export default React.memo(MyPageLikes)
