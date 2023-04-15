import React, { useState, useRef } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { changeNickname, editProfileImg, showProfile } from '../../api/mypage'
import '../../pages/mypage/mypagePagination.css'
import {
  EditDiv,
  ExternalContainer,
  MyPageContentsContainer,
  MyPageEditBtnTwo,
  MyPageEditContainer,
  MyPageEditImg,
  MyPageImgBtnWrap,
  MyPageImgEditInput,
  MyPageInput,
  MyPageInputBtn,
  MyPageInputContainer,
  MyPageInputLabel,
} from '../../pages/mypage/mypagecontentsSC'
import baseProifle from '../../assets/icons/Heart_fill_white copy.png'
import { BsPlusLg } from 'react-icons/bs'
import { onSetLocalStorageHandler } from '../../util/cookie'
import { checkNickname } from '../../api/signup'
function MyPageEdits() {
  const queryClient = useQueryClient()
  const imgRef:any  = useRef<HTMLInputElement | null>(null)
  const [imgUrl, setImgUrl] = useState<string | ArrayBuffer | null>()
  const [imgFile, setImgFile] = useState<File>()
  const [newNickname, setNewNickname] = useState('')
  const { isLoading: profLoading, data: profData } = useQuery(
    ['profile'],
    showProfile
  )
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
    if (file.size > 5 * 1024 * 1024) {
      alert('파일 크기는 최대 5MB 입니다')
      setImgUrl(null)
    } else {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImgUrl(reader.result)
        setImgFile(file)
      }
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
    if (regExp.test(newNickname) && newNickname !== '') {
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
    } else if (regExp.test(newNickname) === false) {
      alert('닉네임은 2자리 이상, 8자리 이하여야 합니다.')
    }
  }
  if (profLoading) return <p></p>
  return (
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
              <MyPageEditBtnTwo type="submit" onClick={onChangeNicknameHandler}>
                닉네임 변경
              </MyPageEditBtnTwo>
            </form>
          </MyPageInputContainer>
        </MyPageEditContainer>
      </ExternalContainer>
    </MyPageContentsContainer>
  )
}

export default React.memo(MyPageEdits)
