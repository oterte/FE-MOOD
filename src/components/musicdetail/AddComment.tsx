import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { addComment } from '../../api/comments'
import {
  AddCommentInput,
  CommentBtn,
} from '../../pages/musicDetail/MusicDetailSt'
import { useParams } from 'react-router-dom'

function AddComment({ parentId }: { parentId?: number }) {
  const params = useParams()
  const [review, setReview] = useState<string>('')
  const queryClient = useQueryClient()
  const mutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments'])
    },
  })

  const onChangeCommentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value)
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (review === '') return
    const id = Number(params.id)
    mutation.mutate({ id, review })

    setReview('')
  }

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