import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getMusicDetail, getComposer } from '../../api/comments'
import AddComment from '../../components/musicdetail/AddComment'
import CommentsList from '../../components/musicdetail/CommentsList'
import ReCommentsList from '../../components/musicdetail/ReCommentsList'
import { ComposerImg } from './MusicDetailSt'

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
    <div>
      <p>{data.composer}</p>
      <p>{data.musicTitle}</p>
      <p>{data.musicContent}</p>
      <ComposerImg src={composer} alt={`${data.composer} 이미지`} />
      <audio controls>
        <source src={data.musicUrl} type="audio/mpeg" />
      </audio>
      <AddComment musicId={musicId} />
      <CommentsList musicId={musicId} />
      <ReCommentsList reviewId={musicId} />
    </div>
  )
}

export default MusicDetail
