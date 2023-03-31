import React, { useRef, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import {
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
} from './mypageSC'
import {
  MyPageContentsContainer,
  MyPageEditBtn,
  MyPageEditContainer,
  MyPageEditImg,
} from './mypagecontentsSC'

import { useMutation, useQuery, useQueryClient } from 'react-query'
import { editProfileImg, showProfile } from '../../api/mypage'
import MyPageBody from './MyPageBody'
function MyPageEditProfile() {
  const queryClient = useQueryClient()
  const {
    isLoading,
    isError,
    data: profileData,
  } = useQuery(['profile'], showProfile)
  const imgRef: any = useRef<HTMLInputElement>(null)
  const [imgUrl, setImgUrl] = useState<string | ArrayBuffer | null>()
  const [imgFile, setImgFile] = useState<File>()

  const editMutation = useMutation(editProfileImg, {
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
  if (isLoading) {
    return <h1>로딩중</h1>
  }

  if (isError) {
    return <h1>에러</h1>
  }

  console.log(profileData)
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
      <MyPageBody />
      <MyPageContentsContainer>
        <MyPageEditContainer>
          <div>
            {imgUrl ? (
              <MyPageEditImg src={imgUrl as string} alt="이미지" />
            ) : (
              <MyPageEditImg
                src={profileData.profileUrl as string}
                alt="이미지를 등록해주세요"
              />
            )}
          </div>
          <input
            ref={imgRef}
            type="file"
            accept="image/*"
            onChange={onChangeImageHandler}
          />
          <div>
            <MyPageEditBtn onClick={onSubmitImageHandler}>
              회원 정보 저장
            </MyPageEditBtn>
          </div>
        </MyPageEditContainer>
      </MyPageContentsContainer>
      <Footer />
    </>
  )
}

export default MyPageEditProfile
