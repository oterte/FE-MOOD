import React, { useState } from 'react'
import { showScrap } from '../../api/mypage'
import { useMutation, useQuery, useQueryClient } from 'react-query'
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
import { Scrap } from '../../pages/mypage/MyPage'
import heartBtnBrown from '../../assets/icons/Heart_brown.png'
import heartBtnFilled from '../../assets/icons/Heart_fill_brown.png'
import playBtnBrown from '../../assets/icons/music_play_brown.png'
import moreBtn from '../../assets/icons/morebtn.png'
import { useDispatch } from 'react-redux'
import { toggleLike } from '../../api/chart'
import { setMusicPlay } from '../../redux/modules/musicPlayer'
import { setIsPlaying } from '../../redux/modules/isPlaying'
import { useNavigate } from 'react-router'
import { PThree } from '../../pages/mypage/mypagecontentsSC'

function MyPageScraps() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [showDesc, setShowDesc] = useState<number>(-1)
  const queryClient = useQueryClient()
  const likeMutation = useMutation(toggleLike, {
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })
  const { isLoading: scrapLoading, data: scrapData } = useQuery(
    ['myScrap', currentPage],
    () => showScrap(currentPage)
  )
  const onClickMusicChangeHandler = (music: Scrap) => {
    dispatch(setMusicPlay(music))
    dispatch(setIsPlaying())
  }
  const onToggleLikeHandler = (id: number) => {
    likeMutation.mutate({ musicId: id })
  }
  const toggleReplies = (descIndex: number) => {
    setShowDesc((prevState) => (prevState === descIndex ? -1 : descIndex))
  }
  const onPaginationHandler = (i: number) => {
    setCurrentPage(i)
  }
  if (scrapLoading) return <p></p>
  return (
    <MyPageContainer>
      <div>
        <div>no</div>
        <div>곡명</div>
        <div>재생</div>
        <div>좋아요</div>
        <div>더보기</div>
      </div>
      {scrapData.scrapList.length > 0 ? (
        scrapData.scrapList.map((item: Scrap, index: number) => (
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
                {item.likeStatus === false ? (
                  <img
                    src={heartBtnBrown}
                    alt="unliked"
                    onClick={() => onToggleLikeHandler(item.musicId)}
                  />
                ) : (
                  <img
                    src={heartBtnFilled}
                    alt="like"
                    onClick={() => onToggleLikeHandler(item.musicId)}
                  />
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
        ))
      ) : (
        <PThree>스크랩 한 목록이 없습니다.</PThree>
      )}
      {scrapData.scrapList.length > 0 ? (
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={10}
          totalItemsCount={scrapData.scrapCount}
          pageRangeDisplayed={5}
          prevPageText={'<'}
          nextPageText={'>'}
          onChange={onPaginationHandler}
        />
      ) : null}
    </MyPageContainer>
  )
}


export default React.memo(MyPageScraps)
