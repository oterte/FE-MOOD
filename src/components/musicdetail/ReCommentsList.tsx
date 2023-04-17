import React, { useState, useEffect } from 'react'
import {
  getRecomment,
  removeRecomment,
  editRecomment,
} from '../../api/comments'
import {
  ReCommentBox,
  ReCommentInput,
  ReCommentsListWrap,
  ReDeleteBtn,
  ReEditBtn,
  ReNickname,
  ReWriteDate,
} from '../../pages/musicDetail/MusicDetailSt'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { BsFillPencilFill, BsCheck2All, BsTrashFill } from 'react-icons/bs'
import { onGetLocalStorage } from '../../util/cookie'
import { IoReturnDownForwardSharp } from 'react-icons/io5'
interface RecommentData {
  comment:string
  createdAt:string
  nickname:string
  reCommentId:number
  reviewId:number
  updatedAt:string
  userId:number
}

function ReCommentsList({ reviewId }: { reviewId: number }) {
  const queryClient = useQueryClient()
  const [edit, setEdit] = useState<number>(0)
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({})
  const [recomments, setRecomments] = useState<RecommentData[]>([])

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

  const userName = onGetLocalStorage('nickname')

  useEffect(() => {
    if (recommentsData) {
      setRecomments(recommentsData.recomments)
    }
  }, [recommentsData])

  if (isLoadingRecomments) return <h1>loading</h1>
  if (isErrorRecomments) return <h1>error</h1>

  return (
    <ReCommentsListWrap>
      {recomments &&
        recomments.length > 0 &&
        recomments.map((recomment: RecommentData) => {
          if (recomment.reviewId === reviewId) {
            return (
              <ReCommentBox key={recomment.reCommentId}>
                <IoReturnDownForwardSharp className="icon" size="20" />
                <ReNickname>{recomment.nickname}</ReNickname>
                <ReWriteDate>
                  {new Date(recomment.createdAt).toLocaleString()}
                </ReWriteDate>
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
                    <ReEditBtn type="submit">
                      {' '}
                      <BsCheck2All size="30" color="4b372e" />
                    </ReEditBtn>
                  </form>
                ) : (
                  <>
                    <span>{recomment.comment}</span>
                    {userName === recomment.nickname ? (
                      <>
                        <ReDeleteBtn
                          onClick={() => {
                            onClickDeleteRecommentButtonHandler(
                              reviewId,
                              recomment.reCommentId
                            )
                          }}
                        >
                          <BsTrashFill size="20" color="4b372e" />
                        </ReDeleteBtn>
                        <ReEditBtn
                          onClick={() => {
                            onClickEditRecommentButtonHandler(
                              recomment.reCommentId,
                              recomment.comment
                            )
                          }}
                          disabled={edit !== 0}
                        >
                          <BsFillPencilFill size="20" color="4b372e" />
                        </ReEditBtn>
                      </>
                    ) : null}
                  </>
                )}
              </ReCommentBox>
            )
          }
        })}
    </ReCommentsListWrap>
  )
}

export default ReCommentsList
