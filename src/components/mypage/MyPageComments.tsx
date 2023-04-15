import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { showComment } from '../../api/mypage'
import { MyPageContainer } from '../../pages/mypage/MyPageTable'
import { H2, ShowRepliesBtn } from '../../components/composer/ComposerListSt'
import '../../pages/mypage/mypagePagination.css'

import Pagination from 'react-js-pagination'
import { Review } from '../../pages/mypage/MyPage'

import { useNavigate } from 'react-router'
import { PThree } from '../../pages/mypage/mypagecontentsSC'
function MyPageComments() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const { isLoading: commentLoading, data: reviewData } = useQuery(
    ['myComment', currentPage],
    () => showComment(currentPage)
  )
  const onPaginationHandler = (i: number) => {
    setCurrentPage(i)
  }
  if (commentLoading) return <p></p>
  return (
    <MyPageContainer>
      <div>
        <div className="detail">no</div>
        <div className="detail">댓글</div>
        <div className="detail">상세페이지로</div>
      </div>
      {reviewData.reviewList.length > 0 ? (
        reviewData.reviewList.map((item: Review, index: number) => (
          <React.Fragment key={`${index}`}>
            <div>
              <div>{index + 1}</div>
              {item.review.length < 20 ? (
                <H2>{item.review}</H2>
              ) : (
                <H2>{item.review.slice(0, 20) + '...'}</H2>
              )}
              <div>
                <ShowRepliesBtn
                  onClick={() => navigate(`/recommend/music/${item?.musicId}`)}
                >
                  댓글작성
                </ShowRepliesBtn>
              </div>
            </div>
          </React.Fragment>
        ))
      ) : (
        <PThree>작성한 댓글이 없습니다.</PThree>
      )}
      {reviewData.reviewList.length > 0 ? (
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={10}
          totalItemsCount={reviewData.reviewCount}
          pageRangeDisplayed={5}
          prevPageText={'<'}
          nextPageText={'>'}
          onChange={onPaginationHandler}
        />
      ) : null}
    </MyPageContainer>
  )
}


export default React.memo(MyPageComments)
