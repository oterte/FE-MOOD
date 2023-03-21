import { useState, useCallback } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { addComment } from '../../api/comments'
import {
  AddCommentInput,
  CommentBtn,
} from '../../pages/musicDetail/MusicDetailSt'

interface Props {
  musicId: number
}

function AddComment({ musicId }: Props) {
  const [review, setReview] = useState('')
  const queryClient = useQueryClient()
  const mutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments'])
    },
  })

  const onChangeCommentHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setReview(e.target.value)
    },
    []
  )

  const onSubmitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (review === '') return
      mutation.mutate({ musicId, review })
      setReview('')
    },
    [mutation, musicId, review]
  )

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <AddCommentInput
          value={review}
          onChange={onChangeCommentHandler}
          placeholder="댓글을 남겨주세요."
        />
        <CommentBtn type="submit">댓글 작성</CommentBtn>
      </form>
    </>
  )
}

export default AddComment
