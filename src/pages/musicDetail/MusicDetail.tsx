import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getMusicDetail, getComposer } from '../../api/comments'
import Header from '../../components/header/Header'
import AddComment from '../../components/musicdetail/AddComment'
import CommentsList from '../../components/musicdetail/CommentsList'
import ReCommentsList from '../../components/musicdetail/ReCommentsList'
import Wrapper from '../../components/Wrapper'
import {
  ComposerImg,
  ComposerName,
  Con,
  InfoContainer,
  Ment,
  MusicDesc,
  MusicTitle,
  PlayBtn,
  TitleAndBtn,
} from './MusicDetailSt'
import { useDispatch } from 'react-redux'
import { setMusicPlay } from '../../redux/modules/musicPlayer'
import { setIsPlaying } from '../../redux/modules/isPlaying'

function MusicDetail() {
  const params = useParams()
  const musicId = Number(params.id)
  const dispatch = useDispatch()

  const { isLoading, isError, data } = useQuery(
    ['musicDetail', musicId],
    () => getMusicDetail({ musicId }),
    {
      enabled: !!musicId,
    }
  )

  const onClickMusicChangeHandler = (music: any) => {
    dispatch(setMusicPlay(music))
    dispatch(setIsPlaying())
  }

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

  if (!data || !data.composer || !composer || isLoading || composerIsLoading)
    return <div></div>
  if (isError) return <div></div>

  return (
    <Wrapper>
      <Header />
      <Ment>다른 회원들과 음악 감상평을 공유해 보세요.</Ment>
      <Con>
        <ComposerImg src={composer} alt={`${data.composer} 이미지`} />
        <InfoContainer>
          <TitleAndBtn>
            <MusicTitle onClick={() => onClickMusicChangeHandler(data)}>
              {data.musicTitle}
            </MusicTitle>
            <PlayBtn onClick={() => onClickMusicChangeHandler(data)}>
              음악 재생
            </PlayBtn>
          </TitleAndBtn>
          <MusicDesc>{data.musicContent}</MusicDesc>
          <ComposerName>{data.composer}</ComposerName>
        </InfoContainer>
      </Con>

      <Ment>좋아하는 음악에 대해 댓글을 남겨보세요.</Ment>
      <AddComment musicId={musicId} />
      <CommentsList musicId={musicId} />
      <ReCommentsList reviewId={musicId} />
    </Wrapper>
  )
}

export default MusicDetail
