import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { addRecomment } from '../../api/comments'
import { useParams } from 'react-router-dom'
import {
  AddReCommentInput,
  ReCommentBtn,
} from '../../pages/musicDetail/MusicDetailSt'

function AddRecomment({ reviewId }: { reviewId: number }) {
  const { id: musicId } = useParams<{ id: string }>()
  const [comment, setComment] = useState<string>('')
  const queryClient = useQueryClient()
  const mutation = useMutation(addRecomment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['recomments'])
    },
  })

  const onChangeCommentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }

  const onSubmitCommentHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (comment === '') return
    mutation.mutate({ reviewId, comment })
    setComment('')
  }

  return (
    <>
      <form onSubmit={onSubmitCommentHandler}>
        <AddReCommentInput
          value={comment}
          onChange={onChangeCommentHandler}
          placeholder="대댓글을 남겨주세요."
        />
        <ReCommentBtn type="submit">대댓글 작성</ReCommentBtn>
      </form>
    </>
  )
}

export default AddRecomment
