import { instance } from './instance'

// 조회
const getComment = async ({ musicId }: { musicId: string }) => {
  const response = await instance.get(`/api/music/${musicId}/review`)
  console.log(response.data)
  return response
}

// 추가
const addComment = async ({
  musicId,
  newComment,
}: {
  musicId: string
  newComment: string
}) => {
  await instance.post(`/api/music/${musicId}/review`, {
    musicId,
    newComment,
  })
}

// 삭제
const removeComment = async ({
  musicId,
  newComment,
}: {
  musicId: string
  newComment: string
}) => {
  await instance.delete(`/api/music/${musicId}/review/${newComment}`)
}

// 수정
const editComment = async ({
  musicId,
  newComment,
}: {
  musicId: string
  newComment: string
}) => {
  const response = await instance.put(
    `/api/music/${musicId}/review/${newComment}`,
    { newComment }
  )
  return response
}

// 음악 상세 조회
const musicDetail = async ({
  musicId,
}: {
  musicId: string
}) => {
  const response = await instance.get(
    `/api/music/${musicId}`,
  )
  return response
}


export { getComment, addComment, removeComment, editComment, musicDetail}
