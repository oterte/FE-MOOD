import { QueryClient } from 'react-query'
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { addComment, getComment } from '../../api/comments'
import { CommentBtn, CommentInput } from '../../pages/musicDetail/MusicDetailSt'

function AddComment() {
  const [comment, setComment] = useState<string>('')

  const queryClient = new QueryClient()
  const mutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments'])
    },
  })

  const { data } = useQuery(['comments'], () =>
    getComment({ musicId: 'myMusicId' })
  )
  console.log(data)

  const onChangeCommentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }

  const onClickAddButtonHandler = () => {
    if (comment === '') return

    const newComment = {
      musicId: 'myMusicId',
      newComment: comment,
    }

    mutation.mutate(newComment)
    setComment('')
  }

  return (
    <>
      <CommentInput
        value={comment}
        onChange={onChangeCommentHandler}
        placeholder="댓글을 작성해 주세요."
      />
      <CommentBtn onClick={onClickAddButtonHandler}>댓글 작성</CommentBtn>
    </>
  )
}

export default AddComment
