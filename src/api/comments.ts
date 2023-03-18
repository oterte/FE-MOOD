import { instance } from './instance'

// 댓글 조회
export const getComment = async ({ musicId }: { musicId: number }) => {
  const response = await instance.get(`/api/music/${musicId}/review`)
  return response.data.reviews
}

// 대댓글 조회
export const getRecomment = async ({ reviewId }: { reviewId: number }) => {
  const response = await instance.get(`/api/review/${reviewId}/recomment`);
  return response.data.comments;
};


// 댓글 추가
export const addComment = async ({
  id,
  review,
}: {
  id: number
  review: string
}) => {
  console.log(review)
  await instance.post(`/api/music/${id}/review`, {
    review,
  })
}

// 대댓글 추가
export const addRecomment = async ({
  reviewId,
  parentId,
  body,
}: {
  reviewId: number
  parentId: number
  body: string
}) => {
  await instance.post(`/api/review/${reviewId}/recomment`, {
    parentId,
    body,
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
  recommentId,
  newRecomment,
}: {
  reviewId: number
  recommentId: number
  newRecomment: string
}) => {
  const response = await instance.put(
    `/api/review/${reviewId}/recomment/${recommentId}`,
    { recomment: newRecomment }
  )
  return response
}

// 작곡가별 조회
export const musicDetail = async ({ musicId }: { musicId: number }) => {
  const response = await instance.get(`/api/music/${musicId}`)
  return response
}
