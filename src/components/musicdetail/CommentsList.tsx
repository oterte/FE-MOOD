import { QueryClient } from 'react-query'
import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { getComment, removeComment, editComment } from '../../api/comments'
import { CommentBox } from '../../pages/musicDetail/MusicDetailSt'
import { useParams } from 'react-router-dom'

function CommentsList() {
  const params = useParams()
  const queryClient = new QueryClient()
  const [edit, setEdit] = useState(0)

  const { isLoading, isError, data } = useQuery(['comments'], () =>
    getComment({ musicId: 1 })
  )

  const deleteMutation = useMutation(removeComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments'])
    },
  })

  const editMutation = useMutation(editComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments'])
    },
  })

  const onClickEditButtonHandler = (musicId: number) => {
    setEdit(musicId)
  }

  const onChangeEditHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdit(Number(e.target.value))
  }

  const onSubmitEditHandler = (
    e: React.FormEvent<HTMLFormElement>,
    musicId: number,
    reviewId: number
  ) => {
    e.preventDefault()
    editMutation.mutate({ musicId, reviewId, newComment: edit.toString() })
    setEdit(0)
  }

  const onClickDeleteButtonHandler = (musicId: number, reviewId: number) => {
    deleteMutation.mutate({ musicId, reviewId })
  }

  if (isLoading) {
    return <h1>로딩중 ..!</h1>
  }

  if (isError) {
    return <h1>오류가 발생하였습니다..!</h1>
  }

  console.log(data)

  return (
    <>
      {data.map(function (item: any) {
        return (
          <CommentBox key={item.reviewId}>
            {edit === item.id ? (
              <form
                onSubmit={(e) => onSubmitEditHandler(e, item.music_id, item.id)}
              >
                <input
                  type="text"
                  value={edit}
                  onChange={onChangeEditHandler}
                />
                <button type="submit">수정하기</button>
              </form>
            ) : (
              <>
                <p>{item.review}</p>
                <button
                  onClick={() => {
                    onClickDeleteButtonHandler(item.musicId, item.reviewId)
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    onClickEditButtonHandler(item.reviewId)
                  }}
                >
                  수정하기
                </button>
              </>
            )}
          </CommentBox>
        )
      })}
    </>
  )
}

export default CommentsList
