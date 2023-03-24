import React,{useRef, useState} from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import {
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
  MyPageProfileImgContainer,
} from './mypageSC'
import {
  MyPageContentsContainer,
  MyPageTab,
  MyPageTabItem,
} from './mypagecontentsSC'
import { useNavigate } from 'react-router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { editProfileImg, showComment, showProfile, showReComment } from '../../api/mypage'
function MyPageEditProfile() {
  const queryClient = useQueryClient()
  const {isLoading, isError, data} = useQuery(['myComment'], showReComment)
  const {isLoading:profileLoading,  data:profileData} = useQuery(['profile'], showProfile)
  const navigate = useNavigate()
  const imgRef:any = useRef<HTMLInputElement>(null)
  const [imgUrl, setImgUrl] = useState<string | ArrayBuffer | null>()
  const [imgFile, setImgFile] = useState<File>()

  const editMutation = useMutation(editProfileImg , {
    onSuccess : () => {
      queryClient.invalidateQueries()
    }
  })


  const onChangeImageHandler = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0]
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImgUrl(reader.result)
      setImgFile(file)
    }
  }

  const onSubmitImageHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const data = new FormData()
    data.append("image", imgFile as File)
    editMutation.mutate(data)
  }
  if(isLoading) {
    return <h1>로딩중</h1>
  }
  if(profileLoading){
    return <h1>로딩중..</h1>
  }
  if(isError) {
    return <h1>에러</h1>
  }

  console.log(data)
  console.log(profileData)
  return (
    <>
      <Header />
      <MyPageProfileContainer>
        <MyPageProfileImgContainer>
          <MyPageProfileImgBox>
            <MyPageProfileImg src={profileData.profileUrl} />
          </MyPageProfileImgBox>
        </MyPageProfileImgContainer>
        <MyPageProfileBodyContainer>
          <div>
            <h1>{profileData.nickname} 님 환영합니다</h1>
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
            navigate('/mypageScrap')
          }}
        >
          스크랩 음악
        </MyPageTabItem>
        <MyPageTabItem
          onClick={() => {
            navigate('/mypageComment')
          }}
        >
          남긴 댓글
        </MyPageTabItem>
        <MyPageTabItem
          onClick={() => {
            navigate('/mypagerecomment')
          }}
        >
          남긴 대댓글
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
            navigate('/mypageScrap')
          }}
        >
          감정 히스토리
        </MyPageTabItem>
        <MyPageTabItem onClick={() => {
            navigate('/mypageEditprofile')
          }}>프로필 사진 변경</MyPageTabItem>
        <MyPageTabItem onClick={() => {
            navigate('/mypageDeleteaccount')
          }}>회원 탈퇴</MyPageTabItem>
      </MyPageTab>
      <MyPageContentsContainer>
       <input 
        ref={imgRef}
        type='file'
        accept='image/*'
        onChange={onChangeImageHandler}
       />
       {
        imgUrl ? <img src={imgUrl as string} alt="이미지"/> : null
       }
       <button onClick={onSubmitImageHandler}>프로필 이미지 수정</button>
      </MyPageContentsContainer>
      <Footer />
    </>
  )
}

export default MyPageEditProfile
