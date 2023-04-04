import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getMusicDetail, getComposer } from '../../api/comments'
import Header from '../../components/header/Header'
import AddComment from '../../components/musicdetail/AddComment'
import CommentsList from '../../components/musicdetail/CommentsList'
import ReCommentsList from '../../components/musicdetail/ReCommentsList'
import Play from '../../components/playbar/Play'
import Wrapper from '../../components/Wrapper'
import {
  ComposerImg,
  ComposerName,
  Con,
  Ment,
  MusicDesc,
  MusicTitle,
} from './MusicDetailSt'

function MusicDetail() {
  const params = useParams()
  const musicId = Number(params.id)

  const { isLoading, isError, data } = useQuery(
    ['musicDetail', musicId],
    () => getMusicDetail({ musicId }),
    {
      enabled: !!musicId,
    }
  )

  const composerName = data?.composer

  const { data: composer, isLoading: composerIsLoading } = useQuery(
    ['composer', composerName],
    () => {
      if (!composerName) {
        return Promise.resolve(null)
      }

      return getComposer({ composer: composerName })
    },
    {
      enabled: !!composerName,
    }
  )

  if (!data || !data.composer || !composer || isLoading || composerIsLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>Error!</h1>
  }

  return (
    <Wrapper>
      <Header />
      <Ment>다른 회원들과 음악 감상평을 공유해 보세요.</Ment>
      <Con>
        <ComposerImg src={composer} alt={`${data.composer} 이미지`} />
        <MusicTitle>{data.musicTitle}</MusicTitle>
        <MusicDesc>{data.musicContent}</MusicDesc>
        <ComposerName>{data.composer}</ComposerName>
      </Con>

      <Ment>좋아하는 음악에 대해 댓글을 남겨보세요.</Ment>
      <AddComment musicId={musicId} />
      <CommentsList musicId={musicId} />
      <ReCommentsList reviewId={musicId} />
      <Play />
    </Wrapper>
  )
}

export default MusicDetail
