import { useMutation, useQuery, useQueryClient } from 'react-query'
import React, { useState } from 'react'
import {
  getComment,
  removeComment,
  editComment,
  getRecomment,
  addRecomment,
  removeRecomment,
  editRecomment,
} from '../../api/comments'
import {
  CommentBox,
  CommentInput,
  EditCommentInput,
} from '../../pages/musicDetail/MusicDetailSt'
import { useParams } from 'react-router-dom'
import { Wrap } from '../header/HeaderSt'
import AddRecomment from '../../components/musicdetail/AddRecomment'

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

  // 대댓글 관련 추가 코드
  const {
    isLoading: isLoadingRecomments,
    isError: isErrorRecomments,
    data: recommentsData,
  } = useQuery(['recomments'], () =>
    getRecomment({ reviewId: Number(params.id) })
  )

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

  if (isLoading || isLoadingRecomments) {
    return <h1>loading</h1>
  }

  if (isError || isErrorRecomments) {
    return <h1>error</h1>
  }

  return (
    <Wrap>
      {data.map((item: any) => {
        return (
          <CommentBox key={item.reviewId}>
            {edit === item.reviewId ? (
              <form
                onSubmit={(e) =>
                  onSubmitEditHandler(e, item.musicId, item.reviewId)
                }
              >
                <CommentInput
                  type="text"
                  value={inputValues[item.reviewId] || item.review}
                  onChange={(e) => onChangeEditHandler(e, item.reviewId)}
                />
                <button type="submit">수정하기</button>
              </form>
            ) : (
              <>
                <EditCommentInput
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
            <div>
              <AddRecomment parentId={item.reviewId} />
              {recommentsData
                .filter(
                  (recomment: any) => recomment.parentId === item.reviewId
                )
                .map((recomment: any) => (
                  <div key={recomment.recommentId}>
                    {edit === recomment.recommentId ? (
                      <form
                        onSubmit={(e) =>
                          onSubmitEditRecommentHandler(
                            e,
                            item.reviewId,
                            recomment.recommentId
                          )
                        }
                      >
                        <CommentInput
                          type="text"
                          value={
                            inputValues[recomment.recommentId] || recomment.body
                          }
                          onChange={(e) =>
                            onChangeEditRecommentHandler(
                              e,
                              recomment.recommentId
                            )
                          }
                        />
                        <button type="submit">수정하기</button>
                      </form>
                    ) : (
                      <>
                        <EditCommentInput
                          type="text"
                          value={
                            inputValues[recomment.recommentId] || recomment.body
                          }
                          onChange={(e) => {
                            setInputValues({
                              ...inputValues,
                              [recomment.recommentId]: e.target.value,
                            })
                          }}
                        />
                        <button
                          onClick={() => {
                            onClickDeleteRecommentButtonHandler(
                              item.reviewId,
                              recomment.recommentId
                            )
                          }}
                        >
                          삭제
                        </button>
                        <button
                          onClick={() => {
                            onClickEditRecommentButtonHandler(
                              recomment.recommentId
                            )
                          }}
                        >
                          수정하기
                        </button>
                      </>
                    )}
                  </div>
                ))}
            </div>
          </CommentBox>
        )
      })}
    </Wrap>
  )
}

export default CommentsList
