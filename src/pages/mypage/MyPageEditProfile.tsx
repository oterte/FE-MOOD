import React, { useRef, useState } from 'react'
import Header from '../../components/header/Header'
import {
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
} from './mypageSC'
import Play from '../../components/playbar/Play'
import {
  ExternalContainer,
  MyPageContentsContainer,
  MyPageEditBtn,
  MyPageEditContainer,
  MyPageEditImg,
  MyPageEditTab,
  MyPageImgBtnWrap,
  MyPageImgEditInput,
  MyPageInput,
  MyPageInputBtn,
  MyPageInputContainer,
  MyPageInputLabel,
  MyPageTab,
  MyPageTabItem,
  MyPageTabItemLast,
} from './mypagecontentsSC'

import { useMutation, useQuery, useQueryClient } from 'react-query'
import { changeNickname, editProfileImg, showProfile } from '../../api/mypage'
import { useNavigate } from 'react-router-dom'
import { checkNickname } from '../../api/signup'
import { onSetLocalStorageHandler } from '../../util/cookie'
import { useDispatch } from 'react-redux'
import { setMusicPlay } from '../../redux/modules/musicPlayer'
import { setIsPlaying } from '../../redux/modules/isPlaying'
import MyPageBody from './MyPageBody'
function MyPageEditProfile() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const onClickMusicChangeHandler = (music: any) => {
    dispatch(setMusicPlay(music))
    dispatch(setIsPlaying())
  }
  const {
    isLoading,
    isError,
    data: profileData,
  } = useQuery(['profile'], showProfile)
  const imgRef: any = useRef<HTMLInputElement>(null)
  const [imgUrl, setImgUrl] = useState<string | ArrayBuffer | null>()
  const [imgFile, setImgFile] = useState<File>()
  const [newNickname, setNewNickname] = useState('')

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

  const onSubmitImageHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const data = new FormData()
    data.append('image', imgFile as File)
    editMutation.mutate(data)
  }
  const onChangeNicknameHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    changeMutation.mutate(newNickname)
    setNewNickname('')
    onSetLocalStorageHandler('nickname', newNickname)
  }
  if (isLoading) {
    return <h1>로딩중</h1>
  }

  if (isError) {
    return <h1>에러</h1>
  }

  console.log(profileData)
  console.log(newNickname)
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
      <MyPageBody></MyPageBody>
      <MyPageContentsContainer>
        <ExternalContainer>
          <MyPageEditContainer>
            <label htmlFor="fileinput">
              <MyPageEditImg
                src={imgUrl ? imgUrl : profileData.profileUrl}
                alt="이미지"
              />
            </label>
            <MyPageImgEditInput
              id="fileinput"
              ref={imgRef}
              type="file"
              accept="image/*"
              onChange={onChangeImageHandler}
            />
            <MyPageImgBtnWrap>
              <MyPageInputBtn onClick={onSubmitImageHandler}>
                프로필 사진 수정
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
                <MyPageInputBtn type="submit" onClick={onChangeNicknameHandler}>
                  닉네임 변경
                </MyPageInputBtn>
              </form>
            </MyPageInputContainer>
          </MyPageEditContainer>
        </ExternalContainer>
      </MyPageContentsContainer>
      <Play />
    </>
  )
}

export default MyPageEditProfile
