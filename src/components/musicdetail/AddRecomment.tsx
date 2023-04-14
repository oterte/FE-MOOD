import { useCallback, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { addRecomment } from '../../api/comments'
import {
  AddReCommentTextArea,
  AddReform,
  ReCharacters,
  ReCommentBtn,
} from '../../pages/musicDetail/MusicDetailSt'
import { onGetLocalStorage } from '../../util/cookie'
import CustomAlert from '../alret/CustomAlert'

function AddRecomment({ reviewId }: { reviewId: number }) {
  const [comment, setComment] = useState<string>('')
  const queryClient = useQueryClient()
  const [showCustomAlert, setShowCustomAlert] = useState<boolean>(false)
  const mutation = useMutation(addRecomment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['recomments', reviewId])
    },
  })

  const onSubmitCommentHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const isLoggedIn = onGetLocalStorage('accessToken')
      if (isLoggedIn === null) {
        setShowCustomAlert(true)
        return
      }
      if (comment.trim() === '') return
      mutation.mutate({ reviewId, comment })
      setComment('')
    },
    [mutation, reviewId, comment]
  )

  return (
    <>
      <CustomAlert
        showAlert={showCustomAlert}
        onHide={() => setShowCustomAlert(false)}
        message="로그인 후 이용 가능합니다."
      />
      <AddReform onSubmit={onSubmitCommentHandler}>
        <AddReCommentTextArea
          value={comment}
          onChange={(e) => {
            const text = e.target.value
            setComment(text)
          }}
          placeholder="게시물의 저작권 등 분쟁, 개인정보 노출로 인한 책임은 작성자 또는 게시자에게 있음을 유의해 주세요."
        />
        <ReCharacters>{comment.length}/50</ReCharacters>
        <ReCommentBtn type="submit">댓글 작성</ReCommentBtn>
      </AddReform>
    </>
  )
}

export default AddRecomment
