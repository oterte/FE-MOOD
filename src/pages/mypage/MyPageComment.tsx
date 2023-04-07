import React, { useState } from 'react'
import Header from '../../components/header/Header'
import {
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
} from './mypageSC'
import {
  MyPageBottomDiv,
  MyPageCommentTab,
  MyPageTab,
  MyPageTabItem,
  MyPageTabItemLast,
} from './mypagecontentsSC'
import { useNavigate } from 'react-router'
import { useQuery } from 'react-query'
import { showComment, showProfile } from '../../api/mypage'
import Play from '../../components/playbar/Play'
import { MyPageContainer } from './MyPageTable'
import { H2, H3, ShowRepliesBtn } from '../../components/composer/ComposerListSt'
import Pagination from 'react-js-pagination'
import './mypagePagination.css'
type Review = {
  createdAt?: string
  musicId?: number
  reviewId?: number
  review: string
}
function MyPageComment() {
  const [currentPage, setCurrentPage] = useState(1)
  const {
    isLoading,
    isError,
    data: reviewData,
  } = useQuery(['myComment', currentPage], () => showComment(currentPage))

  const { isLoading: profileLoading, data: profileData } = useQuery(
    ['profile'],
    showProfile
  )
  const navigate = useNavigate()
  const onPaginationHandler = (i: number) => {
    setCurrentPage(i)
  }
  if (isLoading) {
    return <h1>로딩중</h1>
  }
  if (profileLoading) {
    return <h1>로딩중..</h1>
  }
  if (isError) {
    return <h1>에러</h1>
  }
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
            navigate('/mypage')
          }}
        >
          스크랩
        </MyPageTabItem>
        <MyPageCommentTab
          onClick={() => {
            navigate('/mypageComment')
          }}
        >
          남긴 댓글
        </MyPageCommentTab>
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
          <div>상세페이지로</div>
        </div>
        {reviewData.reviewList.map((item: Review, index: number) => (
          <React.Fragment key={`${item.reviewId}`}>
            <div>
              <div>{index + 1}</div>
              {
                item.review.length < 20 ? <H2>{item.review}</H2> : <H2>{item.review.slice(0,20)+("...")}</H2>
              }
              <div>
                <ShowRepliesBtn
                  onClick={() => navigate(`/recommend/music/${item?.musicId}`)}
                >
                  댓글작성
                </ShowRepliesBtn>
              </div>
            </div>
          </React.Fragment>
        ))}
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={10}
          totalItemsCount={reviewData.reviewCount}
          pageRangeDisplayed={5}
          prevPageText={'<'}
          nextPageText={'>'}
          onChange={onPaginationHandler}
        />
      </MyPageContainer>
      <MyPageBottomDiv/>
      <Play />
    </>
  )
}
export default MyPageComment
