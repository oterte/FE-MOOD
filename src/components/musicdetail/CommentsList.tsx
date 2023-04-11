import { useMutation, useQuery, useQueryClient } from 'react-query'
import React, { useEffect, useState } from 'react'
import { getComment, removeComment, editComment } from '../../api/comments'
import { BsCheck2All, BsTrashFill, BsFillPencilFill } from 'react-icons/bs'

import {
  Border,
  CommentInput,
  CommentsBox,
  DeleteBtn,
  EditBtn,
  EditCommentInput,
  Nickname,
  ShowRepliesBtn,
  Total,
  WriteDate,
} from '../../pages/musicDetail/MusicDetailSt'
import { Wrap } from '../../pages/musicDetail/MusicDetailSt'
import ReCommentsList from './ReCommentsList'
import AddRecomment from './AddRecomment'
import { onGetLocalStorage } from '../../util/cookie'

interface Comment {
  reviewId: number
  musicId: number
  review: string
  createdAt: string
  nickname: string
}

function CommentsList({ musicId }: { musicId: number }) {
  const queryClient = useQueryClient()
  const [edit, setEdit] = useState<number>(0)
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({})
  const [comments, setComments] = useState<Comment[]>([])
  const [showReplies, setShowReplies] = useState<{ [key: number]: boolean }>({})

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

  const toggleReplies = (reviewId: number) => {
    setShowReplies((prevState) => ({
      ...prevState,
      [reviewId]: !prevState[reviewId],
    }))
  }

  useEffect(() => {
    if (data) {
      setComments(data.comments)
    }
  }, [data])

  if (isLoading) return <h1>loading</h1>
  if (isError) return <h1>error</h1>

  const userName = onGetLocalStorage('nickname')

  return (
    <Wrap>
      <Total>최신댓글 ({data?.count})</Total>
      <Border>
        {comments.map((item) => {
          return (
            <div key={item.reviewId}>
              <CommentsBox>
                <Nickname>{item.nickname}</Nickname>
                <WriteDate>
                  {new Date(item.createdAt).toLocaleString()}
                </WriteDate>
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
                    <EditBtn type="submit">
                      <BsCheck2All size="36" color="4b372e" />
                    </EditBtn>
                  </form>
                ) : (
                  <>
                    <EditCommentInput>{item.review}</EditCommentInput>
                    {userName === item.nickname ? (
                      <>
                        <DeleteBtn
                          onClick={(e) => {
                            onClickDeleteButtonHandler(
                              item.musicId,
                              item.reviewId
                            )
                          }}
                        >
                          <BsTrashFill size="24" color="4b372e" />
                        </DeleteBtn>
                        <EditBtn
                          onClick={(e) => {
                            onClickEditButtonHandler(item.reviewId)
                            setInputValues((prevState) => ({
                              ...prevState,
                              [item.reviewId]: item.review,
                            }))
                          }}
                        >
                          <BsFillPencilFill size="23" color="4b372e" />
                        </EditBtn>
                      </>
                    ) : null}
                  </>
                )}
                <ShowRepliesBtn
                  onClick={(e) => {
                    toggleReplies(item.reviewId)
                  }}
                >
                  {showReplies[item.reviewId] ? '답글 숨기기' : '답글 보기'}
                </ShowRepliesBtn>
              </CommentsBox>
              {showReplies[item.reviewId] && (
                <div>
                  <ReCommentsList reviewId={item.reviewId} />
                  <AddRecomment reviewId={item.reviewId} />
                </div>
              )}
            </div>
          )
        })}
      </Border>
    </Wrap>
  )
}

export default CommentsList
