import React from 'react'
import Heart from '../../assets/icons/Heart_brown.png'
import FillHeart from '../../assets/icons/heart_white.png'
import { toggleLike } from '../../api/chart'
import { Cookies } from 'react-cookie'
import { LikeWrap } from './LikeSt'

interface MyPageLikeProps {
  musicId?: number
  likeStatus: boolean
  onLikeUpdate: (
    musicId: number,
    likeStatus: boolean,
  ) => void
}

const cookies = new Cookies()

const MyPageLike: React.FC<MyPageLikeProps> = React.memo(
  ({ musicId,  likeStatus, onLikeUpdate }) => {
    const handleLikeButtonClick = async () => {
      if (!musicId) {
        console.log("id 없음")
        return
      }
      const token = cookies.get('authorization')
      if (!token) {
        alert('로그인 후 이용 가능합니다.')
        return
      }
      const newIsLiked = !likeStatus
      try {
        await toggleLike({ musicId })
        onLikeUpdate(musicId, newIsLiked)
      } catch (error) {
        console.error(error)
      }
    }

    const likeImage = likeStatus ? FillHeart : Heart

    return (
      <LikeWrap>
        <img
          src={likeImage}
          alt={likeStatus ? 'liked' : 'unliked'}
          onClick={handleLikeButtonClick}
          style={{ width: '25px', height: '25px' }}
        />
        
      </LikeWrap>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.likeStatus === nextProps.likeStatus
    )
  }
)

export default MyPageLike
