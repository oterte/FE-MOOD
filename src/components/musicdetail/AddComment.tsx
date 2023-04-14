import { useState, useCallback } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { addComment } from '../../api/comments'
import {
  AddCommentTextArea,
  Addform,
  Characters,
  CommentBtn,
  Hr,
} from '../../pages/musicDetail/MusicDetailSt'
import { onGetLocalStorage } from '../../util/cookie'
import CustomAlert from '../alret/CustomAlert'

interface Props {
  musicId: number
}

function AddComment({ musicId }: Props) {
  const [review, setReview] = useState('')
  const [showCustomAlert, setShowCustomAlert] = useState<boolean>(false)

  const queryClient = useQueryClient()
  const mutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments'])
    },
  })

  const onSubmitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const isLoggedIn = onGetLocalStorage('accessToken')
      if (isLoggedIn === null) {
        setShowCustomAlert(true)
        return
      }
      if (review.trim() === '') return
      mutation.mutate({ musicId, review })
      setReview('')
    },
    [mutation, musicId, review]
  )

  return (
    <>
      <CustomAlert
        showAlert={showCustomAlert}
        onHide={() => setShowCustomAlert(false)}
        message="로그인 후 이용 가능합니다."
      />
      <Addform onSubmit={onSubmitHandler}>
        <AddCommentTextArea
          value={review}
          onChange={(e) => {
            const text = e.target.value
            setReview(text)
          }}
          placeholder="게시물의 저작권 등 분쟁, 개인정보 노출로 인한 책임은 작성자 또는 게시자에게 있음을 유의해 주세요."
        />
        <Hr />
        <Characters>{review.length}/100</Characters>
        <CommentBtn type="submit">댓글 작성</CommentBtn>
      </Addform>
    </>
  )
}

export default AddComment
