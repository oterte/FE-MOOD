import { useMutation, useQuery, useQueryClient } from 'react-query'
import React, { useState } from 'react'
import { getComment, removeComment, editComment } from '../../api/comments'
import { CommentBox } from '../../pages/musicDetail/MusicDetailSt'
import { useParams } from 'react-router-dom'

function CommentsList() {
  const params = useParams()
  const queryClient = useQueryClient()
  const [edit, setEdit] = useState(0)
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({})

  const { isLoading, isError, data } = useQuery(['comments'], () =>
    getComment({ musicId: Number(params.id) })
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

  const onClickEditButtonHandler = (reviewId: number) => {
    setEdit(reviewId)
  }

  const onChangeEditHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    reviewId: number
  ) => {
    setInputValues({
      ...inputValues,
      [reviewId]: e.target.value,
    })
  }

  const onSubmitEditHandler = (
    e: React.FormEvent<HTMLFormElement>,
    musicId: number,
    reviewId: number
  ) => {
    e.preventDefault()
    const newComment = inputValues[reviewId] || ''
    editMutation.mutate({ musicId, reviewId, newComment })
    setEdit(0)
  }

  const onClickDeleteButtonHandler = (musicId: number, reviewId: number) => {
    deleteMutation.mutate({ musicId, reviewId })
  }

  if (isLoading) {
    return <h1>loading</h1>
  }

  if (isError) {
    return <h1>error</h1>
  }

  console.log(data)

  return (
    <>
      {data.map((item: any) => {
        return (
          <CommentBox key={item.reviewId}>
            {edit === item.reviewId ? (
              <form
                onSubmit={(e) =>
                  onSubmitEditHandler(e, item.musicId, item.reviewId)
                }
              >
                <input
                  type="text"
                  value={inputValues[item.reviewId] || item.review}
                  onChange={(e) => onChangeEditHandler(e, item.reviewId)}
                />
                <button type="submit">수정하기</button>
              </form>
            ) : (
              <>
                <input
                  type="text"
                  value={inputValues[item.reviewId] || item.review}
                  onChange={(e) => {
                    setInputValues({
                      ...inputValues,
                      [item.reviewId]: e.target.value,
                    })
                  }}
                />
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
