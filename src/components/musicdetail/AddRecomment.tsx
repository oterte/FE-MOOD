import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { addRecomment } from '../../api/comments'
import {
  AddCommentInput,
  CommentBtn,
} from '../../pages/musicDetail/MusicDetailSt'
import { useParams } from 'react-router-dom'

function AddRecomment({ parentId }: { parentId: number }) {
  const params = useParams()
  const [recomment, setRecomment] = useState<string>('')
  const queryClient = useQueryClient()
  const mutation = useMutation(addRecomment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['recomments'])
    },
  })

  const onChangeRecommentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecomment(e.target.value)
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (recomment === '') return
    const reviewId = Number(params.id)
    mutation.mutate({ reviewId, parentId, body: recomment })

    setRecomment('')
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <AddCommentInput
          value={recomment}
          onChange={onChangeRecommentHandler}
          placeholder="대댓글을 남겨주세요."
        />
        <CommentBtn type="submit">대댓글 작성</CommentBtn>
      </form>
    </>
  )
}

export default AddRecomment
