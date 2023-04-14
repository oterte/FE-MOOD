import React, { useCallback, useState } from 'react'
import Heart from '../../assets/icons/Heart_brown.png'
import FillHeart from '../../assets/icons/Heart_fill_brown.png'
import { toggleLike } from '../../api/chart'
import { LikeWrap } from './LikeSt'
import { onGetCookieHandler } from '../../util/cookie'
import CustomAlert from '../alret/CustomAlert'

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

const LikeCount: React.FC<LikeCountProps> = React.memo(
  ({ musicId, likeCount, likeStatus, onLikeUpdate }) => {
    const [showCustomAlert, setShowCustomAlert] = useState<boolean>(false)

    const handleLikeButtonClick = useCallback(async () => {
      if (!musicId) {
        return
      }
      const token = onGetCookieHandler('accessToken')
      if (!token) {
        setShowCustomAlert(true)
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
    }, [musicId, likeCount, likeStatus, onLikeUpdate])

    const likeImage = likeStatus ? FillHeart : Heart

    return (
      <>
        <CustomAlert
          showAlert={showCustomAlert}
          onHide={() => setShowCustomAlert(false)}
          message="로그인 후 이용 가능합니다."
        />
        <LikeWrap>
          <img
            src={likeImage}
            alt={likeStatus ? 'liked' : 'unliked'}
            onClick={handleLikeButtonClick}
            style={{ width: '25px', height: '25px' }}
          />
          {likeCount > 0 && <span>{likeCount}</span>}
        </LikeWrap>
      </>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.musicId === nextProps.musicId &&
      prevProps.likeCount === nextProps.likeCount &&
      prevProps.likeStatus === nextProps.likeStatus
    )
  }
)

export default LikeCount
