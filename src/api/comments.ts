import { instance } from './instance'

// 조회
const getComment = async ({ musicId }: { musicId: number }) => {
  const response = await instance.get(`/api/music/${musicId}/review`)
  return response.data.reviews
}

// 추가
const addComment = async ({ id, review }: { id: number; review: string }) => {
  console.log(review)
  await instance.post(`/api/music/${id}/review`, {
    review,
  })
}

// 삭제
const removeComment = async ({
  musicId,
  reviewId,
}: {
  musicId: number
  reviewId: number
}) => {
  const musicNumber = String(musicId)
  const reviewNumber = String(reviewId)
  await instance.delete(`/api/music/${musicNumber}/review/${reviewNumber}`)
}

// 수정
const editComment = async ({
  musicId,
  reviewId,
  newComment,
}: {
  musicId: number
  reviewId: number
  newComment: string
}) => {
  const response = await instance.put(
    `/api/music/${musicId}/review/${reviewId}`,
    { review: newComment }
  )
  return response
}

// 음악 상세 조회
const musicDetail = async ({ musicId }: { musicId: number }) => {
  const response = await instance.get(`/api/music/${musicId}`)
  return response
}

export { getComment, addComment, removeComment, editComment, musicDetail }
