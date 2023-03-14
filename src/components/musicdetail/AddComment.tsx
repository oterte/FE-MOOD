import { QueryClient } from 'react-query'
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { addComment } from '../../api/comments'
import { CommentBtn, CommentInput } from '../../pages/musicDetail/MusicDetailSt'
import { useParams } from 'react-router-dom'

function AddComment() {
  const params = useParams()
  const [review, setReview] = useState<string>('')
  const queryClient = new QueryClient()
  const mutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments'])
    },
  })

  const dummyData = [
    { id: 1, content: '첫 번째 댓글' },
    { id: 2, content: '두 번째 댓글' },
    { id: 3, content: '세 번째 댓글' },
  ]

  // const { data, isLoading, isError } = useQuery(['comments'], () => dummyData);

  const onChangeCommentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value)
  }

  const onClickAddButtonHandler = () => {
    if (review === '') return
    const id = Number(params.id)
    mutation.mutate({ id, review })

    setReview('')
  }

  return (
    <>
      {/* 더미 데이터를 활용하여 댓글 목록 출력 */}
      <ul>
        {dummyData?.map((review: any) => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>

      <CommentInput
        value={review}
        onChange={onChangeCommentHandler}
        placeholder="댓글을 작성해 주세요."
      />
      <CommentBtn onClick={onClickAddButtonHandler}>댓글 작성</CommentBtn>
    </>
  )
}

export default AddComment
