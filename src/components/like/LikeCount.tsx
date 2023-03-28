import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { toggleLike } from '../../api/chart'
import { Cookies } from 'react-cookie'
import { LikeWrap } from './LikeSt'

interface LikeCountProps {
  musicId?: number
  likeCount: number
  likeStatus: boolean
  onLikeUpdate: (
    musicId: number,
    likeStatus: boolean,
    likeCount: number
  ) => void
}

const cookies = new Cookies()

const LikeCount: React.FC<LikeCountProps> = React.memo(
  ({ musicId, likeCount, likeStatus, onLikeUpdate }) => {
    const handleLikeButtonClick = async () => {
      if (!musicId) return
      const token = cookies.get('authorization')
      if (!token) {
        alert('로그인 후 이용 가능합니다.')
        return
      }
      const newIsLiked = !likeStatus
      const newCount = likeCount + (newIsLiked ? 1 : -1)
      try {
        await toggleLike({ musicId })
        onLikeUpdate(musicId, newIsLiked, newCount)
      } catch (error) {
        console.error(error)
      }
    }

    const LikeIcon = likeStatus ? AiFillHeart : AiOutlineHeart

    return (
      <LikeWrap>
        <LikeIcon size={30} onClick={handleLikeButtonClick} />
        {likeCount > 0 && <span>{likeCount}</span>}
      </LikeWrap>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.likeCount === nextProps.likeCount &&
      prevProps.likeStatus === nextProps.likeStatus
    )
  }
)

export default LikeCount
