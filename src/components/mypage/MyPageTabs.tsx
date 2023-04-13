import React, { useState, useRef } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import {
  changeNickname,
  deleteAccount,
  editProfileImg,
  likedMusic,
  showComment,
  showProfile,
  showScrap,
} from '../../api/mypage'
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
import {
  EditDiv,
  ExternalContainer,
  MyPageContentsContainer,
  MyPageDeleteBtn,
  MyPageDeleteBtnDiv,
  MyPageDeleteDivOne,
  MyPageDeleteDivTwo,
  MyPageDeleteInput,
  MyPageEditBtnTwo,
  MyPageEditContainer,
  MyPageEditImg,
  MyPageImgBtnWrap,
  MyPageImgEditInput,
  MyPageInput,
  MyPageInputBtn,
  MyPageInputContainer,
  MyPageInputLabel,
  POne,
  PThree,
  PTwo,
} from '../../pages/mypage/mypagecontentsSC'
import Pagination from 'react-js-pagination'
import { Like, Review, Scrap } from '../../pages/mypage/MyPage'
import heartBtnBrown from '../../assets/icons/Heart_brown.png'
import heartBtnFilled from '../../assets/icons/Heart_fill_brown.png'
import playBtnBrown from '../../assets/icons/music_play_brown.png'
import moreBtn from '../../assets/icons/morebtn.png'
import baseProifle from '../../assets/icons/Heart_fill_white copy.png'
import { useDispatch } from 'react-redux'
import { toggleLike } from '../../api/chart'
import { setMusicPlay } from '../../redux/modules/musicPlayer'
import { setIsPlaying } from '../../redux/modules/isPlaying'
import { useNavigate } from 'react-router'
import { scrapMusic } from '../../api/scrap'
import { BsBookmark, BsBookmarkFill, BsPlusLg } from 'react-icons/bs'
import {
  onDeletetHandler,
  onRemoveToken,
  onSetLocalStorageHandler,
} from '../../util/cookie'
import { checkNickname } from '../../api/signup'
interface MyPageProps {
  items: string
}
function MyPageTabs({ items }: MyPageProps) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const imgRef: any = useRef<HTMLInputElement>(null)
  const [imgUrl, setImgUrl] = useState<string | ArrayBuffer | null>()
  const [imgFile, setImgFile] = useState<File>()
  const [newNickname, setNewNickname] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [showDesc, setShowDesc] = useState<number>(-1)
  const [password, setPassword] = useState('')
  const queryClient = useQueryClient()
  const likeMutation = useMutation(toggleLike, {
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })
  const scrapMutation = useMutation(scrapMusic, {
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })
  const { isLoading: profLoading, data: profData } = useQuery(
    ['profile'],
    showProfile
  )
  const { isLoading: scrapLoading, data: scrapData } = useQuery(
    ['myScrap', currentPage],
    () => showScrap(currentPage)
  )
  const { isLoading: commentLoading, data: reviewData } = useQuery(
    ['myComment', currentPage],
    () => showComment(currentPage)
  )
  const { isLoading: likeLoading, data: likedata } = useQuery(
    ['like', currentPage],
    () => likedMusic(currentPage)
  )
  const toggleReplies = (descIndex: number) => {
    setShowDesc((prevState) => (prevState === descIndex ? -1 : descIndex))
  }
  const onToggleLikeHandler = (id: number) => {
    likeMutation.mutate({ musicId: id })
  }
  const onClickMusicChangeHandler = (music: any) => {
    dispatch(setMusicPlay(music))
    dispatch(setIsPlaying())
  }
  const onPaginationHandler = (i: any) => {
    setCurrentPage(i)
  }
  const onScrapHanlder = (i: number) => {
    scrapMutation.mutate({ musicId: i })
  }
  const editMutation = useMutation(editProfileImg, {
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })
  const changeMutation = useMutation(changeNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })
  const onChangeImageHandler = () => {
    const reader = new FileReader()
    const file = imgRef.current.files[0]
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImgUrl(reader.result)
      setImgFile(file)
    }
  }
  const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const onDeleteAccountHandler = () => {
    if (!window.confirm('정말 회원 탈퇴를 진행하시겠습니까?')) {
      alert('취소되었습니다.')
    } else {
      deleteAccount(password)
        .then((res) => {
          onDeletetHandler('accessToken')
          onRemoveToken()
          navigate('/delete')
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    }
  }

  const onSubmitImageHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!imgFile) {
      alert('먼저 변경할 프로필 이미지를 등록해 주세요.')
    } else {
      e.preventDefault()
      const data = new FormData()
      data.append('image', imgFile as File)
      editMutation.mutate(data)
      onSetLocalStorageHandler('img', imgUrl)
      alert('변경되었습니다.')
    }
  }
  const onChangeNicknameHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let regExp: RegExp = /^[^\s]{2,8}$/
    if (regExp.test(newNickname) && newNickname !== "") {
      checkNickname(newNickname)
        .then(() => {
          changeMutation.mutate(newNickname)
          alert('변경되었습니다.')
          setNewNickname('')
          onSetLocalStorageHandler('nickname', newNickname)
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    }else if(regExp.test(newNickname) === false){
      alert("닉네임은 2자리 이상, 8자리 이하여야 합니다.")
    }
  }
  if (profLoading) return <p></p>
  if (scrapLoading) return <p></p>
  if (commentLoading) return <p></p>
  if (likeLoading) return <p></p>
  return (
    <>
      {items === 'Scrap' ? (
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
      ) : null}
      {items === 'Comment' ? (
        <MyPageContainer>
          <div>
            <div>no</div>
            <div>댓글</div>
            <div>상세페이지로</div>
          </div>
          {reviewData.reviewList.map((item: Review, index: number) => (
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
                    onClick={() =>
                      navigate(`/recommend/music/${item?.musicId}`)
                    }
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
      ) : null}
      {items === 'Like' ? (
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
      ) : null}
      {items === 'Edit Profile' ? (
        <MyPageContentsContainer>
          <ExternalContainer>
            <MyPageEditContainer>
              <label htmlFor="fileinput">
                <EditDiv>
                  <BsPlusLg />
                </EditDiv>
              </label>
              <MyPageEditImg
                src={
                  !imgUrl
                    ? profData.profileUrl
                      ? profData.profileUrl
                      : baseProifle
                    : imgUrl
                }
                alt="이미지"
              />

              <MyPageImgEditInput
                id="fileinput"
                ref={imgRef}
                type="file"
                accept="image/*"
                onChange={onChangeImageHandler}
              />
              <MyPageImgBtnWrap>
                <MyPageInputBtn onClick={onSubmitImageHandler}>
                  수정하기
                </MyPageInputBtn>
              </MyPageImgBtnWrap>
              <MyPageInputContainer>
                <form>
                  <MyPageInputLabel>닉네임</MyPageInputLabel>
                  <MyPageInput
                    type="text"
                    value={newNickname}
                    placeholder="닉네임을 입력하세요"
                    onChange={(e) => setNewNickname(e.target.value)}
                  />
                  <MyPageEditBtnTwo
                    type="submit"
                    onClick={onChangeNicknameHandler}
                  >
                    닉네임 변경
                  </MyPageEditBtnTwo>
                </form>
              </MyPageInputContainer>
            </MyPageEditContainer>
          </ExternalContainer>
        </MyPageContentsContainer>
      ) : null}
      {items === 'Delete Account' ? (
        <MyPageContentsContainer>
          <MyPageDeleteDivOne>
            <POne>정말로 회원탈퇴 하시겠습니까?</POne>
            <PTwo>
              * 회원탈퇴 시 모든 회원정보는 삭제되며 복구할 수 없습니다.
            </PTwo>
          </MyPageDeleteDivOne>
          <MyPageDeleteDivTwo>
            <PThree>탈퇴하시려면 비밀번호를 입력해주세요.</PThree>
            <MyPageDeleteInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={onChangePasswordHandler}
            />
            <MyPageDeleteBtnDiv>
              <MyPageDeleteBtn onClick={onDeleteAccountHandler}>
                탈퇴하기
              </MyPageDeleteBtn>
            </MyPageDeleteBtnDiv>
          </MyPageDeleteDivTwo>
        </MyPageContentsContainer>
      ) : null}
    </>
  )
}

export default MyPageTabs
