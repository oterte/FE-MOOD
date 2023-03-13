import { QueryClient } from 'react-query'
import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { getComment, removeComment, editComment } from '../../api/comments'
import { CommentBox } from '../../pages/musicDetail/MusicDetailSt'

function CommentsList() {
  const queryClient = new QueryClient()
  const [edit, setEdit] = useState('')

  const { isLoading, isError, data } = useQuery(['comments'], () =>
    getComment({ musicId: '1' })
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

  const onClickEditButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    musicId: string
  ) => {
    e.preventDefault()
    setEdit(musicId)
  }

  const onChangeEditHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdit(e.target.value)
  }

  const onSubmitEditHandler = (
    e: React.FormEvent<HTMLFormElement>,
    musicId: string,
    newComment: string
  ) => {
    e.preventDefault()
    editMutation.mutate({ musicId, newComment })
    setEdit('')
  }

  if (isLoading) {
    return <h1>로딩중 ..!</h1>
  }

  if (isError) {
    return <h1>오류가 발생하였습니다..!</h1>
  }

  return (
    <>
      {data?.data.map(function (item: any) {
        return (
          <CommentBox key={item.id}>
            {edit === item.id ? (
              <form onSubmit={(e) => onSubmitEditHandler(e, item.id, edit)}>
                <input
                  type="text"
                  value={edit}
                  onChange={onChangeEditHandler}
                />
                <button type="submit">수정하기</button>
              </form>
            ) : (
              <>
                <p>{item.comment}</p>
                <button
                  onClick={() => {
                    deleteMutation.mutate(item.id)
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={(e) => {
                    onClickEditButtonHandler(e, item.id)
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
