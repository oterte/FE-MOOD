import React from 'react'
import { LikeWrap } from './LikeSt'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { toggleLike } from '../../api/chart'
import { Cookies } from 'react-cookie'

interface LikeCountProps {
  musicId: number | undefined
  likeCount: number
  likeStatus: boolean
  onLikeUpdate: (
    musicId: number,
    likeStatus: boolean,
    likeCount: number
  ) => void
}

function LikeCount({
  musicId,
  likeCount,
  likeStatus,
  onLikeUpdate,
}: LikeCountProps) {
  const cookies = new Cookies()

  const handleLikeButtonClick = async (musicId: number | undefined) => {
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
      <LikeIcon size="30" onClick={() => handleLikeButtonClick(musicId)} />
      <span>{likeCount > 0 ? likeCount : ''}</span>
    </LikeWrap>
  )
}

export default React.memo(LikeCount, (prevProps, nextProps) => {
  return (
    prevProps.likeCount === nextProps.likeCount &&
    prevProps.likeStatus === nextProps.likeStatus
  )
})
