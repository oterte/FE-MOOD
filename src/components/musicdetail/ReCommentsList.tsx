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
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
  }
  const params = useParams<{ id: string }>()
  const queryClient = useQueryClient()
  const [edit, setEdit] = useState<number>(0)
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({})
  const [recomments, setRecomments] = useState([])

  const {
    isLoading: isLoadingRecomments,
    isError: isErrorRecomments,
    data: recommentsData,
  } = useQuery(['recomments', reviewId], () => getRecomment({ reviewId }), {
    enabled: reviewId !== undefined,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  })

  const deleteRecommentMutation = useMutation(removeRecomment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['recomments'])
    },
  })

  const editRecommentMutation = useMutation(editRecomment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['recomments'])
    },
  })

  const onClickEditRecommentButtonHandler = (recommentId: number) => {
    setEdit(recommentId)
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
    recommentId: number
  ) => {
    e.preventDefault()
    const newRecomment = inputValues[recommentId] || ''
    editRecommentMutation.mutate({ reviewId, recommentId, newRecomment })
    setEdit(0)
  }

  const onClickDeleteRecommentButtonHandler = (
    reviewId: number,
    recommentId: number
  ) => {
    deleteRecommentMutation.mutate({ reviewId, recommentId })
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
                      value={
                        inputValues[recomment.reCommentId] || recomment.comment
                      }
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
                        onClickEditRecommentButtonHandler(recomment.reCommentId)
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
