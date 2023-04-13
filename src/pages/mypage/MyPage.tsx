import React, { useState } from 'react'
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
  MyPageScrapTab,
  MyPageTab,
  MyPageTabItem,
  MyPageTabItemLast,
} from './mypagecontentsSC'
import { useQuery } from 'react-query'
import { showProfile } from '../../api/mypage'
import { useNavigate } from 'react-router-dom'
import { onGetLocalStorage } from '../../util/cookie'
import MyPageTabs from '../../components/mypage/MyPageTabs'
export interface Scrap {
  composer: string
  musicContent: string
  musicId: number
  musicTitle: string
  musicUrl: string
  likeStatus: boolean
}
export interface Review  {
  createdAt?: string
  musicId?: number
  reviewId?: number
  review: string
}
export interface Like {
  composer: string
  musicId: number
  musicTitle: string
  musicUrl: string
  musicContent: string
  scrapStatus: boolean
}
function MyPage() {
  const tabItems = ['Scrap', 'Comment', 'Like', 'Edit Profile', 'Delete Account']
  const [myTab, setMyTab] = useState(tabItems[0])
  const navigate = useNavigate()
 
  const { isLoading, isError, data } = useQuery(['profile'], showProfile)
  if (isLoading) return <p></p>
  if (isError) return <p></p>
  return (
    <>
      <Header />
      <MyPageProfileContainer>
        <MyPageProfileBodyContainer>
          <p>마이페이지</p>
          <MyPageProfileImgBox>
            <MyPageProfileImg
              src={data.profileUrl ? data.profileUrl : onGetLocalStorage('img')}
            />
          </MyPageProfileImgBox>
          <div>
            <p>{data.nickname}님 환영합니다</p>
          </div>
          <div>
            <span>{data.myStatus}</span>
          </div>
          <div>
            <MyPageGoSurvey onClick={() => navigate('/survey')}>
              지금의 기분을 확인해보실래요?
            </MyPageGoSurvey>
          </div>
        </MyPageProfileBodyContainer>
      </MyPageProfileContainer>
      <MyPageTab>
        {tabItems.map((item) => (
          <MyPageTabItem key={item}
            className={item === myTab ? 'focused' : 'unfocused'}
            onClick={() => setMyTab(item)}
          >
            {item}
          </MyPageTabItem>
        ))}
        {/* <MyPageTabItem className='' onClick={onToggleTab}>Scrap</MyPageTabItem>
        <MyPageTabItem className='' onClick={onToggleTab}>Comment</MyPageTabItem>
        <MyPageTabItem className='' onClick={onToggleTab}>Like</MyPageTabItem>
        <MyPageTabItem className='' onClick={onToggleTab}>Edit Profile</MyPageTabItem>
        <MyPageTabItem className='' onClick={onToggleTab}>Delete Account</MyPageTabItem> */}
      </MyPageTab>
      <MyPageTabs items={myTab} />
      <MyPageBottomDiv />
    </>
  )
}

export default MyPage
