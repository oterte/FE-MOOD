import React, { useState, useEffect } from 'react'
import {
  getRecomment,
  removeRecomment,
  editRecomment,
} from '../../api/comments'
import {
  CommentBox,
  ReCommentInput,
} from '../../pages/musicDetail/MusicDetailSt'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'

function ReCommentsList({ reviewId }: { reviewId: number }) {
  const params = useParams<{ id: string }>()
  const queryClient = useQueryClient()
  const [edit, setEdit] = useState<number>(0)
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({})
  const [recomments, setRecomments] = useState<any[]>([])

  const {
    isLoading: isLoadingRecomments,
    isError: isErrorRecomments,
    data: recommentsData,
  } = useQuery(['recomments', reviewId], () => getRecomment({ reviewId }))

  const deleteRecommentMutation = useMutation(removeRecomment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['recomments', reviewId])
    },
  })

  const editRecommentMutation = useMutation(editRecomment, {
    onSuccess: (response) => {
      setRecomments((prevState) =>
        prevState.map((recomment) =>
          recomment.reCommentId === response.data.reCommentId
            ? response.data
            : recomment
        )
      )
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [response.data.reCommentId]: response.data.comment,
      }))
      queryClient.invalidateQueries(['recomments', reviewId])
    },
  })

  useEffect(() => {
    if (recommentsData) {
      setRecomments(recommentsData.recomments)
    }
  }, [recommentsData, editRecommentMutation.isSuccess])

  const onClickEditRecommentButtonHandler = (
    reCommentId: number,
    currentComment: string
  ) => {
    setInputValues({
      ...inputValues,
      [reCommentId]: currentComment,
    })
    setEdit(reCommentId)
  }

  const onChangeEditRecommentHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    recommentId: number
  ) => {
    setInputValues({
      ...inputValues,
      [recommentId]: e.target.value,
    })
  }

  const onSubmitEditRecommentHandler = (
    e: React.FormEvent<HTMLFormElement>,
    reviewId: number,
    reCommentId: number
  ) => {
    e.preventDefault()
    const newRecomment = inputValues[reCommentId] || ''
    editRecommentMutation.mutate(
      { reviewId, reCommentId, newRecomment },
      {
        onSuccess: (response) => {
          setRecomments((prevRecomments) =>
            prevRecomments.map((recomment) =>
              recomment.reCommentId === response.data.reCommentId
                ? response.data
                : recomment
            )
          )
        },
      }
    )
    setEdit(0)
  }

  const onClickDeleteRecommentButtonHandler = (
    reviewId: number,
    reCommentId: number
  ) => {
    deleteRecommentMutation.mutate({ reviewId, recommentId: reCommentId })
  }

  useEffect(() => {
    if (recommentsData) {
      setRecomments(recommentsData.recomments)
    }
  }, [recommentsData])

  if (isLoadingRecomments) {
    return <h1>loading</h1>
  }

  if (isErrorRecomments) {
    return <h1>error</h1>
  }

  return (
    <div>
      {recomments &&
        recomments.length > 0 &&
        recomments.map((recomment: any) => {
          if (recomment.reviewId === reviewId) {
            return (
              <CommentBox key={recomment.reCommentId}>
                {edit === recomment.reCommentId ? (
                  <form
                    onSubmit={(e) =>
                      onSubmitEditRecommentHandler(
                        e,
                        reviewId,
                        recomment.reCommentId
                      )
                    }
                  >
                    <ReCommentInput
                      type="text"
                      value={inputValues[recomment.reCommentId]}
                      onChange={(e) =>
                        onChangeEditRecommentHandler(e, recomment.reCommentId)
                      }
                    />
                    <button type="submit">수정하기</button>
                  </form>
                ) : (
                  <>
                    <span>{recomment.comment}</span>
                    <button
                      onClick={() => {
                        onClickDeleteRecommentButtonHandler(
                          reviewId,
                          recomment.reCommentId
                        )
                      }}
                    >
                      삭제
                    </button>
                    <button
                      onClick={() => {
                        onClickEditRecommentButtonHandler(
                          recomment.reCommentId,
                          recomment.comment
                        )
                      }}
                      disabled={edit !== 0}
                    >
                      수정하기
                    </button>
                  </>
                )}
              </CommentBox>
            )
          }
        })}
    </div>
  )
}

export default ReCommentsList
