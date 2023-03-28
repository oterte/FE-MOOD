import { instance } from './instance'

// 댓글 조회
export const getComment = async ({ musicId }: { musicId: number }) => {
  const response = await instance.get(`/api/music/${musicId}/review`)
  return {
    count: response.data.reviews.count,
    comments: response.data.reviews.rows,
  }
}

// 대댓글 조회
export const getRecomment = async ({ reviewId }: { reviewId: number }) => {
  const response = await instance.get(`/api/review/${reviewId}/recomment`)
  return {
    recomments: response.data.reComments.rows,
  }
}

// 댓글 추가
export const addComment = async ({
  musicId,
  review,
}: {
  musicId: number
  review: string
}) => {
  await instance.post(`/api/music/${musicId}/review`, {
    review,
  })
}

// 대댓글 추가
export const addRecomment = async ({
  reviewId,
  comment,
}: {
  reviewId: number
  comment: string
}) => {
  await instance.post(`/api/review/${reviewId}/recomment`, {
    comment,
  })
}

// 댓글 삭제
export const removeComment = async ({
  musicId,
  reviewId,
}: {
  musicId: number
  reviewId: number
}) => {
  await instance.delete(`/api/music/${musicId}/review/${reviewId}`)
}

// 대댓글 삭제
export const removeRecomment = async ({
  reviewId,
  recommentId,
}: {
  reviewId: number
  recommentId: number
}) => {
  await instance.delete(`/api/review/${reviewId}/recomment/${recommentId}`)
}

// 댓글 수정
export const editComment = async ({
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
    {
      review: newComment,
    }
  )
  return response
}

// 대댓글 수정
export const editRecomment = async ({
  reviewId,
  reCommentId,
  newRecomment,
}: {
  reviewId: number
  reCommentId: number
  newRecomment: string
}) => {
  const response = await instance.put(
    `/api/review/${reviewId}/recomment/${reCommentId}`,
    { comment: newRecomment }
  )
  return response
}

// 작곡가 조회
export const getComposer = async ({ composer }: { composer: string }) => {
  const response = await instance.get(`/api/composer?composer=${composer}`)
  return response.data.imageUrl
}

// 음악 상세 정보 조회
export const getMusicDetail = async ({ musicId }: { musicId: number }) => {
  const response = await instance.get(`/api/music/${musicId}`)
  return response.data.data
}

// 작곡가별 추천
export const musicDetail = async ({ musicId }: { musicId: number }) => {
  const response = await instance.get(`/api/music/${musicId}`)
  return response
}
