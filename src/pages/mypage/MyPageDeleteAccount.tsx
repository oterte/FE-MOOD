import Header from '../../components/header/Header'
import {
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
} from './mypageSC'
import {
  MyPageBottomDiv,
  MyPageContentsContainer,
  MyPageDeleteBtn,
  MyPageDeleteBtnDiv,
  MyPageDeleteDivOne,
  MyPageDeleteDivTwo,
  MyPageDeleteInput,
  MyPageDeleteTab,
  MyPageTab,
  MyPageTabItem,
  POne,
  PThree,
  PTwo,
} from './mypagecontentsSC'
import Play from '../../components/playbar/Play'
import { useNavigate } from 'react-router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteAccount, showProfile } from '../../api/mypage'
import {
  onDeletetHandler,
  onRemoveToken,
} from '../../util/cookie'
function MyPageDelteAccount() {
  const { isLoading: profileLoading, data: profileData } = useQuery(
    ['profile'],
    showProfile
  )
  const queryClient = useQueryClient()
  const deleteMutation = useMutation(deleteAccount, {
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })

  const onDeleteAccountHandler = () => {
    if (!window.confirm('정말 회원 탈퇴를 진행하시겠습니까?')) {
      alert('취소되었습니다.')
    } else {
      // deleteMutation.mutate()
      // alert('탈퇴했습니다.')
      // navigate('/delete')
      deleteAccount()
        .then((res) => {
          onDeletetHandler('authorization')
          onRemoveToken()
          navigate('/delete')
        })
        .catch((error) => {
          console.log(error)
          console.log(error.response.data.message)
        })
    }
  }
  const navigate = useNavigate()

  if (profileLoading) {
    return <h1>로딩중..</h1>
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
        <MyPageTabItem
          onClick={() => {
            navigate('/mypageComment')
          }}
        >
          남긴 댓글
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
            navigate('/mypageEditprofile')
          }}
        >
          프로필 사진 변경
        </MyPageTabItem>
        <MyPageDeleteTab
          onClick={() => {
            navigate('/mypageDeleteaccount')
          }}
        >
          회원 탈퇴
        </MyPageDeleteTab>
      </MyPageTab>
      <MyPageContentsContainer>
        <MyPageDeleteDivOne>
          <POne>정말로 회원탈퇴 하시겠습니까?</POne>
          <PTwo>
            * 회원탈퇴 시 모든 회원정보는 삭제되며 복구할 수 없습니다.
          </PTwo>
        </MyPageDeleteDivOne>
        <MyPageDeleteDivTwo>
          <PThree>탈퇴하시려면 비밀번호를 입력해주세요.</PThree>
          <MyPageDeleteInput placeholder="비밀번호를 입력해주세요" />
          <MyPageDeleteBtnDiv>
            <MyPageDeleteBtn onClick={onDeleteAccountHandler}>
              탈퇴하기
            </MyPageDeleteBtn>
          </MyPageDeleteBtnDiv>
        </MyPageDeleteDivTwo>
      </MyPageContentsContainer>
      <MyPageBottomDiv />
    </>
  )
}

export default MyPageDelteAccount
