import { useMutation, useQuery, useQueryClient } from 'react-query'
import React, { useEffect, useState } from 'react'
import { getComment, removeComment, editComment } from '../../api/comments'
import {
  CommentBox,
  CommentInput,
  EditCommentInput,
} from '../../pages/musicDetail/MusicDetailSt'
import { useParams } from 'react-router-dom'
import { Wrap } from '../header/HeaderSt'
import ReCommentsList from './ReCommentsList'
import AddRecomment from './AddRecomment'

interface Comment {
  reviewId: number
  musicId: number
  review: string
  createdAt: string
}

function CommentsList({ musicId }: { musicId: number }) {
  const params = useParams<{ id: string }>()
  const queryClient = useQueryClient()
  const [edit, setEdit] = useState<number>(0)
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({})
  const [comments, setComments] = useState<Comment[]>([])

  const { isLoading, isError, data } = useQuery(['comments', musicId], () =>
    getComment({ musicId })
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
    setInputValues((prevState) => ({
      ...prevState,
      [reviewId]: e.target.value,
    }))
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

  useEffect(() => {
    if (data) {
      setComments(data.comments)
    }
  }, [data])

  if (isLoading) {
    return <h1>loading</h1>
  }

  if (isError) {
    return <h1>error</h1>
  }

  return (
    <Wrap>
      <div>댓글 수: {data?.count}</div>
      {comments.map((item) => {
        return (
          <CommentBox key={item.reviewId}>
            <div>작성 시간: {new Date(item.createdAt).toLocaleString()}</div>
            {edit === item.reviewId ? (
              <form
                onSubmit={(e) =>
                  onSubmitEditHandler(e, item.musicId, item.reviewId)
                }
              >
                <CommentInput
                  type="text"
                  value={inputValues[item.reviewId]}
                  onChange={(e) => onChangeEditHandler(e, item.reviewId)}
                />
                <button type="submit">수정하기</button>
              </form>
            ) : (
              <>
                <EditCommentInput type="text" value={item.review} disabled />
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
                    setInputValues((prevState) => ({
                      ...prevState,
                      [item.reviewId]: item.review,
                    }))
                  }}
                >
                  수정하기
                </button>
              </>
            )}
            <div>
              <AddRecomment reviewId={item.reviewId} />
              <ReCommentsList reviewId={item.reviewId} />
            </div>
          </CommentBox>
        )
      })}
    </Wrap>
  )
}

export default CommentsList
